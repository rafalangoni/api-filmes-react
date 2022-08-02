import styled from 'styled-components'

export const Container = styled.div`
    h1{
        margin: 4rem 0;
        text-align: center;
    }

    ul{
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        list-style: none;
        row-gap: 4rem;
    }

    li{
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    img{
        border-radius: 1rem;
        margin-bottom: 2rem;
        width: 200px;
    }

    span{
        font-size: 120%;
        font-weight: bold;
    }
    
    a:hover{
        transition: all 0.3s;
        transform: scale(1.1);
    }
`