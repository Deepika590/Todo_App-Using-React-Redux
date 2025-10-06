import React, { useState } from "react";
import { addUser } from "../Slices/UserSlices";
import { useDispatch } from "react-redux";

const AddUser =()=>{
    const[input,setInput] = useState ('');
    const dispatch = useDispatch();

    function handleUser(){
        if(input){
            dispatch(addUser(input))
            //setInput('');
        }
    }
    return(
        <div className="Add">
            <h1>TODO_APP</h1>
            <input type="text" placeholder="Enter New User" value={input} 
            onChange={(e)=>{setInput(e.target.value)}}></input>
            <br />
            <button onClick={handleUser} id="Addbuton">Add New User</button>
        </div>
    )
}
export default AddUser;