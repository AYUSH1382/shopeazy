import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Link, Route, Switch } from 'react-router-dom';
import Addhandicraft from './Addhandicraft';
import Orderslist from './Orderslist';
import Handicraftlist from './Handicraftlist';
import Userslist from './Userslist';
import Edithandicraft from './Edithandicraft';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Adminscreen() {

    AOS.init()
    const userstate = useSelector((state) => state.loginReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(()=>{
        if(!currentUser.isAdmin)
        {
            window.location.href ='/'
        }
    },[])
    return (
        <div>
            <div className="row justify-content-center p-3"  >

                <div className="col-md-10">
                <h2 style={{fontSize:'35px'}}>Admin Panel</h2>
            
            <ul className='adminfunction'>
                <li>
                    <Link to={'/admin/userslist'}>Users List</Link>
                </li>
                <li><Link to={'/admin/handicraftlist'}>Product List</Link></li>
                <li><Link to={'/admin/addhandicraft'}>Add new Product</Link></li>
                <li><Link to={'/admin/orderslist'}>Orders List</Link></li>
                
            </ul>
            
            <Switch>
            <Route path="/admin/" component={Userslist} exact/>
                <Route path="/admin/userslist" component={Userslist} exact/>
                <Route path="/admin/orderslist" component={Orderslist} exact/>
                <Route path="/admin/handicraftlist" component={Handicraftlist} exact/>
                <Route path="/admin/addhandicraft" component={Addhandicraft} exact/>
                <Route path="/admin/edithandicraft/:handicraftid" component={Edithandicraft} exact/>
            </Switch>



                </div>
            </div>
            
        </div>
    )
}
