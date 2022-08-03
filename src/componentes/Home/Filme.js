import styled from 'styled-components'

export const Filme = styled.li`
        align-items: center;
        display: flex;
        flex-direction: column;
    
    img{
        border-radius: 1rem;
        margin-bottom: 2rem;
        width: 200px;
    }

    span{
        font-size: 120%;
        font-weight: bold;
    }

    a{
        transition: all 0.3s;
    }
    
    a:hover{
        transform: scale(1.1);
    }
`