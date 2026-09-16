import React from 'react';
import Title from '../components/Title';
import StoryCard from '../components/StoryCard';

const Stories = () => {
    // developer story data fetch from api
    const devStories = [
      
        {
          id: 1,
          name: "Arif Hasan",
          designation: "Frontend Developer",
          company: "TechNova Solutions",
          experience: "3 Years",
          skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
          story:
            "Arif started his journey by learning basic HTML and CSS. After building several small projects, he moved into React and eventually became a professional frontend developer.",
          about:
            "A passionate frontend developer who loves creating clean, responsive, and user-friendly web applications.",
          image: "https://i.pravatar.cc/400?img=11",
        },
        {
          id: 2,
          name: "Nusrat Jahan",
          designation: "Full Stack Developer",
          company: "CodeCraft Ltd.",
          experience: "5 Years",
          skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
          story:
            "Nusrat began programming during university and became interested in web development. She learned both frontend and backend technologies and later joined a software company as a full stack developer.",
          about:
            "A full stack developer focused on building scalable web applications and solving real-world problems through technology.",
          image: "https://i.pravatar.cc/400?img=47",
        },
        {
          id: 3,
          name: "Sakib Ahmed",
          designation: "Backend Developer",
          company: "SoftByte Technologies",
          experience: "4 Years",
          skills: [
            "Node.js",
            "Express.js",
            "MongoDB",
            "PostgreSQL",
            "REST API",
          ],
          story:
            "Sakib became interested in backend development after creating his first REST API. He enjoys working with databases, APIs, authentication, and server-side architecture.",
          about:
            "A backend-focused developer who enjoys designing reliable APIs and working with databases.",
          image: "https://i.pravatar.cc/400?img=12",
        },
        {
          id: 4,
          name: "Mahi Rahman",
          designation: "UI/UX Designer",
          company: "Pixel Studio",
          experience: "2 Years",
          skills: [
            "Figma",
            "UI Design",
            "UX Research",
            "Prototyping",
            "Design System",
          ],
          story:
            "Mahi started her career by designing social media graphics. Later, she discovered UI/UX design and began creating interfaces for websites and mobile applications.",
          about:
            "A creative UI/UX designer who focuses on simple, beautiful, and user-friendly digital experiences.",
          image: "https://i.pravatar.cc/400?img=32",
        },
        {
          id: 5,
          name: "Tanvir Hossain",
          designation: "MERN Stack Developer",
          company: "WebFusion",
          experience: "3 Years",
          skills: ["React", "Next.js", "Node.js", "Express.js", "MongoDB"],
          story:
            "Tanvir learned JavaScript first and gradually explored the MERN stack. After completing several personal projects, he started working professionally as a MERN stack developer.",
          about:
            "A MERN stack developer who enjoys building modern full-stack applications with JavaScript technologies.",
          image: "https://i.pravatar.cc/400?img=13",
        },
        {
          id: 6,
          name: "Sadia Islam",
          designation: "Software Engineer",
          company: "InnovateX",
          experience: "6 Years",
          skills: ["Java", "Spring Boot", "React", "MySQL", "Docker"],
          story:
            "Sadia started programming with Java and developed a strong interest in software engineering. She now works on large-scale applications and cloud-based systems.",
          about:
            "A software engineer experienced in developing scalable applications and working with modern development practices.",
          image: "https://i.pravatar.cc/400?img=44",
        },
        {
          id: 7,
          name: "Rafiul Karim",
          designation: "Next.js Developer",
          company: "CloudBridge",
          experience: "2 Years",
          skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "REST API",
          ],
          story:
            "Rafiul discovered Next.js while looking for better ways to build React applications. He quickly became interested in server-side rendering, routing, and full-stack development.",
          about:
            "A modern web developer specializing in Next.js, TypeScript, and responsive web application development.",
          image: "https://i.pravatar.cc/400?img=14",
        },
        {
          id: 8,
          name: "Farhan Kabir",
          designation: "DevOps Engineer",
          company: "DevCore Systems",
          experience: "5 Years",
          skills: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"],
          story:
            "Farhan started his career as a system administrator and gradually moved toward DevOps. He now works with cloud infrastructure, deployment automation, and CI/CD pipelines.",
          about:
            "A DevOps engineer passionate about automation, cloud infrastructure, deployment, and reliable software delivery.",
          image: "https://i.pravatar.cc/400?img=15",
        },
      
    ];


    return (
      <div>
        <Title>Explore developer stories</Title>

        <div className="space-y-8 mt-5">
          {devStories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    );
};

export default Stories;