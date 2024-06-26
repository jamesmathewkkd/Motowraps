import styled from "styled-components";

export const RightBlockContainer = styled("section")`
  position: relative;
   padding: 0rem 0 0rem;
   margin-left: 15px;
   margin-right: 15px;



  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 25px;
  line-height: 1.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 16px;
`;

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 0rem 0 0rem;
  margin-left: 15px;
  margin-right: 15px;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;
