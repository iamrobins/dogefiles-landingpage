import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Faq from "./FAQ";

const Layout = ({ children }) => {
  return (
    <Box margin="0 auto" maxWidth="1400" transition="0.5s ease-out">
      <Box marginX={[2, 4, 6, 8]}>
        <Navbar />
        <Box
          as="main"
          // marginY={22} old value
          marginY="4rem"
        >
          {children}
        </Box>
        <Faq/>
        <Footer />
       
      </Box>
    </Box>
  );
};

export default Layout;
