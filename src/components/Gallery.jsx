import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    alt: 'Kamar rapi bernuansa biru',
  },
  {
    src: 'https://images.unsplash.com/photo-1565694190089-ef504b1f4875?ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Kamar tidur dengan jendela besar',
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1600&auto=format&fit=crop',
    alt: 'Kamar mandi bersih',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1600&auto=format&fit=crop',
    alt: 'Ruang bersama nyaman',
  },
  {
    src: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Area kerja minimalis',
  },
  {
    src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
    alt: 'Detail dekorasi modern',
  },
];

export default function Gallery({ compact = false }) {
  if (compact) {
    return (
      <div className="grid grid-cols-2 gap-2">
        {images.slice(0, 4).map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="aspect-video object-cover rounded-lg border border-blue-100"
            loading="lazy"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[1] bg-gradient-to-b from-blue-100/40 to-transparent rounded-3xl pointer-events-none" />
      <div className="grid md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2 overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm"
        >
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-500"
            loading="lazy"
          />
        </motion.div>
        <div className="grid grid-cols-1 gap-4">
          {images.slice(1, 3).map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.05 * idx }}
              className="overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {images.slice(3).map((img, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
            className="overflow-hidden rounded-2xl border border-blue-100 bg-white/70 backdrop-blur-sm"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-[16/9] object-cover hover:scale-[1.02] transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
