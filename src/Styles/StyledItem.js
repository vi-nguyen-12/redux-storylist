import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
`;

export const Image = styled.img`
  border-radius: 10px;
`;

export const Content = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 100%;
  justify-content: space-between;
`;
export const Header = styled.h5``;
export const Subheader = styled.h5`
  display: flex;
  justify-content: space-between;
  s
`;

export const StyledLink = styled(Link)`
    color:red
    color:${props => (props.primary ? "black" : "grey")}
    size:${props => (props.primary ? "1rem" : "0.8rem")}`; // k ăn
