import styled from 'styled-components'

export const ListaFilmes = styled.ul`
        column-gap: 2rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        list-style: none;
        row-gap: 4rem;
`