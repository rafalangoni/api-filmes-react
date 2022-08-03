import { useState } from "react"
import { Container } from "../../componentes/Home/Container"
import { Filme } from "../../componentes/Home/Filme"
import { ListaFilmes } from "../../componentes/Home/ListaFilmes"

const Home = () => {

    const [filmes2, setFilmes2] = useState([]);

    const filmes = [
        {
            id: 1,
            titulo: 'Spider-Man',
            url_imagem: 'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_ESPETACULAR%20HOMEM-ARANHA%202.JPG'
        },
        {
            id: 2,
            titulo: 'Spider-Man2',
            url_imagem: 'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_ESPETACULAR%20HOMEM-ARANHA%202.JPG'
        },
        {
            id: 3,
            titulo: 'Spider-Man3',
            url_imagem: 'https://www.sonypictures.com.br/sites/brazil/files/2022-03/KEY%20ART_ESPETACULAR%20HOMEM-ARANHA%202.JPG'
        },
    ]
    return (
        <Container>
            <h1>Filmes</h1>
            <ListaFilmes>
                {filmes.map(filme => {
                    return(
                    <Filme key={filme.id}>
                        <a href="https://www.google.com.br"><img src={filme.url_imagem} alt={filme.titulo}></img></a>
                        <span>Spider Man</span>
                    </Filme>
                    )
                })}
            </ListaFilmes>
        </Container>
    )
}

export default Home;