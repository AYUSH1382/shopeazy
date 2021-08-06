import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { filterHandicraft } from '../actions/handicraftActions'

export default function Filter() {

    const dispatch = useDispatch()
    const [searchkey, setsearchkey] = useState('')
    const [category, setcategory] =useState('all')
    return (
        <div className="container">
            <div className="row justify-content-center shadow-lg p-3 mb-5 bg-body rounded">
                <div className="col-md-3 ">
                    <input 
                    onChange={(e)=>{setsearchkey(e.target.value)}}
                     value={searchkey} type="text" className="form-control w-100" placeholder="Search Product"/>
                </div>
                <div className="col-md-3">
                    <select className="form-control w-100 mt-2"  value={category} onChange={(e)=>{setcategory(e.target.value)}} >
                        <option value="all">All</option>
                        
                        <option value="homedecor">Home Decor</option>
                        <option value="kitchen">Kitchen</option>
                        <option value="beauty">Beauty</option>
                        
                        <option value="stationary">Stationary</option>
                        <option value="clothing">Clothing</option>
                        <option value="toys">Toys</option>

                    </select>
                </div>
                <div className="col-md-3">
                    <button className="btn w-100 mt-2" onClick={()=>{dispatch(filterHandicraft(searchkey,category))}}>FILTER</button>
                </div>
            </div>
        </div>
    )
}
