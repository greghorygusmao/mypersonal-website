import Greg from "~/assets/images/greg2.png";
import BaseImage from "~/components/BaseKit/BaseImage/BaseImage";
import BaseText from "~/components/BaseKit/BaseText/BaseText";
import Box from "~/components/BaseKit/Box/Box";
import Divider from "~/components/BaseKit/Divider/Divider";
import Icon from "~/components/BaseKit/Icon/Icon";
import s from "./styles.css";

export const links = [{ rel: "stylesheet", href: s }];

export const Home = ({ title, style }) => {
  return (
    <Box
      column
      flex="1"
      style={{
        padding: "100px",
        paddingBottom: "0px",
      }}
      className="fade"
      data-scroll
    >
      <Box
        flex="1"
        row
        jCenter
        style={{
          maxWidth: "890px",
          marginRight: "33vw",
        }}
      >
        <Box column>
          <Box className={"info"} column>
            <Box className={"info_subtitle"} row aCenter flex>
              <span className="line"></span>
              <BaseText
                className={"info_subtitlelabe"}
                type="span"
                title={"PRODUCT DESIGNER & PRODUCT MANAGER"}
              ></BaseText>
            </Box>

            <BaseText
              className={"info_name"}
              type="span"
              title={"Greghory Metzker"}
            ></BaseText>
          </Box>
          <BaseText
            type="h4"
            className="info_description"
            title={
              <>
                São quase 7 anos ajudando empresas a criarem experiências de
                produtos envolventes, desde a estratégia até a entrega. Eu sigo
                uma abordagem enxuta e iterativa de design centrada em empatia,
                aprendizado constante e ideação. O processo consiste em entregas
                de ponta a ponta, prototipagem, teste e medição do sucesso de
                produtos e sistemas de design.
              </>
            }
          ></BaseText>
          <Box
            className={"label"}
            justifyContent="flex-end"
            alignItems="flex-start"
            column
          >
            <Divider
              type="h"
              spaccing="0px"
              style={{ backgroundColor: "#D6D6D6" }}
            ></Divider>
            <Box
              className={"label_labeltitle"}
              alignItems="center"
              row
              flex={1}
              aCenter
            >
              <Icon
                //   className={"label_arrow_right_"}
                name="icon-icon_ARROW_RIGHT_1"
              ></Icon>

              <BaseText
                className={"label_conheameutrabalho"}
                type="span"
                title={"Conheça Meu Trabalho"}
              ></BaseText>
            </Box>
            <Box
              row
              flex
              style={{
                marginTop: "40px",
              }}
            >
              <a
                href="https://medium.com/@gregmetzker"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box
                  className={"linktitle"}
                  alignItems="center"
                  row
                  style={{
                    marginRight: "30px",
                  }}
                >
                  <Icon name="icon-icon_medium"></Icon>
                  <BaseText
                    className={"linktitle_artigoscasos"}
                    type="span"
                    title={"ARTIGOS & CASOS"}
                  ></BaseText>
                </Box>
              </a>
              <a
                href="https://dribbble.com/greghorygusmao"
                target="_blank"
                style={{
                  textDecoration: "none",
                }}
              >
                <Box className={"linktitle"} alignItems="center" row>
                  <Icon name="icon-icon_dribbble"></Icon>
                  <BaseText
                    className={"linktitle_artigoscasos"}
                    type="span"
                    title={"PROJETOS & INTERFACES"}
                  ></BaseText>
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
        <Box column flex="1">
          <Box
            style={{
              position: "absolute",

              right: "-48vw",
              bottom: 0,
              width: "55vw",
              height: "132%",
            }}
          >
            <BaseImage
              src={Greg}
              backGroundMode
              width="100%"
              height="100%"
              style={{
                backgroundPosition: "center bottom",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Home.links = links;
export default Home;
