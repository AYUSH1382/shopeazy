export const getAllHandicraftReducer = (state={handicraft : []}, action)=>{
    switch (action.type)
    {
        case 'GET_HANDICRAFT_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_HANDICRAFT_SUCCESS' : return{
            loading : false,
            handicraft : action.payload
        }
        case 'GET_HANDICRAFT_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
}

export const getHandicraftByIdReducer = (state={}, action)=>{
    switch (action.type)
    {
        case 'GET_HANDICRAFTBYID_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'GET_HANDICRAFTBYID_SUCCESS' : return{
            loading : false,
             handicraft : action.payload
        }
        case 'GET_HANDICRAFTBYID_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
}

export const addHandicraftReducer = (state={}, action)=>{
    switch (action.type)
    {
        case 'ADD_HANDICRAFT_REQUEST' : return{
            loading : true,
            ...state
        }
        case 'ADD_HANDICRAFT_SUCCESS' : return{
            loading : false,
            success: true
        }
        case 'ADD_HANDICRAFT_FAILED' : return{
            error : action.payload,
            loading : false
        }
        default : return state
    }
}

export const editHandicraftReducer = (state={}, action)=>{
    switch (action.type)
    {
        case 'EDIT_HANDICRAFT_REQUEST' : return{
            editloading : true,
            ...state
        }
        case 'EDIT_HANDICRAFT_SUCCESS' : return{
            editloading : false,
            editsuccess: true
        }
        case 'EDIT_HANDICRAFT_FAILED' : return{
            editerror : action.payload,
            editloading : false
        }
        default : return state
    }
}