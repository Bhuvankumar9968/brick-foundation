import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import MissionVision from '@/components/MissionVision';
import CoreValues from '@/components/CoreValues';
import Impact from '@/components/Impact';
import Work from '@/components/Work';
// import Testimonials from '@/components/Testimonials';
// import GetInvolved from '@/components/GetInvolved';
import DonateNow from '@/components/donate-now';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoreValues />
        <Work />
        <Impact />
        {/* <Testimonials /> */}
        {/* <GetInvolved /> */}
        <DonateNow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
