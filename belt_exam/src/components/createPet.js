import React, {useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';


const Pet = (props) => {
    const [forminfo, setFormInfo] = useState({
        PetName: "",
        PetType: "",
        PetDesc: "",
        PetSkill1: "",
        PetSkill2: "",
        PetSkill3: ""
    })

    const [errors, setErrors] = useState({})


    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/pets/create', forminfo)
            .then(response =>{
                console.log('Response after submitting the form', response)
                if(response.data.errors){
                    console.log('validation errors')
                    setErrors(response.data.errors)
                }
                else{
                    navigate('/all')
                }
            })
            .catch(err => console.log(err))
    }

    const changeHandler = (e)=>{
        setFormInfo({
            ...forminfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
        <form className = "col-6 mx auto" onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">Pet Name</label>
                <input type="text" name = "PetName" className="form-control" onChange={changeHandler} id=""/>
                <p className = "text-danger">{errors.PetName? errors.PetName.message: ""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Type</label>
                <input type="text" name = "PetType" className="form-control" onChange={changeHandler} id=""/>
                <p className = "text-danger">{errors.PetType? errors.PetType.message: ""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Description</label>
                <input type="text" name = "PetDesc" className="form-control" onChange={changeHandler} id=""/>
                <p className = "text-danger">{errors.PetDesc? errors.PetDesc.message: ""}</p>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 1(Optional)</label>
                <input type="text" name = "PetSkill1" className="form-control" onChange={changeHandler} id=""/>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 2(Optional)</label>
                <input type="text" name = "PetSkill2" className="form-control" onChange={changeHandler} id=""/>
            </div>
            <div className="form-group">
                <label htmlFor="">Pet Skill 3(Optional)</label>
                <input type="text" name = "PetSkill3" className="form-control" onChange={changeHandler} id=""/>
            </div>
            <button type='submit' className = 'btn btn-success'>
                Submit
            </button>
            <button className = 'btn btn-success'><a href={`/all`}>Return to all pets</a></button>
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


export default Pet;