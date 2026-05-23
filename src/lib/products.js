export const WHATSAPP_NUMBER = "2349052480595";
export const CALL_NUMBER = "2348111333242";
export const EMAIL = "divineebtc9@gmail.com";

export const products = [
  {
    id: "9pm-elixir",
    name: "9PM Elixir",
    category: "Body Mist",
    description: "A bold, seductive body spray with warm amber and spicy undertones. Designed for the woman who owns every room she enters.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/36ce8a0ea_WhatsAppImage2026-05-21at0812032.jpeg",
    topNotes: ["Bergamot", "Pink Pepper"],
    heartNotes: ["Amber", "Jasmine"],
    baseNotes: ["Musk", "Vanilla"],
    intensity: 7,
    bestFor: ["Evening Out", "Date Night"],
    featured: true,
  },
  {
    id: "bade-al-oud",
    name: "Bade'e Al Oud — Honor & Glory",
    category: "Perfume",
    description: "A majestic oriental fragrance that blends rich oud with golden saffron. For the man who carries royalty in his stride.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/dd94747ef_WhatsAppImage2026-05-21at081203.jpeg",
    topNotes: ["Saffron", "Cinnamon"],
    heartNotes: ["Oud", "Rose"],
    baseNotes: ["Sandalwood", "Amber"],
    intensity: 9,
    bestFor: ["Special Occasions", "Power Meetings"],
    featured: true,
  },
  {
    id: "kids-collection",
    name: "Rascal Rabbit Kids Collection",
    category: "Kids",
    description: "Adorable, safe-for-kids fragrances with playful character bottle toppers. Light, fresh, and irresistibly cute.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/4bef0662f_WhatsAppImage2026-05-21at0812031.jpeg",
    topNotes: ["Cotton Candy", "Citrus"],
    heartNotes: ["Vanilla", "Peach"],
    baseNotes: ["Soft Musk", "Cream"],
    intensity: 3,
    bestFor: ["Kids", "Gifts"],
    featured: true,
  },
  {
    id: "luxury-gift-set",
    name: "The Sovereign Gift Set",
    category: "Gift Set",
    description: "A curated collection of premium fragrances — Riggs London Chief, His Confession, Hayaati Black & NOW. The ultimate luxury gift.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/1ccf14758_WhatsAppImage2026-05-21at081202.jpeg",
    topNotes: ["Leather", "Bergamot"],
    heartNotes: ["Cedar", "Vetiver"],
    baseNotes: ["Tonka Bean", "Oud"],
    intensity: 8,
    bestFor: ["Gifts", "Collectors"],
    featured: true,
  },
  {
    id: "9pm-black",
    name: "9PM Black",
    category: "Body Mist",
    description: "The darker sibling of 9PM. Deeper, smokier, more magnetic. An all-day body spray for the bold and unapologetic.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/36ce8a0ea_WhatsAppImage2026-05-21at0812032.jpeg",
    topNotes: ["Black Pepper", "Grapefruit"],
    heartNotes: ["Lavender", "Geranium"],
    baseNotes: ["Cedarwood", "Patchouli"],
    intensity: 6,
    bestFor: ["Daily Wear", "Office"],
    featured: false,
  },
  {
    id: "asad-lattafa",
    name: "Asad by Lattafa",
    category: "Perfume",
    description: "Bold, masculine, and unforgettable. A luxurious blend of tobacco, vanilla, and dry woods that commands attention.",
    image: "https://media.base44.com/images/public/user_69ef9664f23bb85e6c7f98b2/dd94747ef_WhatsAppImage2026-05-21at081203.jpeg",
    topNotes: ["Tobacco", "Black Pepper"],
    heartNotes: ["Iris", "Pineapple"],
    baseNotes: ["Vanilla", "Amber Wood"],
    intensity: 8,
    bestFor: ["Evening", "Signature Scent"],
    featured: false,
  },
];

export const categories = ["All", "Perfume", "Body Mist", "Kids", "Gift Set"];

export const testimonials = [
  { name: "Adesuwa O.", text: "Diva Scents changed my fragrance game. The Bade'e Al Oud lasts all day — I get compliments everywhere.", location: "Benin City" },
  { name: "Chioma N.", text: "I ordered the Kids Collection for my daughter's birthday. The packaging alone made her scream with joy!", location: "Lagos" },
  { name: "Emeka A.", text: "The gift set I got for my wife was premium. The selection, the quality — everything screams luxury.", location: "Abuja" },
  { name: "Blessing I.", text: "Finally found a perfume plug in Edo State that delivers quality. Diva Scents is the real deal.", location: "Warri" },
];

export function getWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}