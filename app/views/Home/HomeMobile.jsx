import BaseText from "~/components/BaseKit/BaseText/BaseText";
import Box from "~/components/BaseKit/Box/Box";
import Divider from "~/components/BaseKit/Divider/Divider";
import s from "./stylesMobile.css";
import BaseImage from "~/components/BaseKit/BaseImage/BaseImage";

import GREG from "~/assets/images/greg.png";
import Icon from "../../components/BaseKit/Icon/Icon";

export const links = [{ rel: "stylesheet", href: s }];

export const Home = ({ title, style }) => {
  return (
    <Box
      column
      style={{
        paddingTop: "30px",
        padding: "18px",
        width: "100vw",
      }}
      className="fade"
      data-scroll
    >
      <Box className={"header_mobile"} column>
        <Box className={"header_mobile_info"} aCenter flexDirection="row">
          <BaseImage src={GREG} width="50px" height="50px" />
          <Box
            className={"header_mobile_name_job"}
            column
            style={{
              marginLeft: "18px",
            }}
          >
            <BaseText
              className={"header_mobile_greghorymetzker"}
              type="span"
              title={"Greghory Metzker"}
            ></BaseText>

            <BaseText
              className={"header_mobile_productdesignerproductmanager"}
              type="span"
              title={"Product Designer & Product Manager"}
            ></BaseText>
          </Box>
        </Box>

        <Divider
          type="h"
          spaccing="18px"
          style={{
            backgroundColor: "#EBEBEB",
          }}
        ></Divider>
      </Box>

      <Box className={"mobileinfo"} flex="1" column>
        <BaseText
          className={"mobileinfo_title"}
          type="span"
          title={"Sobre Mim"}
        ></BaseText>

        <BaseText
          className={"mobileinfo_description"}
          type="span"
          title={
            "Sou um experiente Product Designer e Product Manager, com um histórico de sucesso no que tange à liderança de equipes multidisciplinares e à construção de um mundo corporativo dramaticamente mais acessível, desde a estratégia até a entrega. Nessa perspectiva, tenho auxiliado organizações a projetarem produtos sólidos e a se comunicarem com clareza e eficiência."
          }
        ></BaseText>
        <a
          href="https://www.linkedin.com/in/greghorymetzker/"
          target="_blank"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            className={"linktitle"}
            aCenter
            jCenter
            row
            style={{
              marginRight: "0px",
            }}
          >
            <Icon name="icon-icon_linkedin"></Icon>
            <BaseText
              className={"linktitle_artigoscasos"}
              type="span"
              title={"ACESSAR LINKEDIN"}
            ></BaseText>
          </Box>
        </a>

        <Divider
          type="h"
          spaccing="50px"
          style={{
            backgroundColor: "#EBEBEB",
          }}
        ></Divider>
      </Box>

      <Box className={"mobileinfo"} flex="1" column>
        <BaseText
          className={"mobileinfo_title"}
          type="span"
          title={"Artigos & Casos"}
        ></BaseText>

        <BaseText
          className={"mobileinfo_description"}
          type="span"
          title={
            "São quase 7 anos ajudando empresas a criarem experiências de produtos envolventes, desde a estratégia até a entrega. Eu sigo uma abordagem enxuta e iterativa de design centrada em empatia, aprendizado constante e ideação. O processo consiste em entregas de ponta a ponta, prototipagem, teste e medição do sucesso de produtos e sistemas de design. Para conhecer e entender um pouco mais sobre como eu penso, clique no botão abaixo."
          }
        ></BaseText>
        <a
          href="https://medium.com/@gregmetzker"
          target="_blank"
          style={{
            textDecoration: "none",
          }}
        >
          <Box
            className={"linktitle"}
            aCenter
            jCenter
            row
            style={{
              marginRight: "0px",
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

        <Divider
          type="h"
          spaccing="50px"
          style={{
            backgroundColor: "#EBEBEB",
          }}
        ></Divider>
      </Box>
      <Box className={"mobileinfo"} flex="1" column>
        <BaseText
          className={"mobileinfo_title"}
          type="span"
          title={"Projetos & Interfaces"}
        ></BaseText>

        <BaseText
          className={"mobileinfo_description"}
          type="span"
          title={
            "Construir um ótimo produto/serviço não é uma tarefa simples. Requer criatividade, pensamento analítico, uma forte e qualificada experiência de usuário, um ótimo timing e processos bem fundamentados. Clicando no botão abaixo, você poderá conhecer alguns projetos que realizei."
          }
        ></BaseText>
        <a
          href="https://dribbble.com/greghorygusmao"
          target="_blank"
          style={{
            textDecoration: "none",
            marginBottom: "120px",
          }}
        >
          <Box
            className={"linktitle"}
            aCenter
            jCenter
            row
            style={{
              marginRight: "0px",
            }}
          >
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
  );
};

Home.links = links;
export default Home;
