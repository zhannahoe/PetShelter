import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';


const All = (props) => {

    const [allPets, setAllPets] = useState([])


    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/all")
            .then(response => {
                console.log(response)
                setAllPets(response.data.results)
            })
            .catch(err => err)
    })
    

    return (
        <div>
            {allPets.map((pet, idx)=>{
                return <div className="card">
                    <div className="card-body">
                        <h4 className="card-title"><Link to ={`/pets/${pet._id}`}>{pet.PetName}</Link></h4>
                        <p className="card-body">Type of Pet: {pet.PetType}</p>
                        <p className="card-body">Description of Pet: {pet.PetDesc}</p>
                        <p className="card-body">Skill 1: {pet.PetSkill1}</p>
                        <p className="card-body">Skill 2: {pet.PetSkill2}</p>
                        <p className="card-body">Skill 3: {pet.PetSkill3}</p>
                        <button><a href={`/edit/${pet._id}`}>Edit {pet.PetName}</a></button>
                    </div>
                </div>
            })}
            <Link to ="/create">Add a new Pet</Link>
        </div>
    );
};


export default All;