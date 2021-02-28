import styled from "styled-components";
import me from "./me.jpg";
import normalize from "./globalStyles"

export const SectionHeading = styled.h2`
  font-size: normalize(32);
  font-weight: "bold";
  color: #666;
  text-align: center;
  margin-right: 30%;
  margin-top: 5%;
  margin-left: 20%;
  border-bottom: 2px solid #a43f49;
  width: 80%;
`;

export const LeftImage = styled.div`
  background-image: url(${me});
  width: 50%;
  height: 50%;
  padding-bottom: 25%;
  border-radius: 20%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 35%;
  display: flex;
`;

export const SubHead = styled.h4`
  margin-right: 30%;
  font-size: normalize(32);
  font-weight: "bold";
  color: #666;
  letter-spacing: 0.25px;
  margin-left: ${props => props.marginLeft || '30%'};
`;

export const RightP = styled.p`
  margin-right: 30%;
  padding-right:30%;
  font-size: normalize(16);
  line-height: 24px;
  color: #666;
`;


export const UnorderedList = styled.ul`
    padding: 0;
    margin-left: ${props => props.marginLeft || '30%'};
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
