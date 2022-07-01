import React,{useState} from 'react'
import {Modal} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function HandMade({hand}) { 

    AOS.init({
   
    })

    const[quantity,setquantity] = useState(1)
    const[varient,setvarient] = useState('small')
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    function addtocart(){
        dispatch(addToCart(hand,quantity,varient))
    }

    return (
        
        <div 
        data-aos='zoom-in'
         className='shadow-lg p-3 mb-5 bg-white rounded'
            key={hand._id} 
                >
            {/* style={{margin:'100px'}}  className='m-4'  style={{margin:'50px'}}*/}
            <div onClick={handleShow}>
                <h1>
                    {hand.name}
                </h1>
                <img src={hand.image} className="image-fluid" style={{height:'200px', width:'200px'}} alt=""/>
            </div>
            <div className="flex-container">
                {/* <div className='w-100 m-1'>
                <p>Varients</p>
                <select className='form-control' value={varient} onChange={(e)=> {setvarient(e.target.value)}}>
                    {hand.varients.map(varient=>{
                        return <option value={varient}>{varient}</option>
                    })}
                </select>
                </div> */}
                <div className='w-100 m-1'>
                <p>Quantity</p>
                <select className='form-control' value={quantity} onChange={(e)=>{setquantity(e.target.value)}}>
                    {[...Array(5).keys()].map((x,i)=>{
                        return <option value={i+1}>{i+1}</option>
                    })}
                </select>
                </div>
            </div>

                <div className="flex-container">
                    <div className='m-1 w-100'>
                        <h1 className='mt-1'>Price : {hand.prices[0][varient]*quantity} Rs/-</h1>
                    </div>
                    <div className='m-1 w-100'>
                        <button className="btn btn-sm" onClick = {addtocart} >ADD TO CART</button>
                    </div>

                </div>



                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{hand.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={hand.image} className="img-fluid" style={{height:'400px'}}/>
                    <p>{hand.description}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn" onClick={handleClose}>CLOSE</button>
                </Modal.Footer>
                </Modal>
            
        </div>
    )
}
