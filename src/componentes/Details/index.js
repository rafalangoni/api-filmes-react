import { useParams } from "react-router-dom";


const Details = () => {
    const { id } = useParams()
    console.log(id)
    return(
        <h1>Teste</h1>
    )
}

export default Details;