import React from 'react';
import { Building2, GraduationCap, ShieldAlert, MountainSnow, Map, Snowflake, Compass } from 'lucide-react';

export const sahyadriTreks = [
  {
    id: 1,
    title: "Harishchandragad Trek",
    slug: "harishchandragad",
    location: "Ahmednagar, Maharashtra",
    difficulty: "Moderate",
    duration: "2 Days",
    rating: 4.8,
    reviews: 312,
    image:
      "https://ts-production.imgix.net/images/mobile-cover-uploaded/471260eb-cec0-4244-9145-3f296f3f25fa.jpg?auto=compress,format&w=1920&h=1080&q=10",
    tags: ["Sahyadri", "Fort", "History"],
  },
  {
    id: 2,
    title: "Kalsubai & Sandhan Valley Trek",
    slug: "kalsubai-sandhan-valley",
    location: "Ahmednagar, Maharashtra",
    difficulty: "Moderate",
    duration: "2 Days",
    rating: 4.9,
    reviews: 512,
    image:
      "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/Kalsubai-Trek.jpeg?resize=1024%2C573&ssl=1",
    tags: ["Sahyadri", "Peak", "Canyon"],
  },
  {
    id: 3,
    title: "Ratangad & Sandhan Valley Trek",
    slug: "ratangad-sandhan-valley",
    location: "Ahmednagar, Maharashtra",
    difficulty: "Moderate",
    duration: "2 Days",
    rating: 4.8,
    reviews: 245,
    image:
      "https://jainsonsumbrella.com/cdn/shop/articles/WhatsApp_Image_2023-07-13_at_5.46.49_PM.jpg?v=1689250637",
    tags: ["Sahyadri", "Fort", "Canyon"],
  },
  {
    id: 4,
    title: "Konkan Coastal Tour",
    slug: "konkan-coastal-tour",
    location: "Wardha - Kolhapur - Malvan",
    difficulty: "Easy",
    duration: "7 Days",
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=1200",
    tags: ["Beaches", "Coastal", "Temple"],
  },
];

export const himalayanTreks = [
  {
    id: 4,
    title: "Valley of Flowers Trek",
    slug: "valley-of-flowers",
    location: "Uttarakhand, India",
    difficulty: "Moderate",
    duration: "6 Days",
    rating: 4.9,
    reviews: 892,
    image:
      "https://www.thevalleyofflowers.com/wp-content/uploads/2025/11/Valley-of-Flowers-with-Badrinath-Tour.jpg",
    tags: ["Himalaya", "Flowers", "Scenic"],
  },
  {
    id: 107,
    title: "Kedarnath Trek",
    slug: "kedarnath",
    location: "Rudraprayag, Uttarakhand",
    difficulty: "Moderate-Hard",
    duration: "5 Days",
    rating: 4.9,
    reviews: 1500,
    image:
      "https://www.peakadventuretour.com/assets/images/kedarnath-peak-climbing5.webp",
    tags: ["Himalaya", "Pilgrimage", "Spiritual"],
  },
  {
    id: 111,
    title: "Dayara Bugyal Trek",
    slug: "dayara-bugyal",
    location: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    duration: "5 Days",
    rating: 4.9,
    reviews: 780,
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200",
    tags: ["Himalaya", "Meadows", "Panoramic"],
  },
];

export const corporatePrograms = [
  {
    icon: React.createElement(Building2, { size: 48, strokeWidth: 1.5 }),
    title: "Corporate Outbound",
    desc: "Structured leadership and team-building programs for corporate groups. Build trust, communication and resilience through curated outdoor challenges.",
    features: ["Custom itineraries", "Team assessment", "Post-event reports"],
    image: "https://img.freepik.com/premium-photo/asian-indian-business-people-corporate-culture-working-office-concept-with-laptop-papers-meetings-presentations-discussions_466689-15095.jpg",
  },
  {
    icon: React.createElement(GraduationCap, { size: 48, strokeWidth: 1.5 }),
    title: "Institutional / School Programs",
    desc: "Safe, educative adventure programs for schools and colleges across India. NCC-style disciplined camps aligned with educational objectives.",
    features: ["Age-appropriate challenges", "Safety-first approach", "Certificate of completion"],
    image: "https://img.freepik.com/free-photo/collaborative-process-indian-business-mans-brainstorming-meeting-officediverse-team-young-people-dressed-suits-cooperating-developing-common-project_627829-13765.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    icon: React.createElement(ShieldAlert, { size: 48, strokeWidth: 1.5 }),
    title: "Survival & Wilderness Training",
    desc: "IAF-veteran led specialized survival training for individuals seeking real-world outdoor skills under controlled, professional supervision.",
    features: ["Bushcraft skills", "Navigation training", "Emergency first aid"],
    image: "https://cdn.prod.website-files.com/682f203986b9b0af11061686/692a917dafa08c564101d2e5_AliBedniBugyalTrek-LohajungtoGehroliPatalviaWan-VishnuSivanandan-Indiahikes-113.jpg",
  },
];

