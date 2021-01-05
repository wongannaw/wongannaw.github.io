import styled from "styled-components";
import me from "./me.jpg";

export const SectionHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #666;
  text-align: center;
  margin-top: 30px;
  border-bottom: 2px solid #a43f49;
  width: 80%;
`;

export const LeftImage = styled.div`
  background-image: url(${me});
  width: 70%;
  height: 70%;
  border-radius: 20%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 10%;
  display: flex;
  @media only screen and (max-width: 60px) {

  }
`;

export const SubHead = styled.h4`
  font-size: 26px;
  font-weight: 700;
  color: #666;
  letter-spacing: 0.25px;
  margin-top: 30px;
  margin-left: 10%;
`;

export const RightP = styled.p`
  margin-top: 20px;
  margin-right: 30%;
  margin-left: 10%;
  font-size: 16px;
  line-height: 24px;
  color: #666;
`;


export const UnorderedList = styled.ul`
    padding: 0;
    margin-left: 10%;
    list-style: none;
`;

export const ListItem = styled.li`
  &:before {
    content: "•";
    color: #a43f49
  }
  display: block;
  font-weight: bold;
`;
