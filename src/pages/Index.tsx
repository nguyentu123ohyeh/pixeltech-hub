import { Layout } from '@/components/layout/Layout';
import { Hero } from '@/components/home/Hero';
import { Categories } from '@/components/home/Categories';
import { TrendingProducts } from '@/components/home/TrendingProducts';
import { FeaturedBanner } from '@/components/home/FeaturedBanner';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <TrendingProducts />
      <FeaturedBanner />
    </Layout>
  );
};

export default Index;
