// Dummy products data for the e-commerce store
export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  image: string
  allImages?: string[]
  category: "Tops" | "Shirts" | "Pants" | "Outerwear"
  colors: string[]
  rating: number
  reviews: number
  inStock: boolean
  isNew?: boolean
  isSale?: boolean
  discount?: number
  longDescription?: string;
  specs?: {
    fabric: string; // Fabric type (e.g., "One-side brush fleece")
    gsm: string; // GSM value (e.g., "350+ GSM")
    size: string[]; // Size options (e.g., ["M (40)", "L (42)", "XL (44)", "2XL (46)"])
    weatherSuitability: string; // Use cases (e.g., "Cold weather, casual outings, everyday use")
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM ",
    price: 700,
    originalPrice: 1000,
    description:
      " ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।",

    image: "/images/1.png",
    allImages: ["/images/1.png", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg"],
    category: "Outerwear",
    colors: ["black", "navy", "sage"],
    rating: 4.8,
    reviews: 0,
    inStock: true,
    isNew: true,
    isSale: true,
    discount: 30,
    specs: {
      fabric: "One-side brush fleece",
      gsm: "350+ GSM",
      size: ["M (40)", "L (42)", "XL (44)", "2XL (46)"],
      weatherSuitability: "Cold weather, casual outings, everyday use",
    },
    longDescription: `প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM | Limited Stock

ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।

GSM: 350+ — ভারি, ঘন ও স্ট্রং—যা দেয় দীর্ঘস্থায়ী ব্যবহার।

কালার: কালো | নেভি | মেরুন — সলিড, প্রিমিয়াম টোনে।

সাইজ: M (40) • L (42) • XL (44) • 2XL (46) — একদম বাস্তব মাপ অনুযায়ী।

ব্যবহারে উপযোগী: ঠান্ডা আবহাওয়া, ক্যাজুয়াল আউটিং, দৈনন্দিন ব্যবহার বা ভ্রমণে।

স্টক: সীমিত — দ্রুত অর্ডার করুন।

✨ আমাদের অঙ্গীকার — কোয়ালিটি ফার্স্ট

এক কথায়, আমরা আমাদের পোশাকে মূল ফোকাস দিয়েছি কোয়ালিটিতে।
আলহামদুলিল্লাহ, আমরা এতটুকু নিশ্চয়তা দিতে পারি — ইনশাল্লাহ, ঠকবেন না। আমরা কথায় না কাজে বিশ্বাসী।
প্রতিটি হুডি তৈরি করা হয়েছে নিখুঁত কারিগরি ও উচ্চমানের ফ্যাব্রিক দিয়ে, যাতে আপনি পান আরাম, স্টাইল আর আত্মবিশ্বাস—সব একসাথে।

আমরা বুঝি, কোয়ালিটি প্রোডাক্ট না হলে আত্মবিশ্বাসও কমে যায়।
আর তাই, নিজেকে আরও একধাপ এগিয়ে উপস্থাপন করতে হলে একটা কোয়ালিটি ফুল পোশাকই আপনার সিগনেচার হতে পারে।

স্টক বর্তমানে খুবই সীমিত। ইনশাল্লাহ, রিস্টক হবে, তবে এখনই অর্ডার করলে পাবেন প্রিমিয়াম ব্যাচের পোশাক`

  },
  {
    id: "2",
    name: "প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM Black",
    price: 700,
    originalPrice: 1000,
    description:
      " ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।",

    image: "/images/2.jpg",
    allImages: ["/images/2.jpg", "/images/1.png", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg"],
    category: "Outerwear",
    colors: ["black", "navy", "sage"],
    rating: 4.8,
    reviews: 0,
    inStock: true,
    isNew: true,
    isSale: true,
    discount: 30,
    specs: {
      fabric: "One-side brush fleece",
      gsm: "350+ GSM",
      size: ["M (40)", "L (42)", "XL (44)", "2XL (46)"],
      weatherSuitability: "Cold weather, casual outings, everyday use",
    },
    longDescription: `প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM | Limited Stock

ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।

GSM: 350+ — ভারি, ঘন ও স্ট্রং—যা দেয় দীর্ঘস্থায়ী ব্যবহার।

কালার: কালো | নেভি | মেরুন — সলিড, প্রিমিয়াম টোনে।

সাইজ: M (40) • L (42) • XL (44) • 2XL (46) — একদম বাস্তব মাপ অনুযায়ী।

ব্যবহারে উপযোগী: ঠান্ডা আবহাওয়া, ক্যাজুয়াল আউটিং, দৈনন্দিন ব্যবহার বা ভ্রমণে।

স্টক: সীমিত — দ্রুত অর্ডার করুন।

✨ আমাদের অঙ্গীকার — কোয়ালিটি ফার্স্ট

এক কথায়, আমরা আমাদের পোশাকে মূল ফোকাস দিয়েছি কোয়ালিটিতে।
আলহামদুলিল্লাহ, আমরা এতটুকু নিশ্চয়তা দিতে পারি — ইনশাল্লাহ, ঠকবেন না। আমরা কথায় না কাজে বিশ্বাসী।
প্রতিটি হুডি তৈরি করা হয়েছে নিখুঁত কারিগরি ও উচ্চমানের ফ্যাব্রিক দিয়ে, যাতে আপনি পান আরাম, স্টাইল আর আত্মবিশ্বাস—সব একসাথে।

আমরা বুঝি, কোয়ালিটি প্রোডাক্ট না হলে আত্মবিশ্বাসও কমে যায়।
আর তাই, নিজেকে আরও একধাপ এগিয়ে উপস্থাপন করতে হলে একটা কোয়ালিটি ফুল পোশাকই আপনার সিগনেচার হতে পারে।

স্টক বর্তমানে খুবই সীমিত। ইনশাল্লাহ, রিস্টক হবে, তবে এখনই অর্ডার করলে পাবেন প্রিমিয়াম ব্যাচের পোশাক`

  },
  {
    id: "3",
    name: "প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM Navy",
    price: 700,
    originalPrice: 1000,
    description:
      " ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।",

    image: "/images/3.jpg",
    allImages: ["/images/3.jpg", "/images/1.png", "/images/2.jpg", "/images/4.jpg", "/images/5.jpg", "/images/6.jpg"],
    category: "Outerwear",
    colors: ["black", "navy", "sage"],
    rating: 4.8,
    reviews: 0,
    inStock: true,
    isNew: true,
    isSale: true,
    discount: 30,
    specs: {
      fabric: "One-side brush fleece",
      gsm: "350+ GSM",
      size: ["M (40)", "L (42)", "XL (44)", "2XL (46)"],
      weatherSuitability: "Cold weather, casual outings, everyday use",
    },
    longDescription: `প্রিমিয়াম One-side Brush Fleece হুডি — 350+ GSM | Limited Stock

ফ্যাব্রিক: One-side brush fleece — নরম, আরামদায়ক স্পর্শ আর টেকসই ফিনিশ।

GSM: 350+ — ভারি, ঘন ও স্ট্রং—যা দেয় দীর্ঘস্থায়ী ব্যবহার।

কালার: কালো | নেভি | মেরুন — সলিড, প্রিমিয়াম টোনে।

সাইজ: M (40) • L (42) • XL (44) • 2XL (46) — একদম বাস্তব মাপ অনুযায়ী।

ব্যবহারে উপযোগী: ঠান্ডা আবহাওয়া, ক্যাজুয়াল আউটিং, দৈনন্দিন ব্যবহার বা ভ্রমণে।

স্টক: সীমিত — দ্রুত অর্ডার করুন।

✨ আমাদের অঙ্গীকার — কোয়ালিটি ফার্স্ট

এক কথায়, আমরা আমাদের পোশাকে মূল ফোকাস দিয়েছি কোয়ালিটিতে।
আলহামদুলিল্লাহ, আমরা এতটুকু নিশ্চয়তা দিতে পারি — ইনশাল্লাহ, ঠকবেন না। আমরা কথায় না কাজে বিশ্বাসী।
প্রতিটি হুডি তৈরি করা হয়েছে নিখুঁত কারিগরি ও উচ্চমানের ফ্যাব্রিক দিয়ে, যাতে আপনি পান আরাম, স্টাইল আর আত্মবিশ্বাস—সব একসাথে।

আমরা বুঝি, কোয়ালিটি প্রোডাক্ট না হলে আত্মবিশ্বাসও কমে যায়।
আর তাই, নিজেকে আরও একধাপ এগিয়ে উপস্থাপন করতে হলে একটা কোয়ালিটি ফুল পোশাকই আপনার সিগনেচার হতে পারে।

স্টক বর্তমানে খুবই সীমিত। ইনশাল্লাহ, রিস্টক হবে, তবে এখনই অর্ডার করলে পাবেন প্রিমিয়াম ব্যাচের পোশাক`

  },
  {
    id: "4",
    name: "Wide Leg Trousers - Black  ",
    price: 720,
    originalPrice: 950,
    description:
      "ফ্যাব্রিক: Soft cotton blend — আরামদায়ক, মুভমেন্ট ফ্রেন্ডলি।",
    image: "/wide-leg-trousers-black.jpg",
    category: "Pants",
    colors: ["beige", "olive", "gray"],
    rating: 4.6,
    reviews: 0,
    inStock: false,
    isNew: true,
    isSale: true,
    discount: 25,
    specs: {
      fabric: "Soft cotton blend",
      gsm: "230+ GSM",
      size: ["M (32)", "L (34)", "XL (36)", "2XL (38)"],
      weatherSuitability: "Casual, daily wear, outdoor",
    },
    longDescription: `Casual Chinos Pants — Everyday Style | Limited Stock

ফ্যাব্রিক: Soft cotton blend — আরামদায়ক, মুভমেন্ট ফ্রেন্ডলি।

কালার: বেজ | অলিভ | ধূসর — Neutral casual tones।

সাইজ: M (32) • L (34) • XL (36) • 2XL (38) — Perfect casual fit।

ব্যবহারে উপযোগী: ক্যাজুয়াল আউটিং, দৈনন্দিন ব্যবহার বা ভ্রমণ।

স্টক: সীমিত — দ্রুত অর্ডার করুন।

✨ আমাদের অঙ্গীকার — Everyday Comfort

প্রতিটি প্যান্ট তৈরি করা হয়েছে উচ্চমানের কাপড় দিয়ে, যাতে আপনি পান আরাম এবং স্টাইল একসাথে।`,
  },
]

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    image: "/professional-woman-portrait.png",
    comment: "TENFINITY's pieces are incredibly versatile. I wear them constantly. The quality is unmatched.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Designer",
    image: "/professional-man-portrait.png",
    comment: "Finally, a brand that understands minimalism. These pieces are timeless investments.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Creative Director",
    image: "/professional-woman-headshot.png",
    comment: "The attention to detail is phenomenal. Every piece feels premium and well-crafted.",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Entrepreneur",
    image: "/professional-man-headshot.png",
    comment: "Best investment in my wardrobe. TENFINITY has become my go-to brand.",
    rating: 5,
  },
]



