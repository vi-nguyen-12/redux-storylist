import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin:10px;
  background-color: white;
  border-radius: 10px;
  height: 100%;
  img.ui.image {
    border-radius: 10px;
  }
  .ui.header{
    font-size: 1.2rem
  }
  .ui.container{
    display:flex;
    padding: 0 30px;
    justify-content:space-between;
  }
`

