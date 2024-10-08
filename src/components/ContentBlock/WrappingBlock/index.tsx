import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps } from "../types";
import ImageSlideShow from '../../SlideShow/wrappingSlideShow';
import {
  Content,
  RightBlockContainer,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";

const RightBlock = ({
  title,
  content,
  section,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      {/* <Fade direction="right"> */}
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            {/* <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper> */}
              <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <ServiceWrapper>
                <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </ServiceWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
          <ImageSlideShow/>
          </Col>
        </Row>
      {/* </Fade> */}
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
