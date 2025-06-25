import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

const BackgroundMusic: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!userInteracted) {
        setUserInteracted(true);
        // Try to play music after user interaction
        if (audioRef.current && !isPlaying) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
          }).catch(console.error);
        }
      }
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('scroll', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('scroll', handleUserInteraction);
    };
  }, [isPlaying, userInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      >
        <source src="/photos/birthday-song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.button
          onClick={toggleMusic}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white/20 backdrop-blur-md text-white p-4 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6" />
          ) : (
            <VolumeX className="w-6 h-6" />
          )}
        </motion.button>
      </motion.div>
    </>
  );
};

export default BackgroundMusic;