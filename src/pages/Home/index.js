import { useState, useEffect } from "react"
import { Container } from "../../componentes/Home/Container"
import { Filme } from "../../componentes/Home/Filme"
import { ListaFilmes } from "../../componentes/Home/ListaFilmes"
import { api_key } from "../../config/key"

const Home = () => {

    // const [filmes, setFilmes] = useState([]);
    // const image_path = 'https://image.tmdb.org/t/p/w500'

    // useEffect(() => {
    //     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
    //         .then(response => response.json)
    //         .then(data => {
    //             setFilmes(data)
    //             console.log(`conteudo filmes ${filmes}`)
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    
    // })

    const filmes = [
        {
            id: 1,
            title: "Spider",
            url: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/11/11/1200x800/1_poster_de_homem_aranha_sem_volta_para_casa_foto_reproducaomarvel_studios_widelg-7045997.jpg?20211111102937?20211111102937'
        },
        {
            id: 2,
            title: "Spider-Man",
            url: 'https://midias.correiobraziliense.com.br/_midias/jpg/2021/11/11/1200x800/1_poster_de_homem_aranha_sem_volta_para_casa_foto_reproducaomarvel_studios_widelg-7045997.jpg?20211111102937?20211111102937'
        }
    ]

    return (
        <Container>
            <h1>Filmes</h1>
            <ListaFilmes>
                {filmes.map(filme => {
                    return (
                    <Filme key={filme.id}>
                        <a href="https://www.google.com.br"><img src={filme.url} alt={filme.title}></img></a>
                        <span>{filme.title}</span>
                    </Filme>
                    )
                })}
            </ListaFilmes>
        </Container>
    )
}

export default Home;