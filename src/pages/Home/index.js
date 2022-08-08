import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
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
                        <Link to={`/details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title}></img></Link>
                        <span>{movie.title}</span>
                    </Filme>
                    )
                })}
            </ListaFilmes>
        </Container>
    )
}

export default Home;