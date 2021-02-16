import AboutUs from "../components/about/AboutUs";
import OurBlog from "../components/blog/OurBlog";
import Contact from "../components/contact/Contact";
import CounterMain from "../components/counter/CounterMain";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Navbar from "../components/header/Navbar";
import PricingPlan from "../components/pricing-plan/PricingPlan";
import OurServices from "../components/services/OurServices";
import TestimonialMain from "../components/testimonial/TestimonialMain";
import WorkProcess from "../components/work/WorkProcess";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <OurServices />
      <AboutUs />
      <WorkProcess />
      <TestimonialMain />
      <PricingPlan />
      <CounterMain />
      <OurBlog />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
