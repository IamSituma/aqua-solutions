import type { Metadata } from 'next';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ShoppingCart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Browse our range of water filters, reverse osmosis systems, UV sterilisers and more from Aqua Solutions International.',
};

export default function Products() {
  const products = [
    {
      name: 'Premium Home Filtration System',
      category: 'Water Filters',
      price: 'UGX 850,000',
      description: 'Complete home water filtration system with 5-stage purification and mineral retention.',
      features: ['5-stage filtration', 'Reduces chlorine & bacteria', '6-month filter life', 'Easy installation'],
      image: '💧',
    },
    {
      name: 'Portable Water Purifier',
      category: 'Travel & Portable',
      price: 'UGX 125,000',
      description: 'Compact and lightweight purifier perfect for travel and emergency use.',
      features: ['Ultra-portable', 'Instant purification', 'Long-lasting cartridge', 'No batteries needed'],
      image: '🧴',
    },
    {
      name: 'Commercial Grade Filter',
      category: 'Commercial Systems',
      price: 'UGX 2,500,000',
      description: 'Heavy-duty filtration system for offices, restaurants, and businesses.',
      features: ['High capacity', '24/7 operation', 'Auto-shutoff', 'Professional installation included'],
      image: '⚙️',
    },
    {
      name: 'UV Sterilization Unit',
      category: 'Treatment Equipment',
      price: 'UGX 550,000',
      description: 'Advanced UV sterilization to eliminate bacteria, viruses, and microorganisms.',
      features: ['99.99% elimination', 'Chemical-free', 'Low energy consumption', 'Automatic operation'],
      image: '🔬',
    },
    {
      name: 'Water Testing Kit',
      category: 'Testing Equipment',
      price: 'UGX 75,000',
      description: 'Complete DIY water testing kit for home quality assessment.',
      features: ['10 test parameters', 'Quick results', 'Easy to use', 'Detailed guide included'],
      image: '📊',
    },
    {
      name: 'Mineral Infuser Cartridge',
      category: 'Accessories',
      price: 'UGX 45,000',
      description: 'Add essential minerals back to purified water for better taste and health.',
      features: ['Natural minerals', 'pH balanced', '6-month lifespan', 'Easy replacement'],
      image: '⛰️',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation />

      {/* Hero Section with full-width background image */}
        <section
          className="relative w-full bg-white min-h-[550px] sm:min-h-[450px] flex items-center justify-center"
          style={{ minHeight: '550px' }}
        >
        <img
          src="/products-hero.jpg"
          alt="Our Products Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 w-full max-w-7xl mx-auto flex flex-col items-start justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
          <p className="mt-6 text-white font-[Inter,sans-serif] font-semibold text-5xl sm:text-6xl tracking-tight leading-tight">
            Our Products
          </p>
          <p className="text-lg text-white/90 max-w-2xl drop-shadow text-left">
            High-quality water treatment products and equipment for residential and commercial use
          </p>
        </div>
      </section>

      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {products.map((product, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                <div className="bg-linear-to-br from-accent/10 to-primary/10 h-32 flex items-center justify-center text-5xl border-b border-border">
                  {product.image}
                </div>
                <div className="p-6 flex flex-col grow">
                  <p className="text-xs font-semibold text-accent uppercase mb-1">{product.category}</p>
                  <h3 className="text-lg font-bold text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 grow">{product.description}</p>
                  <div className="space-y-2 mb-6 py-4 border-y border-border">
                    {product.features.map((feature, fidx) => (
                      <p key={fidx} className="text-xs text-muted-foreground">• {feature}</p>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                    <button className="bg-accent text-accent-foreground p-2 rounded-lg hover:bg-accent/90 transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Product Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {['Water Filters', 'Travel & Portable', 'Commercial Systems', 'Treatment Equipment', 'Testing Equipment', 'Accessories', 'Smart Technology', 'Services'].map((category, idx) => (
                <button key={idx} className="bg-secondary hover:bg-primary hover:text-primary-foreground text-foreground px-6 py-3 rounded-lg font-semibold transition-colors">
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Why Choose Our Products */}
          <div className="bg-primary text-primary-foreground rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Aqua Solutions Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Certified Quality', desc: 'All products meet international water safety standards' },
                { title: 'Warranty Included', desc: '2-year warranty on all products with free repairs' },
                { title: 'Expert Support', desc: 'Professional advice for selecting the right product' },
                { title: 'Free Delivery', desc: 'Free delivery on all orders within Kampala' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold text-primary mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our product specialists are ready to recommend the perfect solution for your needs
            </p>
            <a href="/contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block">
              Get Expert Recommendation
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
