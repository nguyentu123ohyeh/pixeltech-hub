import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="group glass-card-hover overflow-hidden h-full flex flex-col">
      <Link to={`/product/${product.id}`} className="block">
        {/* Container ảnh: Thêm bg-white và padding để ảnh contain trông đẹp hơn */}
        <div className="relative aspect-square overflow-hidden bg-white p-4">
          <img
            src={product.image}
            alt={product.name}
            // SỬA: Thay object-cover bằng object-contain để hiện full ảnh
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          
          {product.originalPrice && (
            <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-sm">
              SALE
            </span>
          )}
          
          {/* Lớp phủ gradient nhẹ khi hover */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>

      <div className="p-4 flex flex-col flex-grow space-y-3">
        {/* Đánh giá */}
        <div className="flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          <span className="text-xs text-muted-foreground">
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Tên sản phẩm */}
        <Link to={`/product/${product.id}`} className="flex-grow">
          <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 text-sm leading-tight">
            {product.name}
          </h3>
        </Link>

        {/* ĐÃ XÓA DÒNG HIỂN THỊ BRAND Ở ĐÂY */}

        {/* Giá và nút thêm vào giỏ */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-base font-bold text-foreground">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
            }}
            className="h-9 w-9 p-0 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-sm"
          >
            <ShoppingCart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};