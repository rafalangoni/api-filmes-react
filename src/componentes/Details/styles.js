import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;

    h1{
        margin: 3rem 0;
    }

    .movie{
        align-items: center;
        display: flex;
        justify-content: center;
    }

    img{
        border-radius: 1rem;
        width: 300px;
    }

    .details{
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        margin-left: 4rem;
        max-width: 50%;
    }

    button{
        background: #6654da;
        border: none;
        border-radius: 1rem;
        color: white;
        cursor: pointer;
        margin-top: 1rem;
        font-size: 100%;
        padding: 1rem 2rem;
        transition: 0.3s
    }

    button:hover{
        background: #5848c2;
    }

    span{
        line-height: 130%;
        font-size: 110%;
        margin-bottom: 1rem;
    }

    .release-date{
        opacity: 0.5;
    }

`