import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  .ui.header:first-child{
        font-size: 2rem;
        font-weight: 300;
        margin-top:20px;
        color: var(--primary-color)
    }
    .ui.container{
       text-align: center;
       font-size: 0.8rem;
       color:grey
    }
    .ui.placeholder{
        margin-top: 30px;
        padding-left:1.5rem;
        width: 100%;
    }
    .ui.segment{
      width: 500px;
      display: flex;
      flex-direction:column;
      align-items:center;
      & a .ui.header{ 
        text-align:center;
        font-size:1.5rem;
        font-weight:300;
        margin-bottom:10px;
        }
      & .ui.horizontal.divided.list>.item{
        font-size: 0.9rem;
        & a{
          color:grey
        }
    }
    }
`;
