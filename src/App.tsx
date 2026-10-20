import Header from './components/Header';
import Hero from './components/Hero';
import RefillStation from './components/RefillStation';
import BottledWater from './components/BottledWater';
import WhyChoose from './components/WhyChoose';
import Location from './components/Location';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/27000000000?text=Hi%20AquaLope%2C%20I%27d%20like%20to%20place%20an%20order!';

export default function App() {
  return (
    <div className="min-h-screen bg-navy font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <RefillStation />
        <BottledWater />
        <WhyChoose />
        <Location />
      </main>
      <Footer />

      {/* Floating WhatsApp Button (Mobile) */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-whatsapp-dark text-white rounded-full shadow-lg shadow-whatsapp/30 transition-all duration-200 hover:scale-105"
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
