import {
  About,
  Blogs,
  ContactUs,
  Footer,
  Projects,
  Skills,
} from "../../Sections/index";

import { Navigation } from "../../utils";
import Services from "./../../Sections/Services/Services";

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Services />
      <ContactUs />
      <Footer />
      <Navigation />
    </>
  );
};

export default Home;
