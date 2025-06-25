"use client";

import React from "react";
import { motion } from "framer-motion";

// Adjust this number based on how many images you have in public/photos
const totalPhotos = 12;
const images = Array.from({ length: totalPhotos }, (_, i) => `/photos/photo${i + 1}.jpg`);
const duplicatedImages = [...images, ...images]; // loop effect

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
