import { motion } from "framer-motion";
import { useState } from "react";
import { css } from "../../../styled-system/css";
import Produits from "./TabContent/Products/Produits";

const tabs = [
  { id: "produits", label: "Produits" },
  { id: "à_propos", label: "À propos" },
  { id: "supports", label: "Support" },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div>
      <ul
        className={`group ${css({
          height: "66px",
          display: "flex",
          alignItems: "center",
          listStyle: "none",
          position: "relative",
        })}`}
      >
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            className={` ${css({
              width: "105px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            })}`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className={css({
                  _groupHover: { transition: "width 0.2s ease", width: "65px" },
                  width: "0px",
                  height: "3px",
                  backgroundColor: "#0098ff",
                  borderRadius: "100vmax",
                  position: "absolute",
                  bottom: "0",
                  transformOrigin: "center",
                })}
                // transition={{ duration: 3 }}
              />
            )}
            <span className={css({ fontSize: "0.875rem", fontWeight: "600" })}>
              {tab.label}
            </span>
          </li>
        ))}
      </ul>
      <Produits />
    </div>
  );
};

export default Tabs;
