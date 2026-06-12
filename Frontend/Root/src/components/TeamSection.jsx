import React from "react";
import { QuoteIcon } from "./Icons";
import founderImg from "../assets/Team Members/Founder.jpeg";
import ownerImg from "../assets/Team Members/Owner.jpeg";
import guideImg from "../assets/Team Members/Trek Lead.jpeg";
import operationsImg from "../assets/Team Members/Sr. Trek Lead.jpeg";
import chiefInstructorImg from "../assets/Team Members/Chief Instuctor.jpeg";

/**
 * TeamSection Component
 * Displays the team members with alternating layouts and high-impact design.
 */
export default function TeamSection({ theme, darkMode, showGridPattern }) {
  const teamMembers = [
    {
      id: "founder",
      role: "Founder",
      name: "RAKESH D. KALE",
      title: "FOUNDER & LEAD EXPEDITION LEADER",
      image: founderImg,
      accentColor: "#3d7a4f",
      description: [
        "An Indian Air Force Veteran, internationally experienced mountaineer, and adventure professional, Mr. Rakesh Devidasrao Kale brings over two decades of expertise in outdoor leadership, expedition planning, and adventure training.",
        "A member of the Indian Air Force's historic Mission Seven Summits initiative, he has successfully summited Mount Vinson (Antarctica) along with several prominent Himalayan peaks. During his service, he trained more than 15,000 personnel in leadership, physical fitness, sports, and adventure activities.",
        "Through K2 Treks & Adventure, he is committed to promoting safe, responsible, and transformative adventure experiences that inspire leadership, resilience, and personal growth.",
      ],
      quote: "Adventure with Purpose, Leadership through Experience.",
      stats: [
        { label: "Himalayan Peaks", value: "15+" },
        { label: "Trainees Impacted", value: "15,000+" },
      ],
      layout: "image-left",
    },
    {
      id: "owner",
      role: "Owner",
      name: "KALYANI KALE",
      title: "Owner",
      image: ownerImg,
      accentColor: "#2d5a3c",
      description: [
        "Mrs. Kalyani Rakesh Kale oversees the administration, operations, and outdoor activity management of K2 Treks & Adventure. Through her leadership in participant coordination, logistics planning, and event execution, she helps ensure that every adventure experience is organized, safe, and meaningful.",
        "Driven by a passion for adventure tourism, social service, and community development, she believes that outdoor experiences can become powerful platforms for personal growth, confidence building, and positive social change.",
        "She actively promotes women empowerment through adventure-based initiatives and remains committed to creating opportunities that encourage leadership, self-reliance, and resilience among youth and women.",
      ],
      quote:
        "Every adventure is an opportunity to build confidence, leadership, and self-belief.",
      stats: [
        // { label: 'Happy Clients', value: '5,000+' }
      ],
      layout: "image-right",
    },
    {
      id: "instructor",
      role: "Chief Instructor",
      name: "JAGVINDER PAL SINGH RAINA",
      title: "CHIEF INSTRUCTOR – OUTDOOR ACTIVITIES",
      image: chiefInstructorImg,
      accentColor: "#3d7a4f",
      description: [
        "A distinguished adventure professional, mountaineer, and Indian Air Force veteran, Mr. Jagvinder Pal Singh Raina serves as the Chief Instructor – Outdoor Activities at K2 Treks & Adventure. With extensive experience in mountaineering, skiing, high-altitude expeditions, and search & rescue operations, he brings exceptional expertise and leadership to outdoor training programs.",
        "Over the course of his career, he has participated in numerous Himalayan expeditions, including Mount Dhaulagiri (8,167 m), Mount Kamet, Mount Kun, Mount Papsura, and several Indian Air Force mountaineering initiatives across Ladakh, Arunachal Pradesh, and Himachal Pradesh. His experience also includes advanced skiing qualifications, avalanche rescue operations, and critical search & rescue missions in challenging mountain environments.",
        "Passionate about developing confident, capable, and responsible adventurers, he continues to mentor participants through trekking, mountaineering, survival training, and expedition leadership programs.",
      ],
      quote:
        "True leadership is forged in the mountains, where preparation, courage, and teamwork matter most.",
      stats: [
        { label: "8,000m Peaks", value: "1" },
        // { label: 'Search & Rescues', value: '50+' }
      ],
      layout: "image-left",
    },
    {
      id: "operations",
      role: "Sr. Trek Lead",
      name: "LAVANYA IYER",
      title: "SR. TREK LEAD",
      image: operationsImg,
      accentColor: "#2d5a3c",
      description: [
        "A dedicated mountaineer and adventure enthusiast, Mrs. Lavanya Iyer serves as a Senior Trek Lead at K2 Treks & Adventure. Trained through the Special Basic Mountaineering Course (SBMC) at the Nehru Institute of Mountaineering (NIM), Uttarkashi, and a Diploma holder in Mountaineering & Allied Sports from Savitribai Phule Pune University, she brings both technical knowledge and extensive field experience to every expedition.",
        "Her adventure journey includes the Everest Base Camp Expedition, Friendship Peak Expedition, Adi Kailash Trek, Kedarnath High-Altitude Trek, and numerous Sahyadri traverses and endurance treks. Known for her discipline, adaptability, and commitment to responsible adventure practices, she inspires participants through her determination, teamwork, and passion for outdoor exploration.",
      ],
      quote:
        "Every expedition is a journey of learning, resilience, and self-discovery.",
      stats: [
        { label: "High-Altitude Treks", value: "10+" },
        { label: "Safety Record", value: "100%" },
      ],
      layout: "image-right",
    },
    {
      id: "guide",
      role: "Trek Lead",
      name: "TANMAY PARKHI",
      title: "TREK LEAD",
      image: guideImg,
      accentColor: "#3d7a4f",
      description: [
        "An engineer by profession and an adventurer at heart, Mr. Tanmay Parkhi brings energy, enthusiasm, and a passion for exploration to every trek he leads at K2 Treks & Adventure. As a Trek Lead, he plays an active role in guiding Sahyadri expeditions while ensuring participants enjoy a safe, engaging, and memorable outdoor experience.",
        "His adventure journey extends beyond trekking. With experience in Himalayan treks and endurance-based activities, he continuously challenges his limits through triathlons, cycling, swimming, and marathon running. His commitment to fitness and perseverance reflects the spirit of adventure that inspires those around him.",
        "A passionate traveler and aspiring mountaineer, Tanmay is constantly seeking new challenges and opportunities for growth. As the youngest member of the K2 Treks & Adventure team, he represents the next generation of adventure leadership, bringing determination, positivity, and an unwavering enthusiasm for the outdoors.",
      ],
      quote:
        "Every challenge conquered outdoors becomes confidence carried for life.",
      stats: [
        { label: "Sahyadri Treks", value: "50+" },
        { label: "Safety Record", value: "100%" },
      ],
      layout: "image-left",
    },
  ];

  return (
    <section
      id="team"
      className={`section-pad ${showGridPattern ? "grid-wrapper" : ""}`}
      style={{ padding: "0rem 1rem 5rem 1rem", background: theme.bg }}
    >
      {showGridPattern && (
        <div
          className={`grid-background ${showGridPattern === "ltr" ? "pattern-ltr" : "pattern-rtl"}`}
        ></div>
      )}

      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 7vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              color: theme.text,
            }}
          >
            Meet Our <span style={{ color: "#3d7a4f" }}>Team</span>
          </h2>
          <p
            style={{
              color: theme.subtext,
              maxWidth: "600px",
              margin: "0.3rem auto 0",
              lineHeight: 1.7,
              fontSize: "1.1rem",
            }}
          >
            Meet the experts who transform ordinary trips into extraordinary
            adventures through precision, discipline, and passion.
          </p>
        </div>

        {/* Team Members List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="team-member-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  member.layout === "image-left"
                    ? "0.8fr 1.2fr"
                    : "1.2fr 0.8fr",
                gap: "clamp(3rem, 6vw, 8rem)",
                alignItems: "center",
              }}
            >
              {/* Image Column */}
              <div
                className="team-img-col"
                style={{
                  order: member.layout === "image-left" ? 1 : 2,
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  minHeight: "300px",
                  display: "flex",
                  alignItems: "stretch",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    boxShadow: darkMode
                      ? "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
                      : "0 25px 50px -12px rgba(61, 122, 79, 0.3)",
                    width: "100%",
                    zIndex: 2,
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
                  }}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      filter: darkMode
                        ? "contrast(1.1) brightness(0.85)"
                        : "none",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5))",
                      zIndex: 3,
                    }}
                  ></div>
                </div>

                {/* Decorative background accent */}
                <div
                  style={{
                    position: "absolute",
                    top: "-30px",
                    [member.layout === "image-left" ? "left" : "right"]:
                      "-30px",
                    width: "75px",
                    height: "75px",
                    background: `radial-gradient(circle, ${member.accentColor} 0%, transparent 70%)`,
                    opacity: 0.15,
                    zIndex: 1,
                    filter: "blur(20px)",
                  }}
                ></div>
              </div>

              {/* Content Column */}
              <div style={{ order: member.layout === "image-left" ? 2 : 1 }}>
                <h3
                  style={{
                    fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                    fontWeight: 900,
                    lineHeight: 1.1,
                    marginBottom: "1rem",
                    letterSpacing: "-0.02em",
                    color: theme.text,
                  }}
                >
                  {member.role === "Founder" ? "Our " : "Our "}
                  <span style={{ color: "#3d7a4f" }}>{member.role}</span>
                </h3>

                <div style={{ marginBottom: "2rem" }}>
                  {member.description.map((para, i) => (
                    <p
                      key={i}
                      style={{
                        color: theme.subtext,
                        lineHeight: 1.7,
                        fontSize: "clamp(1rem, 2vw, 1.1rem)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Quote */}
                <div
                  style={{
                    position: "relative",
                    paddingLeft: "2.5rem",
                    marginBottom: "2.5rem",
                    borderLeft: `4px solid ${member.accentColor}`,
                  }}
                >
                  <QuoteIcon
                    style={{
                      position: "absolute",
                      top: "-10px",
                      left: "10px",
                      opacity: 0.1,
                      width: "60px",
                      height: "60px",
                      color: member.accentColor,
                    }}
                  />
                  <blockquote
                    style={{
                      fontSize: "clamp(1.1rem, 3vw, 1.25rem)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      color: theme.text,
                      lineHeight: 1.4,
                      marginBottom: "0.75rem",
                    }}
                  >
                    "{member.quote}"
                  </blockquote>
                  <cite
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: theme.subtext,
                      fontStyle: "normal",
                    }}
                  >
                    — {member.name}, {member.title}
                  </cite>
                </div>

                {/* Stats */}
                <div
                  className="member-stats"
                  style={{
                    display: "flex",
                    gap: "clamp(1.5rem, 4vw, 3rem)",
                    borderTop: `1px solid ${theme.border}`,
                    paddingTop: "2rem",
                  }}
                >
                  {member.stats.map((stat, i) => (
                    <div key={i}>
                      <div
                        style={{
                          fontSize: "clamp(1.5rem, 4vw, 1.75rem)",
                          fontWeight: 900,
                          color: theme.text,
                        }}
                      >
                        {stat.value}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: theme.subtext,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #team {
            padding: 3rem 1rem !important;
          }
          .team-member-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .team-member-grid > div {
            order: unset !important;
          }
          .team-member-grid .team-img-col {
            width: 50% !important;
            min-height: unset !important;
            margin: 0 auto;
          }
          .member-stats {
            justify-content: flex-start;
          }
        }
        @media (max-width: 480px) {
          .member-stats {
            flex-direction: column;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
