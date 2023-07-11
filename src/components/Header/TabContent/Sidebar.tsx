import { useState } from 'react';
import { css } from '../../../../styled-system/css'

const Sidebar = () => {
  const services = [
    {
      name: "Nos best  sellers"
    },
    {
      name: "Je souhaite"
    },
    {
      name: "Nom de domaine"
    },
    {
      name: "Hébergement et Cloud"
    },
    {
      icon: "./src/assets/kSuite.png",
      name: "kSuite"
    },
    {
      name: "Sauvegarde & Stockage"
    },
    {
      name: "Marketing"
    },
    {
      name: "Billeterie"
    },
    {
      name: "Multimédia"
    },
  ]

  const [isActive, setIsActive] = useState(0)

  const handleHover = (index: number) => {
    setIsActive(index)
  }

  return (
    <ul
      className={css({
        minWidth: "304px",
        paddingBlock: "24px",
        background:
          "linear-gradient(rgb(45, 106, 224) 0%, rgb(29, 80, 213) 100%)",
        color: "#FFFFFF",
        zIndex: "3",
      })}
    >
    {services.map((service, index) => (
      <li
        key= {service.name}
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px",
          marginInline: "24px",
          lineHeight: "19px",
          borderRadius: "8px",
          cursor: "pointer",
          background: isActive === index ? "rgba(255, 255, 255, 0.08)" : "",
          fontFamily: "Suisse, sans-serif",
          fontWeight: "600",
        })}
        onMouseEnter={() => handleHover(index)}
        >
        <p>
          {(service.icon === undefined) ? (
            service.name
          ) : (
          <span
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "8px",
            })}
          >
            <div
              className={css({
                padding: "6px",
                borderRadius: "6px",
                backgroundColor: "#FFFFFF",
              })}
            >
            <img
              className={css({ width: "18px", height: "18px" })}
              src={service.icon}
              alt=""
            />
            </div>
            {service.name}
          </span>
          )}
        </p>
        {(isActive === index) ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="7" cy="7" r="7" fill="#0098FF"></circle>
          <path d="M6 9V5l3 2-3 2z" fill="#fff"></path>
          </svg>
        ) : null
        }
      </li>
    ))}
    </ul>
  );
};

export default Sidebar;
