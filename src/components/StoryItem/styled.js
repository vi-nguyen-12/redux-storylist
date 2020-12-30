import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin:10px;
  border-radius: 10px;
  height: 100%;
  img.ui.image {
    border-radius: 10px;
  }
  .ui.header{
    font-size: 1.2rem;
    font-weight: 300;
    & a{
      color: var(--primary-color)
    }
  }
  .ui.horizontal.divided.list>.item{
        font-size: 0.9rem;
        & a{
          color:grey
        }
    }
    .ui.container{
       text-align: center;
       font-size: 0.8rem;
       color:grey
    }
`

