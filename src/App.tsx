import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import VideoShowcase from "@/components/VideoShowcase";
import Testimonials from "@/components/Testimonials";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import MobileBottomBar from "@/components/MobileBottomBar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Features />
      <About />
      <Gallery />
      <VideoShowcase />
      <Testimonials />
      <BookingForm />
      <Footer />
      <Chatbot />
      <MobileBottomBar />
    </div>
  );
}

export default App;