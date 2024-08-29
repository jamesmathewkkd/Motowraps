import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            {/* <Col lg={4} md={4} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:maheshzodiac867@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col> */}
            <Col lg={4} md={4} sm={12} xs={12}>
              <Empty />
              <Language>{t("Address")}</Language>
              <Para>Hildedalsgatan 8b</Para>
              <Para>417 05</Para>
              <Para>Göteborg</Para>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12}>
              <Label htmlFor="select-lang">{t("Language")}</Label>
              <LanguageSwitchContainer>
                <LanguageSwitch onClick={() => handleChange("en")}>
                  <SvgIcon
                    src="united-states.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
               
                <LanguageSwitch onClick={() => handleChange("se")}>
                  <SvgIcon
                    src="sweden.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
                </LanguageSwitch>
              </LanguageSwitchContainer>
            </Col>
            
          </Row>

        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <Col lg={4} md={4} sm={12} xs={12}>
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="Footer_logo.jpeg"
                  aria-label="homepage"
                  width="155px"
                  height="70px"
                />
              </LogoContainer>
            </NavLink>
            </Col>
            <Col lg={4} md={4} sm={6} xs={6}>
            <FooterContainer>
              <SocialLink
                href="https://www.instagram.com/motowraps.se?igsh=MWZjempsbWVwamxiZw%3D%3D&utm_source=qr"
                src="instagram.svg"
              />
            </FooterContainer>
            </Col>
            <Col lg={4} md={4} sm={6} xs={6}>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/share/ipoNyDJL7tKGJcUT/?mibextid=LQQJ4d"
                src="facebook.svg"
              />
            </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
