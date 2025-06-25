"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1462635/pexels-photo-1462635.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const duplicatedImages = [...images, ...images]; // for seamless loop

const VideoGallery: React.FC = () => {
  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-bold">Video Memory Reel</h2>
        <p className="text-gray-300 mt-4 text-xl max-w-2xl mx-auto">
          Infinite stream of memories that flows forever.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
          style={{ width: "200%" }}
        >
          {duplicatedImages.map((src, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[200px] rounded-xl overflow-hidden relative group"
            >
              <img
                src={src}
                alt={`Video frame ${idx + 1}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-2xl">🎥</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGallery;