import { css } from "../../../../styled-system/css";

const SearchBar = () => {
  return (
    <div
      className={css({
        padding: "24px",
        backgroundColor: "#f2f4f6",
        zIndex: "6",
      })}
    >
      <div className={css({ position: "relative" })}>
        <form
          className={css({
            display: "flex",
            alignItems: "center",
            width: "100%",
            padding: "7px 15px",
            backgroundColor: "#FFFFFF",
            border: "1px solid #e7ebee",
          })}
        >
          <svg
            className={css({ marginRight: "10px" })}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M10.875 18.75a7.875 7.875 0 100-15.75 7.875 7.875 0 000 15.75zM16.443 16.443L21 21"
              stroke="#0098FF"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              stroke="#F2F4F6"
              stroke-width="0.125"
              d="M.063.063h23.875v23.875H.063z"
            ></path>
          </svg>
          <input
            className={css({
              width: "100%",
              paddingBlock: "4px 5px",
              _focus: { outline: "none" },
            })}
            type="text"
            placeholder="Rechercher un produit, un mot clé"
          />
        </form>
        <div
          className={css({
            position: "absolute",
            top: "50%",
            right: "20px",
            transform: "translateY(-50%)",
            cursor: "pointer",
            zIndex: "12",
          })}
        >
          <svg
            className={css({
              width: "1em",
              height: "1em",
              fontSize: "1.5rem",
            })}
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="CloseIcon"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
