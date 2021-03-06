// import posts_slug from "public/posts-slug.json";
import { HOST_URL } from "global/envs";
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  try {
    // An array with your links
    const links = [];
    // posts_slug.map(slug => {
    //   links.push({
    //     url: `${HOST_URL}/${slug}`,
    //     changefreq: "weekly",
    //     priority: 0.9,
    //   });
    // });

    // Add other pages
    const pages = [
      "contact-us",
      "about-us",
      "blog",
      "privacy-policy",
      "terms-of-service",
      "dmca",
    ];
    pages.map(url => {
      links.push({
        url: `${HOST_URL}/${url}`,
        changefreq: "weekly",
        priority: 0.9,
      });
    });

    // Create a stream to write to
    const stream = new SitemapStream({
      hostname: `https://${HOST_URL}`,
    });

    res.writeHead(200, {
      "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then(data => data.toString());

    res.end(xmlString);
  } catch (e) {
    console.log(e);
    res.send(JSON.stringify(e));
  }
};
