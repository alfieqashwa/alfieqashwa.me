/** @jsx jsx */
import React from "react";
import { jsx, css } from "theme-ui";
import Fade from "react-reveal/Fade";

function CelloLovesGatsbyThemeNovela() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => {
    setShow(s => (s = !s));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 sx={{ color: "accent", fontSize: "28px" }}>
        <Fade left opposite cascade collapse when={show}>
          Cello
          <strong style={{ color: "red", fontSize: "42px" }}>
            <span role="img" aria-labelledby="heart">
              ❤️
            </span>
          </strong>
          Gatsby Theme Novela
        </Fade>
      </h1>
      <Button handleClick={handleClick}>
        {show ? "Thank You Again" : "Thank You"}
      </Button>
      <br />
      <h2 sx={{ color: "accent", marginTop: "1rem" }}>
        Dennis Brotzky, Thiago Costa, Brad Tiller, Mack Mansouri from{" "}
        <a
          sx={{ color: "primary" }}
          href="https://www.narative.co/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Narative.co
        </a>
      </h2>
      <h1 sx={{ color: "accent", marginTop: "1rem" }}>
        Thank You{" "}
        <a
          css={css`
            color: #663399;
          `}
          href="https://www.gatsbyjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GatsbyJS
        </a>
      </h1>
    </div>
  );
}

const Button = ({ children, handleClick }) => (
  <button
    sx={{
      color: "hotpink",
      background: "papayawhip",
      fontSize: "18px",
      padding: "5px",
      border: "1px",
      borderRadius: "2px"
    }}
    type="button"
    onClick={handleClick}
  >
    {children}
  </button>
);
export default CelloLovesGatsbyThemeNovela;
