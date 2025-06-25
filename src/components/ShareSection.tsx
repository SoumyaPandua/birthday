import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2, Copy, Check, Heart } from 'lucide-react';

const ShareSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  const shareData = {
    title: 'Happy Birthday Sushree!',
    text: 'Check out this beautiful birthday wish website!',
    url: currentUrl,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      handleCopyLink();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Heart className="w-12 h-12 text-pink-300 mx-auto" fill="currentColor" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Spread the Love
          </h2>
          <p className="text-xl text-pink-100">
            Share this special birthday message with others
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 100 }}
          className="space-y-4"
        >
          <motion.button
            onClick={handleNativeShare}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white/20 backdrop-blur-sm text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            <Share2 className="w-6 h-6" />
            <span>Share This Birthday Wish</span>
          </motion.button>

          <motion.button
            onClick={handleCopyLink}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-white/10 backdrop-blur-sm text-white py-4 px-8 rounded-2xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-3"
          >
            {copied ? (
              <>
                <Check className="w-6 h-6 text-green-300" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-6 h-6" />
                <span>Copy Link</span>
              </>
            )}
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-pink-100 text-lg">
            "The best way to celebrate is together" 🎉
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShareSection;