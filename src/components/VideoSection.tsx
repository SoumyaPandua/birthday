import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Special Celebration
          </h2>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            A beautiful moment captured just for you
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="aspect-video bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center relative">
            {/* Video placeholder - replace with actual video */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 cursor-pointer hover:bg-white/30 transition-colors"
              >
                <Play className="w-12 h-12 text-white ml-1" fill="currentColor" />
              </motion.div>
            </div>
            
            {/* You can replace this with an actual video element */}
            <video
              className="w-full h-full object-cover"
              poster="https://images.pexels.com/photos/1687675/pexels-photo-1687675.jpeg?auto=compress&cs=tinysrgb&w=800"
              controls
              preload="metadata"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <p className="text-pink-100 text-lg">
            "Every moment with you is a celebration worth remembering"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;