
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'


import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "Innovate Learn",
      subtitle: "MERN Stack Learning Platform",
      tags: ["React", "Node.js", "MongoDB", "JWT", "Express"],
      year: "2025",
      description:
        "A comprehensive learning management system built with the MERN stack, serving over 1,000 users with secure authentication and interactive features.",
      highlights: [
        "Secure JWT authentication system handling 1,000+ users",
        "Optimized backend delivering 40% faster API response times",
        "Interactive features: progress tracking, quizzes, and discussion forums",
        "Scalable database architecture designed for future growth"
      ],
      images: [
        "/uploads/a1.png",
        "/uploads/a2.png",
        "/uploads/a3.png"
      ],
      imageType: "desktop"
    },
    {
      id: 2,
      title: "Multi-Model AI Hub",
      subtitle: "AI Chat & Image Generation",
      tags: ["React Native", "TypeScript", "AI Integration", "Multi-API"],
      year: "2025",
      description:
        "Advanced mobile application enabling real-time AI model comparison and intelligent image generation across multiple providers.",
      highlights: [
        "Real-time comparison of 5 AI models (GPT-4o Mini, Claude 3 Haiku, Llama 3.1, Gemini Flash, DeepSeek R1)",
        "Intelligent fallback system across 4 API providers with 85% improved success rate",
        "Multi-model image generation with side-by-side comparison (Flux, Stable Diffusion XL, Gemini Flash)",
        "Cross-platform compatibility with native sharing and smart download features"
      ],
      images: [
        "/uploads/c1.jpeg",
        "/uploads/c2.jpeg",
        "/uploads/c3.jpeg",
        "/uploads/c4.jpeg"
      ],
      imageType: "mobile"
    },
    {
      id: 3,
      title: "Fun2gether",
      subtitle: "Social Watch Party Platform",
      tags: ["React.js", "Firebase", "Tailwind CSS", "WebRTC"],
      year: "2024",
      description:
        "A real-time social platform that brings people together for synchronized viewing experiences with integrated communication features.",
      highlights: [
        "Real-time synchronized video playback across multiple users",
        "Private room creation with friend invitation system",
        "Integrated chat and video call functionality",
        "Firebase-powered real-time database and authentication",
        "Live at: fun2gether.vercel.app"
      ],
      images: [
        "/uploads/b1.png",
        "/uploads/b2.png"
      ],
      imageType: "desktop"
    },
    {
      id: 4,
      title: "AI IT-Support Assistant",
      subtitle: "Email Summarization System",
      tags: ["Gemini AI", "Google Sheets", "Automation", "API"],
      year: "2025",
      description:
        "Automated IT support system that intelligently processes incoming emails, summarizes issues, and manages tickets efficiently.",
      highlights: [
        "Google Sheets automation for seamless workflow integration",
        "Gemini AI-powered email processing and problem summarization",
        "Automated priority ranking system for efficient ticket management",
        "Structured data insertion for organized support tracking"
      ],
      images: [
        "/uploads/d1.png"
      ],
      imageType: "desktop"
    },
    {
      id: 5,
      title: "AI Voice Chat",
      subtitle: "Voice-Enabled AI Assistant",
      tags: ["Voice Recognition", "AI", "Real-time Processing"],
      year: "2025",
      description:
        "An intelligent voice-powered AI chat application offering natural conversation experiences with advanced speech recognition.",
      highlights: [
        "Real-time voice recognition and processing",
        "Natural language understanding and response generation",
        "Multi-language support",
        "Low-latency conversation flow"
      ],
      images: [
        "/uploads/e1.png"
      ],
      imageType: "desktop" // ✅ FIXED: website landscape
    }
  ];

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card ${expandedProject === project.id ? 'expanded' : ''}`}
            onClick={() => toggleProject(project.id)}
          >
            <div className="project-header">
              <div className="project-number">
                {String(project.id).padStart(2, '0')}
              </div>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-expand-btn">
                <p>{expandedProject === project.id ? 'Show Less' : 'Read More'}</p>
                <img
                  src="data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 15L12 8L19 15' stroke='white' stroke-width='2'/%3E%3C/svg%3E"
                  alt="arrow"
                  className={expandedProject === project.id ? 'rotated' : ''}
                />
              </div>
            </div>

            {expandedProject === project.id && (
              <div className="project-details">
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                {project.images.length > 0 && (
                  <div
                    className={`project-gallery ${
                      project.imageType === 'mobile'
                        ? 'mobile-gallery'
                        : 'desktop-gallery'
                    }`}
                  >
                    {project.images.map((image, i) => (
                      <div key={i} className="gallery-item">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${i + 1}`}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
