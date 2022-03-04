import s from "./styles.css";
import Box from "../BaseKit/Box";
import useScroll from "../Hooks/useScroll";
import { useRef } from "react";
import BG from "../../assets/images/Elements.png";

export const links = [{ rel: "stylesheet", href: s }];

export const Layout = ({ mobile, children, scroll = false }) => {
  const [ref] = scroll ? useScroll({ reRender: true }) : [useRef()];
  return (
    <Box column data-scroll-container id="scroll" ref={ref}>
      <Box
        style={{
          background: `url('${BG}')`,
          backgroundColor: "#EBEBEB",
          backgroundPosition: "center",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          position: "absolute",
          opacity: 0.15,
        }}
      ></Box>
      <Box column className="layout" flex={1}>
        {children}
      </Box>
    </Box>
  );
};

Layout.links = links;
