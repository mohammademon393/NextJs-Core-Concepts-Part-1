import Title from "@/app/components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  const { slug } = await params;
  const [ technology, topic, page_no, subject ] = slug || [];

  return (
    <div>
      <Title>{technology}</Title>
      <h2>{topic}</h2> <hr />
      <div className="mt-4 flex justify-between">
        <p>Page: {page_no}</p>
        <p>{subject}</p>
      </div>
    </div>
  );
};

export default TutorialPage;
