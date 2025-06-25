import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const MessageSection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, 0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="inline-block mb-6"
          >
            <Heart className="w-16 h-16 text-pink-500 mx-auto" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Happy Birthday Sushree!
          </h2>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"></div>
          
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-8 right-8"
          >
            <Star className="w-8 h-8 text-yellow-400" fill="currentColor" />
          </motion.div>

          <div className="relative z-10">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8"
            >
              You are absolutely amazing because you light up every room you enter with your infectious smile and genuine kindness. Your compassion for others, your incredible sense of humor, and your ability to find joy in the smallest moments make you truly special.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-8"
            >
              Your friendship has been a gift that keeps on giving. You've been there through all the ups and downs, always knowing exactly what to say to make everything better. Your loyalty, your wisdom, and your beautiful heart make you one of the most wonderful people I know.
            </motion.p>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-12"
            >
              On this special day, I wish you all the happiness, love, and success that life has to offer. May this new year of your life be filled with beautiful adventures, precious memories, and dreams coming true. You deserve nothing but the very best!
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                With all my love,
              </p>
              <p className="text-xl md:text-2xl text-gray-600 mt-2 font-light">
                Your Friend Always ❤️
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;