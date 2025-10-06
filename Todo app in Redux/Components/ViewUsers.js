import React from 'react';
import { useSelector } from 'react-redux';
import { deleteUser } from '../Slices/UserSlices';
import { useDispatch } from 'react-redux';

const ViewUsers = () =>{
    const usersData = useSelector(state=>state.Users);
    const dispatch = useDispatch();

    function handledelUsers(index){
          dispatch(deleteUser(index));
    }
    return(
        <div className='view'>
            <h1>View Users List</h1>
            {
                usersData.map((user, index) =>{
                    return(
                        <ul key={index}>
                            <h2>{user}</h2>
                            <button onClick={()=>{
                                handledelUsers(index)}}>Delete</button>
                        </ul>
                    )
                })
            }
        </div>
    )
}
export default ViewUsers;