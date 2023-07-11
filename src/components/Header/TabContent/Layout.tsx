import { css } from "../../../../styled-system/css";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      className={css({
        width: "100%",
        display: "flex",
        backgroundColor: "#FFFFFF",
        position: "absolute",
        left: "0",
        top: "66px",
        borderRadius: "0px 0px 8px 8px",
        zIndex: "3",
      })}
    >
      <Sidebar />
      <div className={css({ width: "100%" })}>
        <SearchBar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
