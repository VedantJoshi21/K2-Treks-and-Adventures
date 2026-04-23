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
    id: 5,
    title: "Kedarkantha Winter Trek",
    location: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    duration: "6 Days",
    rating: 4.8,
    reviews: 1024,
    image:
      "https://www.bikatadventures.com/images/Gallery/IMG1000X548/img-kedarkantha-trek2102-Bikat-Adventures.jpg",
    tags: ["Himalaya", "Snow", "Winter"],
  },
  {
    id: 6,
    title: "Roopkund Skeleton Lake",
    location: "Chamoli, Uttarakhand",
    difficulty: "Hard",
    duration: "9 Days",
    rating: 4.7,
    reviews: 543,
    image:
      "https://c.files.bbci.co.uk/DE2D/production/_117077865_atish_waghwase_1.jpg",
    tags: ["Himalaya", "Alpine", "Mystery"],
  },
  {
    id: 107,
    title: "Kedarnath Trek",
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
    id: 108,
    title: "Brahmatal Trek",
    location: "Chamoli, Uttarakhand",
    difficulty: "Moderate",
    duration: "6 Days",
    rating: 4.8,
    reviews: 600,
    image:
      "https://www.nomadadventures.co.in/wp-content/uploads/2022/12/Brahmatal-9.jpg",
    tags: ["Himalaya", "Winter", "Lakes"],
  },
  {
    id: 109,
    title: "Chopta-Tungnath Trek",
    location: "Rudraprayag, Uttarakhand",
    difficulty: "Easy-Moderate",
    duration: "4 Days",
    rating: 4.8,
    reviews: 800,
    image: "https://www.chardham.in/uploads/trek.jpg",
    tags: ["Himalaya", "Temple", "Meadows"],
  },
  {
    id: 110,
    title: "Leh-Ladakh Tours",
    location: "Ladakh",
    difficulty: "Moderate",
    duration: "8 Days",
    rating: 4.9,
    reviews: 1200,
    image:
      "https://dq1q7qkthxkc0.cloudfront.net/UpdatedMedia/26335f9d-1e8e-470b-859f-08cf50f01e15.webp",
    tags: ["Himalaya", "Road Trip", "Desert"],
  },
  {
    id: 111,
    title: "Dayara Bugyal Trek",
    location: "Uttarkashi, Uttarakhand",
    difficulty: "Easy-Moderate",
    duration: "6 Days",
    rating: 4.7,
    reviews: 450,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Dayara_Bugyal.jpg",
    tags: ["Himalaya", "Meadows", "Panoramic"],
  },
];

export const corporatePrograms = [
  {
    icon: React.createElement(Building2, { size: 48, strokeWidth: 1.5 }),
    title: "Corporate Outbound",
    desc: "Structured leadership and team-building programs for corporate groups. Build trust, communication and resilience through curated outdoor challenges.",
    features: ["Custom itineraries", "Team assessment", "Post-event reports"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: React.createElement(GraduationCap, { size: 48, strokeWidth: 1.5 }),
    title: "Institutional / School Programs",
    desc: "Safe, educative adventure programs for schools and colleges across India. NCC-style disciplined camps aligned with educational objectives.",
    features: ["Age-appropriate challenges", "Safety-first approach", "Certificate of completion"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: React.createElement(ShieldAlert, { size: 48, strokeWidth: 1.5 }),
    title: "Survival & Wilderness Training",
    desc: "IAF-veteran led specialized survival training for individuals seeking real-world outdoor skills under controlled, professional supervision.",
    features: ["Bushcraft skills", "Navigation training", "Emergency first aid"],
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b9/ASCAN_2021_Class_Wilderness_Survival_Training_%289%29.jpg",
  },
];

export const programs = [
  {
    icon: React.createElement(MountainSnow, { size: 48, strokeWidth: 1.5 }),
    title: "High Altitude Mountaineering",
    desc: "Guided expeditions to Himalayan high-altitude peaks. Expert training, acclimatization protocols, and world-class safety gear provided.",
    features: ["Expert guides", "Equipment provided", "Acclimatization plan"],
    image: "https://bekkcjkhrsfqwznxidkg.supabase.co/storage/v1/object/public/blog-images/10209-769a0fe8-3e36-4270-95ab-f1dcf8517584-6651cb810322c6c9fd2bbd4d50e29b9d.jpg",
  },
  {
    icon: React.createElement(Map, { size: 48, strokeWidth: 1.5 }),
    title: "Everest Base Camp",
    desc: "Flagship trek combining cultural immersion with extreme altitude challenge, guided by experienced leaders with a strong focus on safety and pacing.",
    features: ["Khumbu trail support", "Acclimatization guidance", "Expedition logistics"],
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
    name: "Priya Sharma",
    date: "January 2026",
    rating: 5,
    trek: "Kedarkantha Winter Trek",
    text: "Our first Himalayan trek and it was flawless. The guides were knowledgeable and patient. The snow trek was magical. Will definitely book again!",
  },
  {
    name: "Rohan Desai",
    date: "November 2025",
    rating: 4,
    trek: "Rajgad Fort Trek",
    text: "Great organisation and the historical context our guide provided made the whole experience richer. Highly recommend for history lovers and trekkers alike.",
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
  {
    name: "Arjun Singh",
    date: "October 2025",
    rating: 4,
    trek: "Leh-Ladakh Road Trip",
    text: "Well-planned road trip. The bikes were in great condition and the support vehicle was always there. A bit tiring, but absolutely worth the effort.",
  },
  {
    name: "Meera Reddy",
    date: "March 2026",
    rating: 5,
    trek: "Kedarkantha Trek",
    text: "The winter landscape was surreal. K2's focus on safety and acclimatization made me feel very comfortable even as a solo female traveler. Truly professional.",
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
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1200",
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
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=1200",
    cta: "OUR IMPACT"
  },
];

export const allTrekTitles = [...sahyadriTreks, ...himalayanTreks].map((t) => t.title);
