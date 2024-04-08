import { lazy } from "react";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ContactContent from "../../content/ContactContent.json";
import ppfContent from "../../content/PPF.json";
import chromeContent from "../../content/ChromeDeleteContent.json";
import buildingContent from "../../content/buildingContent.json";
const NoteContentBlock = lazy(() => import("../../components/NoteContent"));
const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const FrontImage = lazy(() => import("../../components/FrontImage/Index"));
// import FadeImages from './FadeImages';

const Home = () => {
  return (
    <Container>
      {/* <ScrollToTop /> */}
      <FrontImage></FrontImage>
      {/* <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.jpg"
        id="intro"
      /> */}
      <MiddleBlock
        title={MiddleBlockContent.title}
        content={MiddleBlockContent.text}
        button={MiddleBlockContent.button}
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
       <NoteContentBlock
        // type="right"
         title={AboutContent.title}
         content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="mission"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        // section={MissionContent.section}
        icon="product-launch.svg"
        id="Wrapping"
      />
       <NoteContentBlock
        // type="right"
         title={MissionContent.title}
         content={MissionContent.text}
        section={MissionContent.section}
        icon="graphs.svg"
        id="mission"
      />
      
      <ContentBlock
        type="ppf"
        title={ppfContent.title}
        content={ppfContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
       <NoteContentBlock
        //  type="right"
         title={ppfContent.title}
         content={ppfContent.text}
        section={ppfContent.section}
        icon="product-launch.svg"
        id="mission"
      />

      <ContentBlock
        type="chrome"
        title={chromeContent.title}
        content={chromeContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="chrome"
      />
       <NoteContentBlock
        //  type="right"
         title={chromeContent.title}
         content={chromeContent.text}
        section={chromeContent.section}
        icon="product-launch.svg"
        id="chrome"
      />

      <ContentBlock
        type="building"
        title={buildingContent.title}
        content={buildingContent.text}
        // section={AboutContent.section}
        icon="graphs.svg"
        id="building"
      />
       <NoteContentBlock
        //  type="right"
         title={buildingContent.title}
         content={buildingContent.text}
        section={buildingContent.section}
        icon="product-launch.svg"
        id="building"
      />

      {/* <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      /> */}
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
