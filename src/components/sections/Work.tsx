import React from "react";
import projectImage from "../../assets/Screenshot 2025-11-23 234131.png";

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
    {
      title: "Appointly",
      description:
        "Appointly is a modern appointment scheduling system for hair salons. It allows users to easily manage their appointments, clients, treatments, and employees in one intuitive dashboard.",
      image: projectImage,
      link: "https://github.com/risenguyen/appointly",
      tech: ["React", "TypeScript", ".NET", "PostgreSQL"],
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
