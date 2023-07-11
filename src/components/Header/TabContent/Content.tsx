import { css } from "../../../../styled-system/css";
import FastActions from "./FastActions";

const Content = ({products, actions}) => {
  return (
    <div className={css({ display: "flex" })}>
      <div className={css({ width: "72%", height: "100%" })}>
        {products}
      </div>
      <FastActions actions={actions} />
    </div>
  );
};

export default Content;