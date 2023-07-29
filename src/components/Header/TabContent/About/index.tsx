import { css } from "../../../../../styled-system/css";
import Sidebar from "../Sidebar";

const About = () => {
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
        <div
          className={css({
            backgroundImage: 'url("./src/assets/boris.webp")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'left'
          })}
        >
          <div
            className={css({ 
              maxWidth: '500px',
              marginLeft: '60px',
              color: 'white',
            })}
          >
            <p
              className={css({ 
                _before: { content: ' open-quote' },     maxWidth: '435px',
                fontSize: '22px',
                fontWeight: '300',
                margin: '0 0 10px 20px'
              })}
            >
              Choisir Infomaniak, c'est être engagé dans l'économie de demain. Vie privée, local et durable sont les valeurs d'infomaniak depuis 29 ans.
            </p>
            <p 
              className={css({  
                margin: '0 0 10px 20px'
              })}
            >
              Boris Siegenthaler, Co-fondateur et CSO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
