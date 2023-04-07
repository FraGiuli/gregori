import Image from "next/image";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

export default function Home() {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  return (
    <Layout title="Home" metaDescription="La Home" page={"home"}>
      {selectedLanguage === "en" ? "hello" : "ciao"}
    </Layout>
  );
}