export const programs = [
  {
    icon: React.createElement(MountainSnow, { size: 48, strokeWidth: 1.5 }),
    title: "High Altitude Mountaineering",
    desc: "Guided expeditions to Himalayan high-altitude peaks. Expert training, Adaptation protocols, and world-class safety gear provided.",
    features: ["Expert guides", "Equipment provided", "Adaptation plan"],
    image: "https://bekkcjkhrsfqwznxidkg.supabase.co/storage/v1/object/public/blog-images/10209-769a0fe8-3e36-4270-95ab-f1dcf8517584-6651cb810322c6c9fd2bbd4d50e29b9d.jpg",
  },
  {
    icon: React.createElement(Map, { size: 48, strokeWidth: 1.5 }),
    title: "Everest Base Camp",
    desc: "Flagship trek combining cultural immersion with extreme altitude challenge, guided by experienced leaders with a strong focus on safety and pacing.",
    features: ["Khumbu trail support", "Adaptation guidance", "Expedition logistics"],
    image: "https://d26dp53kz39178.cloudfront.net/media/uploads/products/2_5_usGCLou.jpg",
  },
  {
    icon: React.createElement(Snowflake, { size: 48, strokeWidth: 1.5 }),
    title: "Skiing Training",
    desc: "Kids and adult programs in Jammu & Kashmir focused on building confidence, technique, and winter sports endurance in alpine conditions.",
    features: ["Beginner to advanced coaching", "Snow safety basics", "Seasonal training camps"],
    image: "https://cdn.prod.website-files.com/5f5777504c01823e93e92c7b/610115541416d6f203f0702c_which-month-is-best-to-go-skiing.jpg",
  },
  {
    icon: React.createElement(Compass, { size: 48, strokeWidth: 1.5 }),
    title: "Custom Expeditions",
    desc: "Tailored programs for defence institutes, schools, and corporate groups with mission-specific objectives, structure, and field execution.",
    features: ["Custom route planning", "Objective-based modules", "Group coordination support"],
    image: "https://completewellbeing.com/wp-content/uploads/2014/04/discover-the-beauty-of-trekking.jpg",
  },
];

export const reviews = [
  {
    name: "Aarav Mehta",
    date: "March 2026",
    rating: 5,
    trek: "Harishchandragad Fort Trek",
    text: "The K2 Treks team was absolutely brilliant. Disciplined, punctual, and extremely safety-conscious. The night sky from the fort top was something I will never forget.",
  },
  {
    name: "Sanya Iyer",
    date: "February 2026",
    rating: 5,
    trek: "Kalsubai & Sandhan Valley",
    text: "The Sandhan Valley canyoning was intense but the K2 team made us feel secure throughout. Their expertise in rope work is top-notch. An adrenaline-pumping experience!",
  },
  {
    name: "Vikram Malhotra",
    date: "December 2025",
    rating: 5,
    trek: "Valley of Flowers",
    text: "A bucket list experience! K2 Treks handled the logistics perfectly, allowing us to just soak in the beauty of the Himalayas. Our guide knew the best spots for photography.",
  },
  {
    name: "Ananya Kulkarni",
    date: "February 2026",
    rating: 5,
    trek: "Ratangad Fort",
    text: "Beautifully organized. The food at the base village was delicious and the trek leaders were very encouraging. The views from 'Nedhe' were breathtaking!",
  },
];

export const whyUsFeatures = [
  {
    eyebrow: "01 / APPROACH",
    title: "SAFETY FIRST",
    desc: [
      "Highest safety standards in adventure industry",
      "Registered with Maharashtra Tourism Department",
      "Professionally trained and experienced team",
      "Comprehensive risk management protocols"
    ],
    image: "https://thumbs.dreamstime.com/b/overhead-shot-adventure-gear-packing-outdoor-expedition-photography-trip-image-titled-contains-content-374223993.jpg",
    cta: "EXPLORE PROTOCOL"
  },
  {
    eyebrow: "02 / LEADERSHIP",
    title: "EXPERT TEAM",
    desc: [
      "Internationally experienced trainers",
      "Defence background leadership",
      "Medical and emergency response training",
      "Continuous professional development"
    ],
    image: "https://imgl.krone.at/scaled/3521368/v78ebf4/full.jpg?imop=FeatureCrop,width=630,height=356",
    cta: "MEET THE TEAM"
  },
  {
    eyebrow: "03 / CAPABILITY",
    title: "GOVERNMENT READY",
    desc: [
      "Active on GeM Portal",
      "Experience with defence projects",
      "Institutional program expertise",
      "Transparent billing and compliance"
    ],
    image: "https://iaa.edu.in/public/uploads/admin/course/gem1681291243.jpg",
    cta: "VIEW CREDENTIALS"
  },
  {
    eyebrow: "04 / COMMUNITY",
    title: "SOCIAL COMMITMENT",
    desc: [
      "Special concessions for defence personnel",
      "Discounts for NCC cadets",
      "Support for farmers and families",
      "Community development initiatives"
    ],
    image: "https://media.licdn.com/dms/image/v2/D4D12AQGFT5QqNbVBTA/article-cover_image-shrink_720_1280/B4DZZIZk7dHIAI-/0/1744971392426?e=2147483647&v=beta&t=tXZrXDGeD0l8tulq3r6fKLps-YxjdGTSVyUGBlhbx_w",
    cta: "OUR IMPACT"
  },
];

export const allTrekTitles = [...sahyadriTreks, ...himalayanTreks].map((t) => t.title);
