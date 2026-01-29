import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Truck, Shield, RotateCcw, Check, ChevronLeft, Mail } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          {/* Breadcrumb */}
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image - Chỉnh sửa object-contain và bg-white */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-white border border-border flex items-center justify-center p-8 shadow-sm">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
              
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 bg-white p-1 transition-all ${
                        selectedImage === index
                          ? 'border-primary shadow-md'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <img src={image} alt="" className="w-full h-full object-contain" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                {/* ĐÃ XÓA DÒNG HIỂN THỊ BRAND Ở ĐÂY */}
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 leading-tight">
                  {product.name}
                </h1>

                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground/30'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center flex-wrap gap-3">
                  <span className="text-4xl font-bold text-foreground">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <div className="flex items-center gap-2">
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                      <span className="px-2 py-1 bg-red-500/10 text-red-500 text-xs font-bold rounded">
                        -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div className="h-px bg-border w-full" />

              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="flex items-center gap-2 py-2">
                {product.stock > 0 ? (
                  <>
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-600 text-sm font-semibold">
                      In Stock ({product.stock} available)
                    </span>
                  </>
                ) : (
                  <>
                    <div className="w-2.5 h-2.5 bg-destructive rounded-full" />
                    <span className="text-destructive text-sm font-semibold">Out of Stock</span>
                  </>
                )}
              </div>

              {/* Contact Us Button */}
              <div className="pt-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full text-lg py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-1"
                  >
                    <Mail className="w-6 h-6 mr-3" />
                    Contact Us to Order
                  </Button>
                </Link>
                <p className="text-center text-xs text-muted-foreground mt-3 italic">
                  Have questions? Kali Clark is ready to help you with your order.
                </p>
              </div>

              {/* Features Icons */}
              <div className="grid grid-cols-3 gap-4 py-8 border-y border-border">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-foreground">Free Shipping</p>
                  <p className="text-[10px] text-muted-foreground">On all orders</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-foreground">Secure Payment</p>
                  <p className="text-[10px] text-muted-foreground">Certified safety</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-xs font-bold text-foreground">30 Day Returns</p>
                  <p className="text-[10px] text-muted-foreground">No questions asked</p>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="glass-card overflow-hidden">
                <div className="bg-secondary/50 px-6 py-4 border-b border-border">
                  <h3 className="font-bold text-foreground">Technical Specifications</h3>
                </div>
                <div className="p-6 space-y-0">
                  {product.specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-3 border-b border-border/50 last:border-0 hover:bg-secondary/20 px-2 -mx-2 transition-colors rounded"
                    >
                      <span className="text-muted-foreground text-sm">{spec.label}</span>
                      <span className="text-foreground font-semibold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-32">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-bold text-foreground">You May Also Like</h2>
                <Link to="/shop" className="text-primary hover:underline text-sm font-medium">
                  View All Products
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;