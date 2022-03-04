import BaseText from "../BaseKit/BaseText/BaseText";
import Box from "../BaseKit/Box/Box";
import Divider from "../BaseKit/Divider/Divider";
import Icon from "../BaseKit/Icon/Icon";
import s from "./styles.css";

export const links = [{ rel: "stylesheet", href: s }];

export const Footer = ({ relative }) => {
  return (
    <div
      style={{
        position: relative ? "relative" : "fixed",
        bottom: relative ? "unset" : 0,
        left: relative ? "unset" : 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: "#fafafa;",
      }}
    >
      <Divider
        type="h"
        spaccing="0px"
        style={{
          backgroundColor: "#EBEBEB",
        }}
      ></Divider>
      <Box className={"footer"} flex="1" jCenter aCenter column>
        <Box className={"footer_buttonlinks"} flex="1" jStart aCenter row>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a href="https://www.linkedin.com/in/greghorymetzker/">
              <Icon
                name="icon-icon_linkedin"
                className={"buttonlinksdefault_icon_arrow"}
              />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a href="https://medium.com/@gregmetzker" target="_blank">
              <Icon
                name="icon-icon_medium"
                className={"buttonlinksdefault_icon_arrow"}
              />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a href="https://dribbble.com/greghorymetzker" target="_blank">
              <Icon
                name="icon-icon_dribbble"
                className={"buttonlinksdefault_icon_arrow"}
              />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a href="https://github.com/greghorymetzker" target="_blank">
              <Icon
                name="icon-icon_github"
                className={"buttonlinksdefault_icon_arrow"}
              />
            </a>
          </Box>
          <Box className={"buttonlinksdefault"} flex="1" jCenter aCenter row>
            <a
              href="https://api.whatsapp.com/send?phone=5531982325284&text=Ol%C3%A1"
              target="_blank"
            >
              <Icon
                name="icon-icon_whatsapp"
                className={"buttonlinksdefault_icon_arrow"}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

Footer.links = links;

export default Footer;
