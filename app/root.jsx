import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useTransition,
} from "remix";
import isMobile from "ismobilejs";

import resetcss from "normalize.css";
import fonts from "./assets/fonts/icons.css";
import global from "./assets/global.css";
// import ReactTooltip from "react-tooltip"
import { ThemeProvider } from "./components/contexts/theme";
import { SmoothScrollProvider } from "./components/contexts/scroll";
import clsx from "clsx";
export function links() {
  return [
    { rel: "stylesheet", href: resetcss },
    { rel: "stylesheet", href: fonts },
    { rel: "stylesheet", href: global },
  ];
}

export function meta() {
  return { title: "Greghory Gusmão Metzker" };
}
export const loader = async ({ request }) => {
  const mobile = isMobile(request.headers.get("user-agent")).any;

  return { mobile };
};
export default function App() {
  const { mobile } = useLoaderData();

  return (
    <ThemeProvider>
      <SmoothScrollProvider options={{ smooth: true, class: "inView" }}>
        <html lang="pt-BR" className={clsx(mobile && "mobile")}>
          <head>
            <meta charSet="utf-8" />
            <meta
              name="viewport"
              content="width=device-width,initial-scale=1"
            />
            <meta property="og:title" content="Greghory Gusmão Metzker" />
            <meta
              property="og:description"
              content="Ajudo empresas a criarem experiências de produtos envolventes, desde a estratégia até a entrega."
            />
            <meta property="og:url" content="https://greghory.com" />
            <meta
              property="og:image"
              name="image"
              content="https://greghory.com/banner.png"
            />
            <meta name="author" content="Greghory & Tharyck" />
            <script src="https://www.googletagmanager.com/gtag/js?id=G-J5N96E0Y4B" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J5N96E0Y4B');

              `,
              }}
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
              rel="stylesheet"
            />
            {/*  */}
            <Meta />
            <Links />
          </head>
          <body>
            <Outlet />

            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === "development" && <LiveReload />}
            {/* <ReactTooltip place="top" type="dark" effect="solid" /> */}
          </body>
        </html>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
