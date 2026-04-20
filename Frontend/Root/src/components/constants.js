import React from 'react';
import { Building2, GraduationCap, ShieldAlert, MountainSnow, Map, Snowflake, Compass } from 'lucide-react';

export const sahyadriTreks = [
  {
    id: 1,
    title: "Harishchandragad Fort Trek",
    location: "Ahmednagar, Maharashtra",
    difficulty: "Hard",
    duration: "2 Days",
    rating: 4.8,
    reviews: 312,
    image:
      "https://ts-production.imgix.net/images/mobile-cover-uploaded/471260eb-cec0-4244-9145-3f296f3f25fa.jpg?auto=compress,format&w=1920&h=1080&q=10",
    tags: ["Sahyadri", "Fort", "Camping"],
  },
  {
    id: 2,
    title: "Kalsubai Peak Trek",
    location: "Nashik, Maharashtra",
    difficulty: "Moderate",
    duration: "1 Day",
    rating: 4.7,
    reviews: 489,
    image:
      "https://i0.wp.com/thelandofwanderlust.com/wp-content/uploads/2025/09/Kalsubai-Trek.jpeg?resize=1024%2C573&ssl=1",
    tags: ["Sahyadri", "Peak", "Sunrise"],
  },
  {
    id: 3,
    title: "Rajgad Fort Trek",
    location: "Pune, Maharashtra",
    difficulty: "Moderate",
    duration: "2 Days",
    rating: 4.9,
    reviews: 561,
    image:
      "https://www.treksandtrails.org/system/images/000/780/220/665460b6259a3b5cb595bca0e69a667f/banner/Rajgad_Fort_in_Pune__Maharashtra.jpg",
    tags: ["Sahyadri", "Fort", "History"],
  },
  {
    id: 101,
    title: "Sandhan Valley Trek",
    location: "Ahmednagar, Maharashtra",
    difficulty: "Hard",
    duration: "2 Days",
    rating: 4.8,
    reviews: 210,
    image:
      "https://adventurecampindia.com/wp-content/uploads/2023/12/Sandhan-Valley-1280x720-1.jpg",
    tags: ["Sahyadri", "Valley", "Adventure"],
  },
  {
    id: 102,
    title: "Ratangad Trek",
    location: "Ratanwadi, Maharashtra",
    difficulty: "Moderate",
    duration: "1 Day",
    rating: 4.7,
    reviews: 180,
    image:
      "https://jainsonsumbrella.com/cdn/shop/articles/WhatsApp_Image_2023-07-13_at_5.46.49_PM.jpg?v=1689250637",
    tags: ["Sahyadri", "Fort", "Flowers"],
  },
  {
    id: 103,
    title: "Harihar Fort Trek",
    location: "Nashik, Maharashtra",
    difficulty: "Hard",
    duration: "1 Day",
    rating: 4.9,
    reviews: 320,
    image:
      "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/30-stades/media/media_files/f9OgFobdFXYM9zxj9e4i.jpg",
    tags: ["Sahyadri", "Fort", "Steep Steps"],
  },
  {
    id: 104,
    title: "Vasota Fort Trek",
    location: "Satara, Maharashtra",
    difficulty: "Moderate",
    duration: "2 Days",
    rating: 4.6,
    reviews: 150,
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/50/54/b8/nageshwar-caves-from.jpg?w=900&h=500&s=1",
    tags: ["Sahyadri", "Jungle", "Boat Ride"],
  },
  {
    id: 105,
    title: "Raigad Fort Trek",
    location: "Raigad, Maharashtra",
    difficulty: "Moderate",
    duration: "1 Day",
    rating: 4.8,
    reviews: 400,
    image:
      "https://www.adventuregeek.in/system/images/000/601/187/214113db8f204cb1d997873469dd154b/banner/rajgad_adventure_geek.jpg",
    tags: ["Sahyadri", "Fort", "History"],
  },
  {
    id: 106,
    title: "Torna Fort Trek",
    location: "Pune, Maharashtra",
    difficulty: "Hard",
    duration: "1 Day",
    rating: 4.7,
    reviews: 280,
    image:
      "https://im.whatshot.in/img/2020/Jul/zunzar-machi-at-torna-1594871123.jpg",
    tags: ["Sahyadri", "Fort", "Highest Peak"],
  },
];

export const himalayanTreks = [
  {
    id: 4,
    title: "Valley of Flowers Trek",
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
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: React.createElement(Map, { size: 48, strokeWidth: 1.5 }),
    title: "Everest Base Camp",
    desc: "Flagship trek combining cultural immersion with extreme altitude challenge, guided by experienced leaders with a strong focus on safety and pacing.",
    features: ["Khumbu trail support", "Acclimatization guidance", "Expedition logistics"],
    image: "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: React.createElement(Snowflake, { size: 48, strokeWidth: 1.5 }),
    title: "Skiing Training",
    desc: "Kids and adult programs in Jammu & Kashmir focused on building confidence, technique, and winter sports endurance in alpine conditions.",
    features: ["Beginner to advanced coaching", "Snow safety basics", "Seasonal training camps"],
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80",
  },
  {
    icon: React.createElement(Compass, { size: 48, strokeWidth: 1.5 }),
    title: "Custom Expeditions",
    desc: "Tailored programs for defence institutes, schools, and corporate groups with mission-specific objectives, structure, and field execution.",
    features: ["Custom route planning", "Objective-based modules", "Group coordination support"],
    image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=600&q=80",
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
];

export const whyUsFeatures = [
  {
    eyebrow: "01 / LOGISTICS",
    title: "UNCOMPROMISING SAFETY",
    desc: "Military-grade satellite communication, on-call specialized high-altitude physicians, and a 1:1 guide-to-client ratio for institutional partners.",
    image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=1200",
    cta: "EXPLORE PROTOCOL"
  },
  {
    eyebrow: "02 / METHODOLOGY",
    title: "PSYCHOLOGICAL FRAMING",
    desc: "Our curriculum uses the mountain as a laboratory for behavioral economics, stress management, and complex decision-making under pressure.",
    image: "https://images.unsplash.com/photo-1617791160301-22c1ecad6ca6?auto=format&fit=crop&q=80&w=1200",
    cta: "VIEW METHODOLOGY"
  },
  {
    eyebrow: "03 / STEWARDSHIP",
    title: "GLOBAL SUSTAINABILITY",
    desc: "Carbon-negative expeditions and a direct investment model that supports local Sherpa infrastructure and Himalayan environmental protection.",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80&w=1200",
    cta: "CHARTER DETAILS"
  },
  {
    eyebrow: "04 / OPERATIONS",
    title: "ELITE LOGISTICS",
    desc: "Seamless integration of private helicopter transport, executive-tier base camp amenities, and cloud-synced project management for all treks.",
    image: "https://images.unsplash.com/photo-1614850553958-3cc32f352932?auto=format&fit=crop&q=80&w=1200",
    cta: "OPERATIONS PORTAL"
  },
];

export const allTrekTitles = [...sahyadriTreks, ...himalayanTreks].map((t) => t.title);
