export interface Product {
  id: string;
  name: string;
  category: string;
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

// 6 Danh mục phụ kiện cho PixelTech Hub
export const categories = [
  {
    id: "keyboards",
    name: "Keyboards",
    description: "Mechanical and aesthetic typing",
    icon: "Keyboard",
    image: "https://m.media-amazon.com/images/I/61yuoPVvjhL._AC_SX466_.jpg",
  },
  {
    id: "mice-mousepads",
    name: "Mice & Mousepads",
    description: "Precision in every click",
    icon: "MousePointer",
    image: "https://m.media-amazon.com/images/I/81B+K5V6fTL._AC_SX466_.jpg",
  },
  {
    id: "phone-cases",
    name: "Phone Cases",
    description: "Stylish protection for your device",
    icon: "Smartphone",
    image: "https://m.media-amazon.com/images/I/8115CV1sKFL._AC_SX679_.jpg",
  },
  {
    id: "power-cables",
    name: "Power & Cables",
    description: "Stay charged anywhere, anytime",
    icon: "Zap",
    image: "https://m.media-amazon.com/images/I/612NrGLfOqL._AC_SX466_.jpg",
  },
  {
    id: "desk-setup",
    name: "Desk Setup",
    description: "Organize your creative workspace",
    icon: "Layout",
    image: "https://m.media-amazon.com/images/I/51KyaTB1EKL._AC_SX466_.jpg",
  },
  {
    id: "storage-gadgets",
    name: "Storage & Gadgets",
    description: "Portable data and tech toys",
    icon: "HardDrive",
    image: "https://m.media-amazon.com/images/I/81vCPnQtyCL._AC_SL1500_.jpg",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Magnetic Translucent Matte Case for iPhone 14/13",
    category: "Phone Cases",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/71LS35zBKWL._AC_SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71LS35zBKWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71nkTNqDLwL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71w6g8Z3+aL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/716gdbenvRL._AC_SX679_.jpg"
    ],
    description: "Military-grade protection meets sleek design. This translucent matte case is fully compatible with MagSafe accessories.",
    specs: [
      { label: "Material", value: "TPU & Polycarbonate" },
      { label: "Compatibility", value: "iPhone 14 & 13" },
      { label: "Feature", value: "Military Grade Protection" }
    ],
    stock: 85, rating: 4.6, reviews: 1240, featured: true
  },
  {
    id: "2",
    name: "Translucent Matte Magnetic Case - Pink Edition",
    category: "Phone Cases",
    price: 8.99,
    image: "https://m.media-amazon.com/images/I/614X8fuwcxL._AC_SX522_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/614X8fuwcxL._AC_SX522_.jpg",
      "https://m.media-amazon.com/images/I/71UHb01T-cL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71t5cxd3srL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71H9J2pmNxL._AC_SX569_.jpg"
    ],
    description: "A pop of color for your iPhone. This pink magnetic cover offers robust protection without hiding your phone's beauty.",
    specs: [
      { label: "Color", value: "Pink" },
      { label: "Compatibility", value: "iPhone 15/14/13" },
      { label: "MagSafe", value: "Supported" }
    ],
    stock: 42, rating: 4.8, reviews: 890
  },
  {
    id: "3",
    name: "Premium Techwoven Case for iPhone 17 Pro Max",
    category: "Phone Cases",
    price: 17.99,
    image: "https://m.media-amazon.com/images/I/8115CV1sKFL._AC_SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/8115CV1sKFL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/91ftxtzERwL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81R4ArLjJXL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81J3-142QEL._AC_SX679_.jpg"
    ],
    description: "Luxury meets technology. Featuring an embossed designer logo and a special texture for better grip and style.",
    specs: [
      { label: "Style", value: "Techwoven Blue" },
      { label: "Model", value: "iPhone 17 Pro Max" },
      { label: "Special", value: "Camera Button Friendly" }
    ],
    stock: 25, rating: 4.9, reviews: 156, trending: true
  },
  {
    id: "4",
    name: "Commuter Series Slim & Tough Case",
    category: "Phone Cases",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/61jhI2JSlOL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61jhI2JSlOL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61ofriaQ-lL._AC_SX466_.jpg"
    ],
    description: "Pocket-friendly design with rugged durability. Protects ports from dust and debris while maintaining a slim profile.",
    specs: [
      { label: "Color", value: "Black" },
      { label: "Series", value: "Commuter" },
      { label: "Protection", value: "Port Covers Included" }
    ],
    stock: 60, rating: 4.7, reviews: 2450
  },
  {
    id: "5",
    name: "10Ft Surge Protector Power Strip with 12 Outlets",
    category: "Power & Cables",
    price: 12.99,
    image: "https://m.media-amazon.com/images/I/612NrGLfOqL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/612NrGLfOqL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/7179nhg-EkL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/718Hj40tWuL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81Qow-oZzVL._AC_SX466_.jpg"
    ],
    description: "The ultimate charging station for your desk. Featuring 8 standard outlets and 4 USB ports, including 2 high-speed USB-C ports.",
    specs: [
      { label: "Cord Length", value: "10 Feet" },
      { label: "Ports", value: "8 Outlets, 2 USB-A, 2 USB-C" },
      { label: "Safety", value: "Surge Protection" }
    ],
    stock: 120, rating: 4.8, reviews: 3200, featured: true
  },
  {
    id: "6",
    name: "[2-Pack] 1ft Universal Power Cord NEMA 5-15P",
    category: "Power & Cables",
    price: 10.99,
    image: "https://m.media-amazon.com/images/I/61PO7InO-hL._AC_SY679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61PO7InO-hL._AC_SY679_.jpg",
      "https://m.media-amazon.com/images/I/51CTPLfI-hL._AC_SY679_.jpg"
    ],
    description: "Compact and reliable replacement power cables. Perfect for reducing cable clutter behind your PC or TV.",
    specs: [
      { label: "Length", value: "1 Foot / 0.3M" },
      { label: "Wire Gauge", value: "18 AWG" },
      { label: "Quantity", value: "2-Pack" }
    ],
    stock: 200, rating: 4.9, reviews: 540
  },
  {
    id: "7",
    name: "10ft Angled Non-Polarized Power Cord (C7)",
    category: "Power & Cables",
    price: 11.99,
    image: "https://m.media-amazon.com/images/I/61M7RIJQ7yL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61M7RIJQ7yL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51sy8gvoZaL._AC_SY679_.jpg",
      "https://m.media-amazon.com/images/I/61k0fZ+IU3L._AC_SY679_.jpg",
      "https://m.media-amazon.com/images/I/51F93P71XPL._AC_SY679_.jpg"
    ],
    description: "Specially designed for tight spaces. Ideal replacement for Samsung, LG, and TCL TVs.",
    specs: [
      { label: "Length", value: "10 Feet / 3M" },
      { label: "Type", value: "IEC320 C7 to Nema 1-15P" },
      { label: "Design", value: "Angled Slot" }
    ],
    stock: 75, rating: 4.7, reviews: 215
  },
  {
    id: "8",
    name: "(2-Pack) 15ft Universal PC Power Cord",
    category: "Power & Cables",
    price: 22.49,
    image: "https://m.media-amazon.com/images/I/71ly70FORdL._AC_SX466_.jpg",
    images: ["https://m.media-amazon.com/images/I/71ly70FORdL._AC_SX466_.jpg"],
    description: "Extra-long cables for versatile setup. Compatible with computers, monitors, scanners, and printers.",
    specs: [
      { label: "Length", value: "15 Feet" },
      { label: "Rating", value: "125V 10 Amp" },
      { label: "Connectors", value: "C13 to NEMA 5-15P" }
    ],
    stock: 45, rating: 4.8, reviews: 105
  },
  {
    id: "9",
    name: "Ergonomic Adjustable Laptop Stand (Silver)",
    category: "Desk Setup",
    price: 29.13,
    image: "https://m.media-amazon.com/images/I/51KyaTB1EKL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/51KyaTB1EKL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/719YhMezitL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61+4RLOQVcL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51Pxn51Q+lL._AC_SX466_.jpg"
    ],
    description: "Elevate your workflow and reduce neck pain. Sturdy aluminum build fits all laptops up to 17.3 inches.",
    specs: [
      { label: "Material", value: "Sturdy Aluminum" },
      { label: "Compatibility", value: "Up to 17.3 inch" },
      { label: "Adjustable", value: "Multi-level Height" }
    ],
    stock: 30, rating: 4.9, reviews: 860, trending: true
  },
  {
    id: "10",
    name: "Eye-Caring Architect LED Desk Lamp",
    category: "Desk Setup",
    price: 29.99,
    image: "https://m.media-amazon.com/images/I/71o9Kz0V9QL._AC_SX569_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71o9Kz0V9QL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71sRNuCmyYL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71AF9geA9XL._AC_SX569_.jpg",
      "https://m.media-amazon.com/images/I/71GRR27YwvL._AC_SX569_.jpg"
    ],
    description: "Dimmable brightness and adjustable gooseneck for the perfect study or work environment. Includes a desk clamp to save space.",
    specs: [
      { label: "Power", value: "12W LED" },
      { label: "Control", value: "Touch Control Dimmable" },
      { label: "Mount", value: "Architect Clamp" }
    ],
    stock: 50, rating: 4.8, reviews: 420
  },
  {
    id: "11",
    name: "Dual Monitor Stand Riser with Drawer",
    category: "Desk Setup",
    price: 35.97,
    image: "https://m.media-amazon.com/images/I/715+qntQ7xL._AC_SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/715+qntQ7xL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/7127PZ6SpAL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/718e9lFPxpL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/712bQf66V9L._AC_SX679_.jpg"
    ],
    description: "Maximize your desk organization. This riser holds two monitors and features a built-in drawer for pens and accessories.",
    specs: [
      { label: "Features", value: "Built-in Drawer, 2 Pen Holders" },
      { label: "Color", value: "Classic Black" },
      { label: "Capacity", value: "Supports Dual Monitors" }
    ],
    stock: 20, rating: 4.7, reviews: 112
  },
  {
    id: "12",
    name: "Large Felt Desk Mat (Marle) - 35x17 inch",
    category: "Mice & Mousepads",
    price: 27.97,
    image: "https://m.media-amazon.com/images/I/81H3OXv15VL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81H3OXv15VL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71wa6g5L6lL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71JMRFPKPwL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71oudzhl1jL._AC_SX466_.jpg"
    ],
    description: "Soft and sophisticated felt surface for your mouse and keyboard. Adds warmth and style to any setup.",
    specs: [
      { label: "Dimensions", value: "35 x 17 inches" },
      { label: "Material", value: "Premium Felt" },
      { label: "Color", value: "Marle Grey" }
    ],
    stock: 40, rating: 4.6, reviews: 340
  },
  {
    id: "13",
    name: "80 IN 1 Professional Computer Repair Tool Kit",
    category: "Storage & Gadgets",
    price: 19.99,
    image: "https://m.media-amazon.com/images/I/81vCPnQtyCL._AC_SL1500_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81vCPnQtyCL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71m8LzTKsuL._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/71ruASJf15L._AC_SL1500_.jpg",
      "https://m.media-amazon.com/images/I/81tTLjm6UOL._AC_SL1500_.jpg"
    ],
    description: "The ultimate kit for tech enthusiasts. Includes 56 precision bits and essential tools for MacBook, PC, and console repairs.",
    specs: [
      { label: "Pieces", value: "80 Items" },
      { label: "Bits", value: "56 Precision Bits" },
      { label: "Magnetic", value: "Yes" }
    ],
    stock: 55, rating: 4.9, reviews: 1250, featured: true
  },
  {
    id: "14",
    name: "32-Piece Electronics Screwdriver Tool Kit",
    category: "Storage & Gadgets",
    price: 14.47,
    image: "https://m.media-amazon.com/images/I/71LZUSImYRL._AC_SX679_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71LZUSImYRL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/71gqn6SqxYL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/51f52ugspUL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/712F6aXCRcL._AC_SX679_.jpg"
    ],
    description: "Compact and reliable. Perfect for general maintenance and daily repair tasks around the house or office.",
    specs: [
      { label: "Color", value: "Red" },
      { label: "Pieces", value: "32 Items" },
      { label: "Usage", value: "Electronics & Household" }
    ],
    stock: 90, rating: 4.5, reviews: 430
  },
  {
    id: "15",
    name: "59Pcs Mini Precision Repair Tool Kit",
    category: "Storage & Gadgets",
    price: 13.99,
    image: "https://m.media-amazon.com/images/I/81EUU5sjsOL._AC_SX679_PIbundle-59,TopRight,0,0_SH20_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81EUU5sjsOL._AC_SX679_PIbundle-59,TopRight,0,0_SH20_.jpg",
      "https://m.media-amazon.com/images/I/81ykmghSxWL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81MboirxTjL._AC_SX679_.jpg",
      "https://m.media-amazon.com/images/I/81f61Qnj1GL._AC_SX679_.jpg"
    ],
    description: "Includes specialized Torx bits (T5, T6, T8) for smartphones, watches, and smart doorbells.",
    specs: [
      { label: "Bits", value: "59 Specialized Bits" },
      { label: "Target", value: "Macbook, iPhone, Ring Doorbell" },
      { label: "Case", value: "Portable Organized Case" }
    ],
    stock: 110, rating: 4.7, reviews: 670
  },
  {
    id: "16",
    name: "142-Piece Pro Magnetic Repair Tool Kit",
    category: "Storage & Gadgets",
    price: 37.99,
    image: "https://m.media-amazon.com/images/I/81HGJ-wOEzL._AC_SX466_PIbundle-142,TopRight,0,0_SH20_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81HGJ-wOEzL._AC_SX466_PIbundle-142,TopRight,0,0_SH20_.jpg",
      "https://m.media-amazon.com/images/I/81cUAud60eL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71P4sv9aq0L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71pVEooZj-L._AC_SX466_.jpg"
    ],
    description: "The most comprehensive kit for professional repairers. 120 magnetic bits for every possible electronic device.",
    specs: [
      { label: "Bits", value: "120 Magnetic Bits" },
      { label: "Total Pieces", value: "142 Items" },
      { label: "Devices", value: "Nintendo, Xbox, PS5, PC" }
    ],
    stock: 15, rating: 5.0, reviews: 210, trending: true
  },
  {
    id: "17",
    name: "Gel Wrist Rest Mouse Pad (Classic Black)",
    category: "Mice & Mousepads",
    price: 4.99,
    image: "https://m.media-amazon.com/images/I/71E8iRn7dHL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71E8iRn7dHL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61QnHZn0SaL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51jUWHA57jL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51K-K3jYlaL._AC_SX466_.jpg"
    ],
    description: "Comfortable gel support helps relieve wrist pain during long hours of computer use.",
    specs: [
      { label: "Support", value: "Gel Wrist Rest" },
      { label: "Base", value: "Non-slip Rubber" },
      { label: "Color", value: "Black" }
    ],
    stock: 250, rating: 4.4, reviews: 5600
  },
  {
    id: "18",
    name: "ErgoComfort Gel Wrist Rest (Pink Serenity)",
    category: "Mice & Mousepads",
    price: 9.99,
    image: "https://m.media-amazon.com/images/I/41RY+TzdD8L._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/41RY+TzdD8L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61EvNgf7YqL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/61cDXmgzuIL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/51n-iF2z9YL._AC_SX466_.jpg"
    ],
    description: "Ergonomic design meets aesthetic pink color. Provides excellent support for gaming or home office decor.",
    specs: [
      { label: "Color", value: "Pink Serenity" },
      { label: "Design", value: "ErgoComfort" },
      { label: "Texture", value: "Soft Fabric" }
    ],
    stock: 80, rating: 4.7, reviews: 315
  },
  {
    id: "19",
    name: "XL Topographic Gaming Mouse Pad (3-Pack)",
    category: "Mice & Mousepads",
    price: 17.98,
    image: "https://m.media-amazon.com/images/I/81B+K5V6fTL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81B+K5V6fTL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71WB3jwLW5L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81v+A8kv-tL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81ueBvDBVnL._AC_SX466_.jpg"
    ],
    description: "Large desk coverage with a stunning topographic line design. Smooth surface for high-precision gaming.",
    specs: [
      { label: "Size", value: "31.5 x 11.8 inches" },
      { label: "Pattern", value: "Topographic White Lines" },
      { label: "Set", value: "3 Pieces" }
    ],
    stock: 65, rating: 4.8, reviews: 1420, trending: true
  },
  {
    id: "20",
    name: "Massage Design Ergonomic Mouse Pad",
    category: "Mice & Mousepads",
    price: 24.99,
    image: "https://m.media-amazon.com/images/I/81Ns+8HRnYL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81Ns+8HRnYL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71xnEUhwZtL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81WeJzIYV6L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81rT0T2JeQL._AC_SX466_.jpg"
    ],
    description: "Innovative memory foam with a massage texture to keep your wrist active and pain-free throughout the day.",
    specs: [
      { label: "Padding", value: "Memory Foam" },
      { label: "Feature", value: "Massage Texture" },
      { label: "Relief", value: "Carpal Tunnel Support" }
    ],
    stock: 35, rating: 4.9, reviews: 275
  },
  {
    id: "21",
    name: "Full-Sized Wired QWERTY Keyboard (Black)",
    category: "Keyboards",
    price: 11.69,
    image: "https://m.media-amazon.com/images/I/81CUhn2krDL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/81CUhn2krDL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81LdH27cq0L._AC_SX466_.jpg"
    ],
    description: "Simple, durable, and reliable. A standard full-size keyboard for every day office work.",
    specs: [
      { label: "Type", value: "Wired USB" },
      { label: "Layout", value: "Full-Sized QWERTY" },
      { label: "Key Life", value: "10 Million Clicks" }
    ],
    stock: 150, rating: 4.3, reviews: 8900
  },
  {
    id: "22",
    name: "Retro Typewriter Keyboard - Round Keys",
    category: "Keyboards",
    price: 27.99,
    image: "https://m.media-amazon.com/images/I/61C1XyZ-0CL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61C1XyZ-0CL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71c6YLJ9oWL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71VWTUmSdTL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/618aYuh-wbL._AC_SX466_.jpg"
    ],
    description: "Classic retro style meets modern technology. This keyboard features typewriter-style round keys for a unique typing feel.",
    specs: [
      { label: "Style", value: "Retro Typewriter" },
      { label: "Connectivity", value: "USB Plug & Play" },
      { label: "Keys", value: "Round Vintage Style" }
    ],
    stock: 40, rating: 4.7, reviews: 520, featured: true
  },
  {
    id: "23",
    name: "Cute Pink Retro Typewriter Keyboard",
    category: "Keyboards",
    price: 27.99,
    image: "https://m.media-amazon.com/images/I/61yuoPVvjhL._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61yuoPVvjhL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71DVmB4CiuL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71J20ID8NSL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71CdNRxmHqL._AC_SX466_.jpg"
    ],
    description: "A cute and stylish addition to your desk. Vibrant colors and round keys make typing a joy.",
    specs: [
      { label: "Color", value: "Pastel Pink" },
      { label: "Interface", value: "USB Wired" },
      { label: "Compatibility", value: "Windows / Mac / PC" }
    ],
    stock: 25, rating: 4.8, reviews: 410, trending: true
  },
  {
    id: "24",
    name: "Silent Wireless Keyboard and Mouse Combo",
    category: "Keyboards",
    price: 26.99,
    image: "https://m.media-amazon.com/images/I/71vulVx1+8L._AC_SX466_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/71vulVx1+8L._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/81+RwwvRwuL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71g1a56fWuL._AC_SX466_.jpg",
      "https://m.media-amazon.com/images/I/71gZavfWOmL._AC_SX466_.jpg"
    ],
    description: "Ditch the wires. This combo offers a silent typing and clicking experience with a reliable 2.4GHz connection.",
    specs: [
      { label: "Connection", value: "2.4GHz USB Receiver" },
      { label: "Feature", value: "Silent Keys & Clicks" },
      { label: "Included", value: "Keyboard + Wireless Mouse" }
    ],
    stock: 95, rating: 4.6, reviews: 1850
  }
];