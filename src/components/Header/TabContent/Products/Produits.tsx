import { css } from "../../../../../styled-system/css";
import Content from "../Content";
import Layout from "../Layout";

const Produits = () => {
  const productsList = [
    {
      logo: "./src/assets/kSuite.png",
      type: "kSuite",
      list: [
        {
          icon: "./src/assets/kDrive.svg",
          name: "kDrive",
          desc: "Stockez, collaborez et partagez vos fichiers",
        },
        {
          icon: "./src/assets/serviceMail.svg",
          name: "Service Mail",
          desc: "Créez vos adresses mails avec votre domaine",
        },
        {
          icon: "./src/assets/kChat.svg",
          name: "kChat",
          desc: "Communiquez en direct avec votre équipe",
        },
      ],
    },
    {
      type: "Grand Public",
      list: [
        {
          icon: "./src/assets/domaineName.svg",
          name: "Nom de domaine",
          desc: "Réservez votre nom de domaine au meilleur prix",
        },
        {
          icon: "./src/assets/hosting.svg",
          name: "Hébergement Web",
          desc: "Créez vos sites Internet (WordPress + 100 CMS)",
        },
        {
          icon: "./src/assets/hosting.svg",
          name: "Hébergement WordPress",
          desc: "Créez facilement votre site Wordpress",
        },
        {
          icon: "./src/assets/creator.svg",
          name: "Site Creator",
          desc: "Construisez votre Site Web pas à pas",
        },
      ],
    },
    {
      type: "Cloud Computing",
      list: [
        {
          icon: "./src/assets/VPSCloud.svg",
          name: "VPS Cloud",
          desc: "Créez un serveur Windows ou Linux",
        },
        {
          icon: "./src/assets/publicCloud.svg",
          name: "Public Cloud (IaaS)",
          desc: "Infrastructure Cloud Haute Performance",
        },
        {
          icon: "./src/assets/jelastic.svg",
          name: "Jelastic Cloud (PaasS)",
          desc: "Vos environnements de développement sur mesure",
        },
        {
          icon: "./src/assets/backup.svg",
          name: "Swiss Backup",
          desc: "Sauvegardez tous vos appareils en Suisse",
        },
      ],
    },
  ];

  return (
    <Layout>
      <Content 
        products= {
          <>
          <p
            className={css({
              fontSize: "16px",
              lineHeight: "20px",
              margin: "24px 24px 0px 15px",
            })}
          >
            Nos produits phares du moment
          </p>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(3, 32%)",
              gap: "10px",
              padding: "25px 15px",
            })}
          >
            {productsList.map((product) => (
              <div className={css({ height: "100%" })}>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  })}
                >
                  {product.logo ? (
                    <img
                      className={css({ width: "24px" })}
                      src={product.logo}
                      alt=""
                    />
                  ) : null}
                  <p
                    className={css({
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#0098ff",
                    })}
                  >
                    {product.type}
                  </p>
                </div>
                {product.list.map((item) => (
                  <a
                    className={css({
                      minHeight: "128px",
                      maxWidth: "260px",
                      display: "block",
                      padding: "14px 16px",
                      borderRadius: "8px",
                      cursor: 'pointer',
                      _hover: { backgroundColor: '#f2f4f6' }
                    })}
                  >
                    <span
                      className={css({
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      })}
                    >
                      <img
                        className={css({ width: "24px" })}
                        src={item.icon}
                        alt=""
                      />
                      <p
                        className={css({
                          fontSize: "14px",
                          fontWeight: "500",
                          marginLeft: "10px",
                          color: "#333333",
                        })}
                      >
                        {item.name}
                      </p>
                    </span>
                    <p className={css({ fontSize: "14px", color: "#666666" })}>
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            ))}
          </div>
          </>
        }
        actions= {
          <div>My new actions !</div>
        }
      />
    </Layout>
  );
};

export default Produits;

{/* <div className={css({ display: "flex" })}>
        <div className={css({ width: "72%", height: "100%" })}>
          <p
            className={css({
              fontSize: "16px",
              lineHeight: "20px",
              margin: "24px 24px 0px 15px",
            })}
          >
            Nos produits phares du moment
          </p>
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(3, 32%)",
              gap: "10px",
              padding: "25px 15px",
            })}
          >
            {products.map((product) => (
              <div className={css({ height: "100%" })}>
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "20px",
                  })}
                >
                  {product.logo ? (
                    <img
                      className={css({ width: "24px" })}
                      src={product.logo}
                      alt=""
                    />
                  ) : null}
                  <p
                    className={css({
                      fontSize: "16px",
                      lineHeight: "20px",
                      color: "#0098ff",
                    })}
                  >
                    {product.type}
                  </p>
                </div>
                {product.list.map((item) => (
                  <a
                    className={css({
                      minHeight: "128px",
                      maxWidth: "260px",
                      display: "block",
                      padding: "14px 16px",
                      borderRadius: "8px",
                    })}
                  >
                    <span
                      className={css({
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      })}
                    >
                      <img
                        className={css({ width: "24px" })}
                        src={item.icon}
                        alt=""
                      />
                      <p
                        className={css({
                          fontSize: "14px",
                          fontWeight: "500",
                          marginLeft: "10px",
                          color: "#333333",
                        })}
                      >
                        {item.name}
                      </p>
                    </span>
                    <p className={css({ fontSize: "14px", color: "#666666" })}>
                      {item.desc}
                    </p>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
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
        </div>
      </div> */}