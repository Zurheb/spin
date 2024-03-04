import { Typography } from "@material-tailwind/react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";

export function FooterProtatip() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const socialIcons = [
    {
      icon: (
        <FaInstagram size={27} color={hoveredIndex === 0 ? "red" : "black"} />
      ),
      onMouseEnter: () => handleMouseEnter(0),
      onMouseLeave: handleMouseLeave,
    },
    {
      icon: (
        <FaTwitter size={27} color={hoveredIndex === 1 ? "blue" : "black"} />
      ),
      onMouseEnter: () => handleMouseEnter(1),
      onMouseLeave: handleMouseLeave,
    },
    {
      icon: (
        <FaFacebook size={27} color={hoveredIndex === 2 ? "blue" : "black"} />
      ),
      onMouseEnter: () => handleMouseEnter(2),
      onMouseLeave: handleMouseLeave,
    },
    {
      icon: (
        <FaLinkedin size={27} color={hoveredIndex === 3 ? "blue" : "black"} />
      ),
      onMouseEnter: () => handleMouseEnter(3),
      onMouseLeave: handleMouseLeave,
    },
  ];

  const LINKS = [
    {
      title: "Product",
      items: [
        "Product Overview",
        "Tools & Integrations",
        "Documentation",
        "Editor",
        "Release Notes",
      ],
    },
    {
      title: "Company",
      items: [
        "About us",
        "Blog",
        "Leadership",
        "Marketplace",
        "Careers",
        "Terms of Service",
      ],
    },
    {
      title: "Contact & Support",
      items: ["Contact", "Support", "Sales", "Report Abuse", "Forum"],
    },
    {
      title: "Social",
      items: socialIcons.map(({ icon, onMouseEnter, onMouseLeave }) => (
        <span
          key={icon.type.displayName + Math.random()}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          style={{}} 
        >
          {icon}
        </span>
      )),
    },
  ];

  return (
    <div className="flex flex-col   md:flex-row  md:justify-around gap-10 max-w-7xl mx-auto px-8">
      {LINKS.map(({ title, items }, sectionIndex) => (
        <ul key={title}>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-5 font-normal w-max mx-auto lg:mx-0 text-md"
          >
            {title}
          </Typography>
          {items.map((item, index) => (
            <li key={index}>
              <Typography
                as="a"
                href="#"
                color="gray"
                className={`py-1.5 w-max mx-auto lg:mx-0  text-sm opacity-80 font-normal transition-colors border-black ${
                  sectionIndex < 3 ? "hover:border-b " : "lg:mx-auto"
                } hover:text-black`}
              >
                {item}
              </Typography>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
}
