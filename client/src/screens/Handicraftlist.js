import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import Error from '../components/Error'
import Filter from '../components/Filter'
import Loading from '../components/Loading'
import { deleteHandicraft, getAllHandicraft } from '../actions/handicraftActions'
import { Link } from 'react-router-dom'

export default function Handicraftlist() {

    const dispatch = useDispatch()

    const handicraftstate = useSelector(state => state.getAllHandicraftReducer)
    const {handicraft,error,loading} = handicraftstate;

    useEffect(() => {
        dispatch(getAllHandicraft())
    },[])


    return (
        <div>
            <h2>Handicraft List</h2>
            {loading && (<Loading/>)}
            {error && (<Error error='Something went wrong'/>)}
            <table className='table table-responsive-sm'>
                <thead className='table-dark'>
                    <tr>
                        <th>Name</th>
                        <th>Prices</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {handicraft && handicraft.map(hand=>{

                    return <tr>
                        <td>{hand.name}</td>
                        <td>
                            Small : {hand.prices[0]['small']} <br/>
                            Medium : {hand.prices[0]['medium']} <br/>
                            Large : {hand.prices[0]['large']}
                        </td>
                        <td>{hand.category} </td>
                        <td>
                            <i className='fa fa-trash m-1' onClick={()=>{dispatch(deleteHandicraft(hand._id))}}></i>
                            <Link to={`/admin/edithandicraft/${hand._id}`}><i className='fa fa-edit m-1'></i></Link>
                                                    
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
            

        </div>
    )
}
