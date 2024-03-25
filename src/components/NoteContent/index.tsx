import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { ContentBlockProps } from "../ContentBlock/types";
import {
  LeftContentSection,
//   Content,
//   ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
} from "./styles";


const NoteContentBlock = ({
 // icon,
//   title,
//   content,
  section,
  t,
//   id,
}: ContentBlockProps) => {
  return (
    <LeftContentSection>
      {/* <Fade direction="left"> */}
            {/* <ContentWrapper> */}
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
            {/* </ContentWrapper> */}
      {/* </Fade> */}
    </LeftContentSection>
  );
};

export default withTranslation()(NoteContentBlock);
