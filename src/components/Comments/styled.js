import styled from 'styled-components';

export const Wrapper=styled.div`
    margin:20px;
    .ui.header{
        font-size:1.5rem
    }
    .ui.comments .comment{
        & .author, .text{
            font-size:0.9rem;
            display:inline-block;
        }
        & .author a{
            color: var(--primary-color)
        }
        & .metadata>*{
            font-size: 0.7rem
        }
        &  .actions{
            font-size:0.8rem
        }
    }
`