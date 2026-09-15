import React from "react";
import Title from "../components/Title";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Title>About Us</Title>

      <nav className="flex gap-4 mt-4">
        <Link href="/about/contact" className="hover:underline">
          Contact
        </Link>
        <Link href="/about/teams" className="hover:underline">
          Teams
        </Link>
      </nav>
    </div>
  );
};

export default About;
