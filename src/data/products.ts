export interface Product {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  specs: { label: string; value: string }[];
  stock: number;
  rating: number;
  reviews: number;
  featured?: boolean;
  trending?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "ProBook Ultra 16",
    category: "Laptops",
    brand: "TechVision",
    price: 1899,
    originalPrice: 2199,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Experience unparalleled performance with the ProBook Ultra 16. Featuring the latest M-series chip, stunning Retina display, and all-day battery life.",
    specs: [
      { label: "Processor", value: "M3 Pro 12-core" },
      { label: "Memory", value: "32GB Unified" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Display", value: "16.2\" Liquid Retina XDR" },
      { label: "Battery", value: "Up to 22 hours" },
      { label: "Weight", value: "2.14 kg" },
    ],
    stock: 15,
    rating: 4.9,
    reviews: 234,
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "Galaxy Pro Max",
    category: "Smartphones",
    brand: "NexGen",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&auto=format&fit=crop&q=60",
    ],
    description: "The Galaxy Pro Max redefines mobile photography with its revolutionary 200MP camera system and AI-powered features.",
    specs: [
      { label: "Display", value: "6.8\" Dynamic AMOLED 2X" },
      { label: "Processor", value: "Snapdragon 8 Gen 3" },
      { label: "Camera", value: "200MP + 12MP + 50MP" },
      { label: "Battery", value: "5000mAh" },
      { label: "Storage", value: "512GB" },
      { label: "5G", value: "Yes" },
    ],
    stock: 28,
    rating: 4.8,
    reviews: 567,
    featured: true,
    trending: true,
  },
  {
    id: "3",
    name: "AirPods Pro Max",
    category: "Audio",
    brand: "SoundWave",
    price: 549,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Immerse yourself in studio-quality sound with active noise cancellation and spatial audio.",
    specs: [
      { label: "Driver", value: "40mm Custom" },
      { label: "ANC", value: "Adaptive" },
      { label: "Battery", value: "20 hours" },
      { label: "Connectivity", value: "Bluetooth 5.3" },
      { label: "Weight", value: "384g" },
    ],
    stock: 42,
    rating: 4.7,
    reviews: 892,
    trending: true,
  },
  {
    id: "4",
    name: "RTX 4090 Founders",
    category: "Components",
    brand: "CoreTech",
    price: 1599,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60",
    ],
    description: "The ultimate graphics card for gamers and creators. Experience ray tracing and AI-powered performance.",
    specs: [
      { label: "CUDA Cores", value: "16384" },
      { label: "Memory", value: "24GB GDDR6X" },
      { label: "Boost Clock", value: "2.52 GHz" },
      { label: "TDP", value: "450W" },
      { label: "Ray Tracing", value: "3rd Gen" },
    ],
    stock: 8,
    rating: 4.9,
    reviews: 156,
    featured: true,
  },
  {
    id: "5",
    name: "UltraWide 34 Curved",
    category: "Accessories",
    brand: "ViewMax",
    price: 799,
    originalPrice: 899,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Expand your view with this stunning 34-inch curved ultrawide monitor. Perfect for productivity and gaming.",
    specs: [
      { label: "Size", value: "34\" Curved" },
      { label: "Resolution", value: "3440 x 1440" },
      { label: "Refresh Rate", value: "165Hz" },
      { label: "Panel", value: "IPS" },
      { label: "Response Time", value: "1ms" },
    ],
    stock: 19,
    rating: 4.6,
    reviews: 312,
    trending: true,
  },
  {
    id: "6",
    name: "MechKey Pro RGB",
    category: "Accessories",
    brand: "KeyMaster",
    price: 179,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Premium mechanical keyboard with hot-swappable switches and per-key RGB lighting.",
    specs: [
      { label: "Switches", value: "Cherry MX Brown" },
      { label: "Layout", value: "Full Size" },
      { label: "Backlight", value: "Per-key RGB" },
      { label: "Connection", value: "USB-C / Wireless" },
    ],
    stock: 67,
    rating: 4.8,
    reviews: 445,
  },
  {
    id: "7",
    name: "GamePad Elite",
    category: "Accessories",
    brand: "ProGamer",
    price: 199,
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Professional-grade controller with customizable buttons and ultra-low latency.",
    specs: [
      { label: "Connectivity", value: "Bluetooth 5.0 / USB-C" },
      { label: "Battery", value: "40 hours" },
      { label: "Vibration", value: "Haptic Feedback" },
      { label: "Compatibility", value: "PC, Console, Mobile" },
    ],
    stock: 34,
    rating: 4.5,
    reviews: 189,
  },
  {
    id: "8",
    name: "ThinkPad X1 Carbon",
    category: "Laptops",
    brand: "TechVision",
    price: 1649,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=60",
    images: [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop&q=60",
    ],
    description: "Ultra-light business laptop with legendary durability and all-day battery life.",
    specs: [
      { label: "Processor", value: "Intel Core i7-1365U" },
      { label: "Memory", value: "16GB LPDDR5" },
      { label: "Storage", value: "512GB SSD" },
      { label: "Display", value: "14\" 2.8K OLED" },
      { label: "Weight", value: "1.12 kg" },
    ],
    stock: 12,
    rating: 4.7,
    reviews: 278,
  },
];

export const categories = [
  {
    id: "laptops",
    name: "Laptops",
    description: "Powerful machines for work and play",
    icon: "Laptop",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "smartphones",
    name: "Smartphones",
    description: "Stay connected with cutting-edge devices",
    icon: "Smartphone",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "audio",
    name: "Audio",
    description: "Immersive sound experiences",
    icon: "Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "components",
    name: "Components",
    description: "Build your dream machine",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Complete your setup",
    icon: "Mouse",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&auto=format&fit=crop&q=60",
  },
];

export const brands = ["TechVision", "NexGen", "SoundWave", "CoreTech", "ViewMax", "KeyMaster", "ProGamer"];
