import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams()
    console.log(id)
    return(
        <h1>Detalhes do filme</h1>
    )
}

export default Details;