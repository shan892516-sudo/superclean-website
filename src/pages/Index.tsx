import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => (
  <>
    <Header />
    <main>
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Gallery />
      <VideoShowcase />
      <BookingForm />
      <Testimonials />
    </main>
    <Footer />
    <MobileBottomBar />
  </>
);

export default Index;
