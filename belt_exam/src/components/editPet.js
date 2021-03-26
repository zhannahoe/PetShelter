import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Edit = (props) => {
    const [forminfo, setFormInfo] = useState({
        PetName: "",
        PetType: "",
        PetDesc: "",
        PetSkill1: "",
        PetSkill2: "",
        PetSkill3: ""
    })

useEffect(() => {
    axios.get(`http://localhost:8000/api/pets/${props.petID}`)
        .then(response => {
            console.log("edit form, getting info about the pets", response)
            setFormInfo(response.data.results)
        })
        .catch(err => console.log('error', err))
}, []);

const submitHandler = (e)=>{
    e.preventDefault()
    axios.put(`http://localhost:8000/api/pets/update/${props.petID}`, forminfo)
        .then(response =>{
            console.log('Response after submitting the form', response)})
            navigate('/all')
        .catch(err => {
            console.log('errors on deck', err)
            navigate(`/edit/${props.petID}`)
        })
}

const changeHandler = (e)=>{
    setFormInfo({
        ...forminfo,
        [e.target.name]: e.target.value
    })
}


    return (
        <>
        <h1>Edit {forminfo.PetName}</h1>
        <form className = "col-6 mx auto" onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Pet Name</label>
                <input type="text" name = "PetName" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetName}/>
                {forminfo.PetName.length < 3 && forminfo.PetName.length !== 0? <p className = "text-danger">Name must be at least 3 characters long</p>: null}
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Type</label>
                <input type="text" name = "PetType" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetType}/>
                {forminfo.PetType.length < 3 && forminfo.PetType.length !== 0? <p className = "text-danger">Type must be at least 3 characters long</p>: null}
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Description</label>
                <input type="text" name = "PetDesc" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetDesc}/>
                {forminfo.PetDesc.length < 3 && forminfo.PetDesc.length !== 0? <p className = "text-danger">Description must be at least 3 characters long</p>: null}
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 1(Optional)</label>
                <input type="text" name = "PetSkill1" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetSkill1}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 2(Optional)</label>
                <input type="text" name = "PetSkill2" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetSkill2}/>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 3(Optional)</label>
                <input type="text" name = "PetSkill3" className="form-control" onChange={changeHandler} id="" defaultValue={forminfo.PetSkill3}/>
            </div>
            <button><a href={`/all`} className = 'btn btn-success'>Return to All Pets</a></button>
            <button type='submit' className = 'btn btn-success'>
                Submit
            </button>
        </form>

        <hr/>

        <p>Pet Name: {forminfo.PetName}</p>
        <p>Pet Type: {forminfo.PetType}</p>
        <p>Pet Description: {forminfo.PetDesc}</p>
        <p>Pet Skill 1: {forminfo.PetSkill1}</p>
        <p>Pet Skill 2: {forminfo.PetSkill2}</p>
        <p>Pet Skill 3: {forminfo.PetSkill3}</p>
        </>
    );
};


export default Edit;