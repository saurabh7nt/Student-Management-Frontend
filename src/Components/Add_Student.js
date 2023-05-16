import axios from 'axios';
import React from 'react'
import apiurl from '../api'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function Add_Student() {

    const { register, formState: { errors }, handleSubmit } = useForm();
    let navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        //added environment here
        // axios.post(apiurl + 'save', data).then((result)=>{
        axios.post(`${process.env.REACT_APP_API_URL}/save`, data).then((result)=>{
        console.log(result)
            navigate('/student/show/')
        }).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <div className="container">
        <div className="row">
            <div className="col-xl-4 offset-4">
                <div className="card">
                    <div className="card-body bg-primary-subtle">
                      <form action="/student/add/" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                        <label for="name" className="form-label" >Student Name : </label>
                        <input name="name" className="form-control" {...register("name")} id="name"/>
                        <label for="rollno" className="form-label" >Roll no. : </label>
                        <input name="rollno" className="form-control" {...register("rollno")} id="rollno"/>
                        <label for="std" className="form-label" >Std : </label>
                        <input name="std" className="form-control" {...register("std")} id="std"/>
                        <label for="age" className="form-label" >Age : </label>
                        <input name="age" className="form-control" {...register("age")} id="age"/>
                        <label for="email" className="form-label" >Email : </label>
                        <input name="email" className="form-control" {...register("email")} id="email"/>
                        <label for="address" className="form-label" >Address : </label>
                        <input name="address" className="form-control" {...register("address")} id="address"/>
                        <br/>
                        <button className="form-control btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                  </div>
            </div>
        </div>
    </div>
</div>
  )
}
