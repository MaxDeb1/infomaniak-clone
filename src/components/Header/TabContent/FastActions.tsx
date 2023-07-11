import { css } from "../../../../styled-system/css";

const FastActions = ({actions}) => {
  return (
    <div
      className={css({
        width: "260px",
        display: "flex",
        flexDirection: "column",
        borderLeft: "1px solid rgb(208, 208, 208)",
      })}
      >
      <p
        className={css({
        fontSize: "16px",
        lineHeight: "20px",
        margin: "24px 24px 0px 15px",
        color: "#0098ff",
        })}
      >
        Actions rapides
      </p>
      <div>
        {actions}
      </div>
    </div>
  );
};

export default FastActions;