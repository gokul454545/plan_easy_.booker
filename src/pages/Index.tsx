import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import PopularVenues from "@/components/PopularVenues";
import Services from "@/components/Services";
import ServiceProviders from "@/components/ServiceProviders";
import CallToAction from "@/components/CallToAction";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Categories />
      <PopularVenues />
      <Services />
      <ServiceProviders />
      <CallToAction />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
