import React from "react";

interface ResourceItemProps {
  title: string;
  summary: string;
  link: string;
}

const ResourceItem: React.FC<ResourceItemProps> = ({
  title,

  summary,
  link,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

const Resources: React.FC = () => {
  const resourceItems: ResourceItemProps[] = [
    {
      title: "React Docs",
      summary: "Official documentation for React.",
      link: "https://reactjs.org/",
    },
  ];

  return (
    <section>
      <h2>Resources</h2>
      {resourceItems.map((item, index) => (
        <ResourceItem key={index} {...item} />
      ))}
    </section>
  );
};

export default Resources;
