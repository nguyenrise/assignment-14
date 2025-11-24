import React from "react";

interface WorkItemProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

const WorkItem: React.FC<WorkItemProps> = ({
  title,
  description,
  image,
  link,
  tech,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={image} alt={title} width="200" />
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
      <ul>
        {tech.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Work: React.FC = () => {
  const workItems: WorkItemProps[] = [
    // Add your work items here
    {
      title: "Project 1",
      description: "A cool project.",
      image: "https://via.placeholder.com/200",
      link: "#",
      tech: ["React", "TypeScript"],
    },
  ];

  return (
    <section>
      <h2>Work</h2>
      {workItems.map((item, index) => (
        <WorkItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Work;
