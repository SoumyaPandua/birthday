import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import VideoSection from './components/VideoSection';
import MessageSection from './components/MessageSection';
import ShareSection from './components/ShareSection';
import BackgroundMusic from './components/BackgroundMusic';
import VideoGallery from './components/VideoGallery';

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    
    // Hide confetti after 10 seconds
    const confettiTimer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(confettiTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.1}
          colors={['#ff69b4', '#ffd700', '#ff1493', '#9370db', '#00ced1', '#ffa500']}
        />
      )}

      {/* Background Music */}
      <BackgroundMusic />

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <VideoGallery />
        <PhotoGallery />
        <VideoSection />
        <MessageSection />
        <ShareSection />
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            Made with ❤️ for Sushree's Special Day
          </motion.p>
          <p className="text-gray-400 mt-2">
            May this birthday be the beginning of the most amazing year yet!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;