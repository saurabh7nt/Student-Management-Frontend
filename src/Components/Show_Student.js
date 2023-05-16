import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import apiurl from '../api'
import { useNavigate } from 'react-router-dom';


export default function Show_Student() {

    let navigate = useNavigate();

    var [api, setapi] = useState([]);
    useEffect(()=>{
    // axios.get(apiurl + 'getAllStudents').then((result)=>{
    axios.get(`${process.env.REACT_APP_API_URL}/getAllStudents`).then((result)=>{
      console.log(result.data)
      setapi(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  function handleClick(rollno){
    // axios.delete(apiurl + `getById/${rollno}`).then((result)=>{
    axios.delete(`${process.env.REACT_APP_API_URL}/getById/${rollno}`).then((result)=>{
        console.log("deleted"+ result)
        navigate('/student/show/')
    }).catch((error)=>{
        console.log(error);
    })
  }

  
  return (
    <div>
         <h2 className="text-center my-3" >Student Management App</h2>
         <h3 className="text-center my-3" >List of Students : </h3>
         <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body bg-primary-subtle">
              <table className="table">
                <thead>
                  <tr>
                    {/* <th>#SNO.</th> */}
                    <th>ROLL ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>STD</th>
                    <th>AGE</th>
                    <th>ADDRESS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        api && api.length > 0 && api.map(obj=>
                            <tr>
                                <td>{obj.rollno}</td>
                                <td>{obj.name}</td>
                                <td>{obj.email}</td>
                                <td>{obj.std}</td>
                                <td>{obj.age}</td>
                                <td>{obj.address}</td>
                                <td> 
                                    <button type="button" onClick={() => handleClick(obj.rollno)} className="btn btn-warning" >Delete</button>
                                </td>
                            </tr>
                        )    
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
