import type { Metadata } from 'next';
import { products } from '@/lib/products';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found' };
  }

  return {
    title: product.name,
    description: product.description.slice(0, 160),
    openGraph: {
      title: `${product.name} | Aqua Solutions International`,
      description: product.description.slice(0, 160),
      images: [{ url: product.image, width: 800, height: 800, alt: product.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Aqua Solutions International`,
      description: product.description.slice(0, 160),
      images: [product.image],
    },
  };
}

export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
