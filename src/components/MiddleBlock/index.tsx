import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
// import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  button: string;
  t: any;
}

const MiddleBlock = ({ title, content, button, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection>
      {/* <Slide> */}
        <Row justify="start" align="middle">
          <ContentWrapper>
            <Col lg={25}>
              <div className="div-header">{t(title)}</div>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("mission")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      {/* </Slide> */}
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
