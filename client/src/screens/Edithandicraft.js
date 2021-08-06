import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHandicraftById, editHandicraft } from '../actions/handicraftActions'
import Error from '../components/Error'
import Loading from '../components/Loading'
import Success from '../components/Success'

export default function Edithandicraft({match}) {
    
    const dispatch = useDispatch()
    const [name,setname] = useState('')
    const [smallprice,setsmallprice] = useState()
    const [mediumprice,setmediumprice] = useState()
    const [largeprice,setlargeprice] = useState()
    const [image,setimage] = useState('')
    const [description,setdescription] = useState('')
    const [category,setcategory] = useState('')

    const gethandicraftbyidstate = useSelector(state=>state.getHandicraftByIdReducer)
    const {handicraft,error,loading} = gethandicraftbyidstate
    
    const edithandicraftstate = useSelector((state)=> state.editHandicraftReducer)
    const {editloading,editerror,editsuccess} = edithandicraftstate
    
    useEffect(() => {
        
        if(handicraft){
            if(handicraft._id == match.params.handicraftid){
            setname(handicraft.name)
            setdescription(handicraft.description)
            setcategory(handicraft.category)
            setsmallprice(handicraft.prices[0]['small'])
            setmediumprice(handicraft.prices[0]['medium'])
            setlargeprice(handicraft.prices[0]['large'])
            setimage(handicraft.image)
            }
            else{
                dispatch(getHandicraftById(match.params.handicraftid))
            }
        }
        else{
        dispatch(getHandicraftById(match.params.handicraftid))
        }
    }, [handicraft, dispatch])

    function formHandler(e){
        e.preventDefault();

        const editedhand = {
            _id : match.params.handicraftid,
            name,
            image,
            description,
            category,
            prices: {
                small : smallprice,
                medium: mediumprice,
                large : largeprice,
            },
        };
        // console.log(hand);
        dispatch(editHandicraft(editedhand))
        
    }
    
    
    return (
        <div>
            
            {/* <h1>Handicraft Id = {match.params.handicraftid}</h1> */}
            <div style ={{textAlign:'left'}} className="shadow-lg p-3 mb-5 bg-white rounded">
            <h1>Edit Handicraft</h1>
            
            {loading && (<Loading/>)}
            {error &&(<Error error='something went wrong'/>)}
            {editsuccess && (<Success success='Details edited successfully'/>)}
            {editloading && (<Loading/>)}

            <form onSubmit={formHandler}>
                
                <input className='form-control' type="text" placeholder="name" value={name} onChange={(e)=>{setname(e.target.value)}} />
                <input className='form-control' type="text" placeholder="small varient price" value={smallprice} onChange={(e)=>{setsmallprice(e.target.value)}} />
                <input className='form-control' type="text" placeholder="medium varient price" value={mediumprice} onChange={(e)=>{setmediumprice(e.target.value)}} />
                <input className='form-control' type="text" placeholder="large varient price" value={largeprice} onChange={(e)=>{setlargeprice(e.target.value)}} />
                <input className='form-control' type="text" placeholder="Category" value={category} onChange={(e)=>{setcategory(e.target.value)}} />
                <input className='form-control' type="text" placeholder="description" value={description} onChange={(e)=>{setdescription(e.target.value)}} />
                <input className='form-control' type="text" placeholder="image url" value={image} onChange={(e)=>{setimage(e.target.value)}} />
                <button className='btn mt-3' tyoe='submit'>Edit Handicraft</button>
            </form>
            </div>
        </div>
    )
}
 