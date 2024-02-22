import { useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Sedi from "../components/sedi";
import Storia from "../components/Storia";
import Eventi from "../components/Eventi";
import Footer from "../components/footer";
import Intro from "../components/Intro";
import HeroVideo from "../components/HeroVideo";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../redux/language";
import {
  HOME_CONTENT,
  COLLEZIONI_CONTENT,
  MENU_ITEM,
} from "../constants/Content";
import Collections from "../components/Collections";

export default function Home() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const isMenuOpen = useSelector((state) => state.layout.openMenu);
  const dispatch = useDispatch();
  useEffect(() => {
    if (typeof window !== undefined) {
      const actualLang = window.localStorage.getItem("lang");
      if (actualLang) {
        dispatch(setLanguage(actualLang));
      } else {
        window.localStorage.setItem("lang", selectedLanguage);
      }
    }
  }, [dispatch, selectedLanguage]);
  useEffect(() => {
    document.body.onselectstart = function () {
      return false;
    };
  });

  // useEffect(() => {
  //   const body = document.querySelector("body");
  //   if (isMenuOpen) {
  //     body.classList.add("menu-is-open");
  //   } else {
  //     body.classList.remove("menu-is-open");
  //   }
  // }, [isMenuOpen]);

  const Content = HOME_CONTENT[selectedLanguage];
  const Collezioni = COLLEZIONI_CONTENT[selectedLanguage];
  const MenuContent = MENU_ITEM[selectedLanguage];

  return (
    <>
      <Head>
        <title>I Gregori - Gioelleria Milano</title>
        <meta name="description" content="Gioielleria I Gregori Milano" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <main>
        <Header content={MenuContent} />
        <Intro />
        <HeroVideo content={Content} />
        <Storia content={Content} />
        <Collections content={Collezioni} />
        <Eventi content={Content.eventi} />
        <Sedi content={Content.sedi} />

        <Footer />
      </main>
    </>
  );
}
