import styled from "styled-components";

export const Grid = styled.div`
`;

export const Row = styled.div`
  display: flex;
  height: ${(props) => props.height};
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  margin-left: ${(props) => props.marginLeft || 0};
`;
