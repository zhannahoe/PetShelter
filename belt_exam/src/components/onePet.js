import {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router'

const Details = (props) => {
    const [Pet, setPet] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.petID}`)
            .then(response => {
                setPet(response.data.results)
            })
            .catch(err => console.log(`Error getting Pet ${props.petID}`, err))
    }, [])

    const deletePet = (e, id) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${props.petID}`)
            .then(res => {
                navigate('/all')
            })
            .catch(err => console.log(`Error deleting Pet ${props.petID}`, err))
        navigate("/api/Pets") 
    }

    return (
        <>
        <div>
        <div className="card">
                    <div className="card-body" onSubmit = {deletePet}>
                        <h4 className="card-title"><Link to ={`/pets/${Pet._id}`}>{Pet.PetName}</Link></h4>
                        <p className="card-body">Type of Pet: {Pet.PetType}</p>
                        <p className="card-body">Description of Pet: {Pet.PetDesc}</p>
                        <p className="card-body">Skill 1: {Pet.PetSkill1}</p>
                        <p className="card-body">Skill 2: {Pet.PetSkill2}</p>
                        <p className="card-body">Skill 3: {Pet.PetSkill3}</p>
                        <button onClick={(e)=>{deletePet(e, Pet._id)}} className = 'btn btn-success'>Adopt {Pet.PetName}</button>
                        <button className = 'btn btn-success'><a href={`/all`}>Return to all pets</a></button>
                    </div>
                </div>
        </div> 
        </>
    )
}

export default Details