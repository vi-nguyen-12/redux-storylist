import styled from "styled-components";
import { Segment } from "semantic-ui-react";


export const Wrapper = styled(Segment)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .ui.header{
    width: 200px;
    font-family: "Sansita Swashed", cursive;
    color: #3bafaa;
    font-size: 2rem;
    margin:auto 0;
    text-align:center
  }
  .ui.menu>.item, .ui.menu .item{
    &:hover{
      color:#3bafaa
    }
  }


  `