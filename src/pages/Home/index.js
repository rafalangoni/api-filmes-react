import { useState, useEffect } from "react"
import { Container } from "../../componentes/Home/Container"
import { Filme } from "../../componentes/Home/Filme"
import { ListaFilmes } from "../../componentes/Home/ListaFilmes"
import { api_key } from "../../config/key"

const Home = () => {

    const [movies, setMovies] = useState([]);
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
            .catch((error) => {
                console.log(error.message);
            })
    
    }, [])

    return (
        <Container>
            <h1>Filmes</h1>
            <ListaFilmes>
                {movies.map(movie => {
                    return (
                    <Filme key={movie.id}>
                        <a href="https://www.google.com.br"><img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img></a>
                        <span>{movie.title}</span>
                    </Filme>
                    )
                })}
            </ListaFilmes>
        </Container>
    )
}

export default Home;