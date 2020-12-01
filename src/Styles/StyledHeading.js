import styled from "styled-components";
import { Menu } from "semantic-ui-react";

export const StyledHeader = styled.h2`
  font-family: "Sansita Swashed", cursive;
  color: #3bafaa;
  font-size: 2rem;
`;
export const StyledMenu = styled(Menu)`
  &&& > .item {
    &:hover {
      color: #3bafaa;
    }
  }
`;
