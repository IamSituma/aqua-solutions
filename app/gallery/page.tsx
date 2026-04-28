'use client';

import { useState } from 'react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CtaSection } from '@/components/cta-section';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type GalleryCategory = 'All' | 'Installations' | 'Products' | 'Company';

const categories: { id: GalleryCategory; label: string }[] = [
  { id: 'All', label: 'All' },
  { id: 'Installations', label: 'Installations' },
  { id: 'Products', label: 'Products' },
  { id: 'Company', label: 'Company' },
];

const galleryItems = [
  {
    id: 1,
    title: 'Community Water Project',
    category: 'Installations' as GalleryCategory,
    image: '/aqua.jpeg',
    images: [
      '/aqua.jpeg',
      '/aqua-expo2.jpeg',
      '/aqua-staff2.jpeg',
      '/auqa3.jpeg',
    ],
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const handlePrev = () => {
    if (selectedItem) {
      setCurrentSlide((prev) => (prev - 1 + selectedItem.images.length) % selectedItem.images.length);
    }
  };

  const handleNext = () => {
    if (selectedItem) {
      setCurrentSlide((prev) => (prev + 1) % selectedItem.images.length);
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative w-full bg-white min-h-[300px] sm:min-h-[550px] flex items-center justify-center">
        <img
          src="/safe water.jpg"
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-10 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Our Gallery
          </p>
          <p className="text-sm sm:text-lg text-white/90 max-w-2xl drop-shadow text-left">
            Explore our portfolio of water solutions, installations, and company moments
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center sm:justify-start">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-[#0077b6] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setSelectedItem(item);
                  setCurrentSlide(0);
                }}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-64 sm:h-72 text-left"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-semibold text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Title on mobile/default */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 group-hover:hidden">
                  <h3 className="text-white font-semibold text-base line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal Carousel */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-lg bg-black h-96 sm:h-[500px] md:h-[600px]">
              {/* Images */}
              {selectedItem.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`${selectedItem.title} ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    idx === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {selectedItem.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      idx === currentSlide ? 'bg-white' : 'bg-white/40'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-md text-sm">
                {currentSlide + 1} / {selectedItem.images.length}
              </div>
            </div>

            {/* Title */}
            <div className="mt-4 text-center">
              <h2 className="text-white text-xl sm:text-2xl font-semibold">{selectedItem.title}</h2>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <CtaSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}