import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllHandicraft } from '../actions/handicraftActions'
import Error from '../components/Error'
import Filter from '../components/Filter'
import HandMade from '../components/HandMade'
import Loading from '../components/Loading'

// import hands from '../Handidata'

export default function Homescreen() {

    const dispatch = useDispatch()

    const handicraftstate = useSelector(state => state.getAllHandicraftReducer)
    const {handicraft,error,loading} = handicraftstate


    useEffect(() => {
        dispatch(getAllHandicraft())
    },[])



    return (
        <div>
            <Filter/>
            <div className="row justify-content-center">
                

                {loading ? <Loading/> : error ? (<Error error='Something went wrong'/>):(

                        handicraft.map(hand=>{
                            return (<div className="col-md-3 m-3" key={hand._id}>
                                <div>
                                <HandMade hand = {hand}/>
                                </div>
                            </div>
                            );
                        })

                )}

                
            </div>
            
        </div>
    )
}
