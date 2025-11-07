import React from 'react';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200&auto=format&fit=crop',
    alt: 'Kamar rapi bernuansa biru',
  },
  {
    src: 'https://images.unsplash.com/photo-1565694190089-ef504b1f4875?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxLYW1hciUyMHJhcGklMjBiZXJudWFuc2ElMjBiaXJ1fGVufDB8MHx8fDE3NjI0ODYxMDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    alt: 'Kamar tidur dengan jendela besar',
  },
  {
    src: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop',
    alt: 'Kamar mandi bersih',
  },
  {
    src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1200&auto=format&fit=crop',
    alt: 'Ruang bersama nyaman',
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
    <div className="grid md:grid-cols-3 gap-4">
      <div className="md:col-span-2">
        <img
          src={images[0].src}
          alt={images[0].alt}
          className="w-full aspect-video object-cover rounded-xl border border-blue-100"
          loading="lazy"
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={img.alt}
            className="w-full aspect-video object-cover rounded-xl border border-blue-100"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}
