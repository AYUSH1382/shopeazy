import axios from 'axios';

export const getAllHandicraft =()=> async dispatch=>{

    dispatch({ type: 'GET_HANDICRAFT_REQUEST'})

    try {
        const response = await axios.get('/api/handicrafy/getallHandicraft')
        console.log(response);
        dispatch({ type:'GET_HANDICRAFT_SUCCESS', payload: response.data})
   
    } catch (error) {
        dispatch({type:'GET_HANDICRAFT_FAILED' , payload: error})
    }
}


export const getHandicraftById =(handicraftid)=> async dispatch=>{

    dispatch({ type: 'GET_HANDICRAFTBYID_REQUEST'})

    try {
        const response = await axios.post('/api/handicrafy/gethandicraftbyid', {handicraftid})
        console.log(response);
        dispatch({ type:'GET_HANDICRAFTBYID_SUCCESS', payload: response.data})
    } catch (error) {
        dispatch({type:'GET_HANDICRAFTBYID_FAILED' , payload: error})
    }
}

export const filterHandicraft =(searchkey, category) => async dispatch=>{

    var filteredHandicraft
    dispatch({ type: 'GET_HANDICRAFT_REQUEST'})

    try {
        const response = await axios.get('/api/handicrafy/getallHandicraft')
        filteredHandicraft = response.data.filter(handicraft=>handicraft.name.toLowerCase().includes(searchkey))

        if(category!='all')
        {
            filteredHandicraft = response.data.filter(handicraft=>handicraft.category.toLowerCase()==category)

        }
        dispatch({ type:'GET_HANDICRAFT_SUCCESS', payload: filteredHandicraft})
    } catch (error) {
        dispatch({type:'GET_HANDICRAFT_FAILED' , payload: error})
    }
}

export const addHandicraft=(handicraft)=> async dispatch=>{
    dispatch({ type:'ADD_HANDICRAFT_REQUEST'})

    try{
        const response = await axios.post('/api/handicrafy/addhandicraft', {handicraft})
        console.log(response);
        dispatch({type : 'ADD_HANDICRAFT_SUCCESS'})
    } catch (error){
        dispatch({type: 'ADD_HANDICRAFT_FAILED', payload:error})
    }

}

export const editHandicraft=(editedhandicraft)=> async dispatch=>{
    dispatch({ type:'EDIT_HANDICRAFT_REQUEST'})

    try{
        const response = await axios.post('/api/handicrafy/edithandicraft ', {editedhandicraft})
        console.log(response);
        dispatch({type : 'EDIT_HANDICRAFT_SUCCESS'})
        window.location.href='/admin/handicraftlist'
    } catch (error){
        dispatch({type: 'EDIT_HANDICRAFT_FAILED', payload:error})
    }

}

export const deleteHandicraft=(handicraftid)=>async dispatch=>{
    try {
        const response = await axios.post('/api/handicrafy/deletehandicraft',{handicraftid})
        alert('Handicraft Deleted Successfully')
        console.log(response);
        window.location.reload()
    } catch (error) {
        alert('something Went wrong')
        console.log(error);
    }
}