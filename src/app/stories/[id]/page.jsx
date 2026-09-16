import React from "react";
import Image from "next/image";
import Link from "next/link";

const StoryDetailsPage = async ({ params }) => {
  const { id } = await params;

  // dev story data fetch from api
  const devStories = [
    {
      id: 1,
      name: "Arif Hasan",
      designation: "Frontend Developer",
      company: "TechNova Solutions",
      experience: "3 Years",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
      story:
        "Arif started his journey in web development by learning the fundamentals of HTML and CSS. At the beginning, he spent a lot of time understanding how websites are structured and how different CSS properties work. After becoming comfortable with the basics, he started creating small projects such as personal portfolios, landing pages, and simple business websites. These projects helped him understand responsive design and improved his confidence in writing clean code. Later, Arif started learning JavaScript and discovered how websites could become interactive and dynamic. After gaining a good understanding of JavaScript, he moved to React and began building component-based applications. He created several real-world projects using React and gradually learned how to manage application state, handle APIs, and create reusable components. As his experience grew, he started exploring Next.js to improve the performance, routing, and overall structure of his applications. Today, Arif works as a frontend developer at TechNova Solutions, where he builds responsive and user-friendly web applications. He continues to learn new technologies and believes that consistent practice and building real projects are the most effective ways to grow as a developer.",
      about:
        "Arif is a passionate frontend developer who enjoys turning ideas and designs into clean, responsive, and user-friendly web applications. He has a strong interest in modern JavaScript technologies and especially enjoys working with React and Next.js. He pays attention to small details such as responsive layouts, accessibility, reusable components, and application performance. Outside of his regular work, Arif spends time learning new frontend technologies, experimenting with different development techniques, and building personal projects. His goal is to become a highly skilled full-stack developer while continuing to specialize in creating excellent user experiences on the web.",
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
        "Nusrat began her programming journey during university when she became curious about how websites and software applications were built. She started with HTML, CSS, and JavaScript and spent considerable time practicing by creating small websites and interactive applications. After becoming comfortable with frontend development, she learned React and started building more complex user interfaces using reusable components. However, Nusrat wanted to understand what happens behind the user interface, so she started learning backend development. She learned Node.js and Express and gradually became comfortable with building REST APIs, handling authentication, and working with databases. MongoDB became one of her preferred database technologies because of its flexibility and ease of use with JavaScript applications. After completing several full-stack projects, she joined CodeCraft Ltd. as a full stack developer. In her professional career, she has worked on different types of web applications and has gained experience in both frontend and backend development. She enjoys solving technical problems and continuously improving the quality and performance of the applications she works on.",
      about:
        "Nusrat is a dedicated full stack developer with a strong interest in building complete web applications from frontend to backend. She enjoys working with JavaScript-based technologies such as React, Node.js, Express, and MongoDB. Her development approach focuses on writing maintainable code, creating reusable components, designing reliable APIs, and providing a smooth experience for users. She also enjoys collaborating with other developers and learning from real-world software projects. In her free time, Nusrat explores new technologies, works on personal projects, and follows modern web development practices. She hopes to continue expanding her knowledge of cloud technologies and scalable application architecture.",
      image: "https://i.pravatar.cc/400?img=47",
    },

    {
      id: 3,
      name: "Sakib Ahmed",
      designation: "Backend Developer",
      company: "SoftByte Technologies",
      experience: "4 Years",
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST API"],
      story:
        "Sakib became interested in backend development after creating his first REST API. Before that, he mainly focused on learning the basics of programming and web development. While working on his first application, he became curious about how data is stored, processed, and transferred between a server and a client. This curiosity motivated him to learn Node.js and Express.js. He started creating simple APIs and gradually learned about HTTP methods, routing, middleware, authentication, and error handling. After gaining confidence with APIs, Sakib started working with MongoDB and PostgreSQL to understand database design and data management. He built several projects where users could register, log in, create data, update information, and communicate with backend services. These projects helped him understand the importance of security, performance, and clean backend architecture. After several years of learning and practical experience, Sakib joined SoftByte Technologies as a backend developer. He now works on reliable APIs and server-side systems that support modern web applications.",
      about:
        "Sakib is a backend-focused developer who enjoys designing APIs, working with databases, and building reliable server-side applications. He has experience with Node.js, Express.js, MongoDB, PostgreSQL, and REST API development. He is particularly interested in authentication systems, database architecture, API performance, and writing clean backend code. Sakib believes that a good backend should be secure, scalable, and easy for other developers to understand. He regularly practices by building small backend projects and exploring new technologies. His long-term goal is to become an experienced software engineer specializing in backend architecture and distributed systems.",
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
        "Mahi started her creative career by designing social media graphics and promotional materials. While working on different designs, she became interested in how users interact with websites and mobile applications. This interest introduced her to UI/UX design. She started learning Figma and gradually explored important design concepts such as typography, spacing, color theory, visual hierarchy, and user experience. Mahi began creating simple website interfaces and mobile app prototypes to practice her skills. She also learned how to conduct basic user research and understand the problems users face when interacting with digital products. With continuous practice, she became comfortable designing complete interfaces and reusable design systems. Later, she joined Pixel Studio and started working with developers and product teams on real-world projects. Her professional experience helped her understand that good design is not only about making something beautiful but also about making it easy and comfortable for users to use.",
      about:
        "Mahi is a creative UI/UX designer who focuses on creating simple, beautiful, and user-friendly digital experiences. She enjoys turning complex ideas into clean and understandable interfaces. Her main tools include Figma and modern design systems, and she has a strong interest in user research, prototyping, and usability. Mahi believes that designers should understand both the user's needs and the business goals of a product. She enjoys collaborating with developers because it allows her to understand the technical side of the products she designs. She continues to improve her skills by studying modern design trends, creating prototypes, and working on personal design projects.",
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
        "Tanvir started his programming journey by learning JavaScript. At first, he practiced basic programming concepts and created small browser-based projects. After becoming comfortable with JavaScript, he discovered React and became interested in building modern user interfaces. He spent several months creating React applications and learning about components, state management, API integration, and routing. Later, he wanted to become capable of developing complete applications, so he started learning Node.js and Express.js for backend development. He also learned MongoDB and started building full-stack applications where users could register, log in, create content, and interact with data. After completing several personal projects, Tanvir started learning Next.js to improve his knowledge of modern React development. His projects helped him understand both frontend and backend development and gave him practical experience solving real-world problems. Eventually, he joined WebFusion as a MERN Stack Developer and started working on professional web applications.",
      about:
        "Tanvir is a MERN Stack Developer who enjoys building modern full-stack applications using JavaScript technologies. He has experience working with React, Next.js, Node.js, Express.js, and MongoDB. He particularly enjoys creating applications where frontend and backend systems work together smoothly. Tanvir likes learning through practical projects and believes that building applications is one of the best ways to understand programming concepts. He regularly explores new tools and development techniques to improve his skills. His future goal is to become a highly experienced full-stack engineer who can design and develop complete, scalable web applications.",
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
        "Sadia started her programming journey with Java during her university studies. Initially, she focused on understanding programming fundamentals, object-oriented programming, and data structures. After becoming comfortable with Java, she explored software engineering concepts and started developing applications using Spring Boot. She learned how to design REST APIs, work with relational databases, and build backend services. Over time, Sadia also became interested in frontend development and learned React so that she could understand the complete application development process. She worked on several projects involving Java, Spring Boot, React, and MySQL. As her professional experience increased, she began working with Docker and modern development practices to improve application deployment and development workflows. Today, she works at InnovateX on large-scale software applications and continues to explore modern engineering tools and practices.",
      about:
        "Sadia is an experienced software engineer who enjoys designing and developing reliable software applications. She has a strong background in Java and Spring Boot and also has experience with React, MySQL, and Docker. Her interests include backend development, software architecture, database design, and application deployment. She believes that writing clean and maintainable code is important for long-term software projects. Sadia also enjoys helping junior developers understand difficult technical concepts and sharing knowledge with her teammates. She continues to learn new technologies and aims to contribute to reliable and scalable software systems.",
      image: "https://i.pravatar.cc/400?img=44",
    },

    {
      id: 7,
      name: "Rafiul Karim",
      designation: "Next.js Developer",
      company: "CloudBridge",
      experience: "2 Years",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "REST API"],
      story:
        "Rafiul discovered Next.js while looking for a better way to build modern React applications. Before learning Next.js, he had already gained experience with React and was comfortable creating components, managing state, and working with APIs. When he started exploring Next.js, he became interested in features such as file-based routing, server-side rendering, data fetching, and full-stack capabilities. He gradually learned how to structure Next.js applications and started building projects using TypeScript and Tailwind CSS. Through practical projects, Rafiul learned how to create responsive interfaces, connect applications with REST APIs, and handle dynamic routes. He also became interested in performance optimization and SEO. After completing several projects, he joined CloudBridge as a Next.js Developer. His current work involves developing modern web applications and continuously improving application performance and user experience.",
      about:
        "Rafiul is a modern web developer specializing in Next.js, React, TypeScript, and Tailwind CSS. He enjoys building fast, responsive, and maintainable web applications. His main interests include modern React architecture, server-side rendering, data fetching, API integration, and responsive UI development. Rafiul prefers learning through practical projects because they help him understand how different technologies work together. He regularly experiments with new Next.js features and follows modern web development practices. His long-term goal is to become a highly skilled full-stack JavaScript developer with strong expertise in Next.js and TypeScript.",
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
        "Farhan started his career as a system administrator and developed an interest in automation and cloud infrastructure. In the beginning, he worked mainly with Linux systems and learned how servers, networks, and applications operate in production environments. As he gained experience, he started learning Docker and discovered how containers could make application deployment easier and more consistent. Later, he explored Kubernetes and cloud platforms such as AWS. He also learned about CI/CD pipelines and started automating application testing and deployment processes. These skills helped him transition from traditional system administration into DevOps engineering. At DevCore Systems, Farhan works with development teams to improve deployment processes, infrastructure reliability, and application delivery. He enjoys solving infrastructure problems and finding ways to automate repetitive tasks.",
      about:
        "Farhan is a DevOps engineer passionate about automation, cloud infrastructure, deployment, and reliable software delivery. He has experience working with Linux, Docker, Kubernetes, AWS, and CI/CD tools. His main focus is helping development teams deploy applications efficiently and maintain reliable infrastructure. He enjoys learning about cloud technologies, monitoring systems, containerization, and automation. Farhan believes that automation can reduce repetitive work and help development teams deliver software more consistently. Outside of work, he experiments with cloud projects and explores new DevOps tools and practices to improve his technical knowledge.",
      image: "https://i.pravatar.cc/400?img=15",
    },
  ];

  // Find single story
  const singleStory = devStories.find((story) => story.id == id);

  // Story not found
  if (!singleStory) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Story Not Found</h1>

          <Link
            href="/stories"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Back to Stories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto max-w-3xl">
        {/* Back Button */}
        <Link
          href="/stories"
          className="mb-6 inline-block text-sm font-medium text-blue-600 hover:underline"
        >
          ← Back to Stories
        </Link>

        {/* Main Card */}
        <div className=" rounded-2xl bg-white shadow-md p-5">
          {/* header */}
          
            <div className="flex justify-between items-center gap-4 flex-wrap">
              {/* Image */}
              <div className="relative p-4 max-w-[220px] max-h-[220px] flex-shrink-0">
                <img
                  src={singleStory.image}
                  alt={singleStory.name}
                  className="rounded-full"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Name */}
                <h1 className="text-3xl font-bold text-gray-900">
                  {singleStory.name}
                </h1>

                {/* Designation */}
                <p className="mt-2 text-lg font-medium text-blue-600">
                  {singleStory.designation}
                </p>

                {/* Company */}
                <p className="mt-1 text-sm text-gray-500">
                  {singleStory.company}
                </p>

                {/* Experience */}
                <p className="mt-3 text-sm font-medium text-gray-600">
                  Experience: {singleStory.experience}
                </p>
              </div>
            </div>

            {/* header closed */}

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Story */}
            <h2 className="text-2xl font-bold text-gray-800">My Story</h2>

            <p className="mt-4 text-base leading-8 text-gray-600">
              {singleStory.story}
            </p>

            {/* About */}
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800">About</h2>

              <p className="mt-3 leading-7 text-gray-600">
                {singleStory.about}
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold text-gray-800">Skills</h2>

              <div className="flex flex-wrap gap-2">
                {singleStory.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};;

export default StoryDetailsPage;
