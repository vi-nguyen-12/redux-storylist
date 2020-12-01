import styled from "styled-components";

//StoryDetail.js
export const Header = styled.h3`
  padding-top: 15px;
  font-size: ${props => (props.sub ? "1.1rem" : "1.6rem")};
  padding-left: ${props => props.sub && "10px"};
`;
export const Info = styled.div`
  font-style: italic;
  color: grey;
  margin-bottom: 5px;
`;
export const Content = styled.p`
  margin: 30px 0 40px 0px;
`;

export const StyledLink = styled.a`
  color: grey;
  font-size: 0.8rem;
  font-style: italic;
`;

//Comments.js
export const Container = styled.div`
  padding: 5px 10px;
  font-style: italic;
`;
