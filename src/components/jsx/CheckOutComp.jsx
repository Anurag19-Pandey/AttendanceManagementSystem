import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/CheckOutCompStyles.css";

const CheckOutComp = () => {
    const navigate = useNavigate() ;
    const dt = new Date();
    const month = dt.getMonth() + 1;
  return (
    <div className='checkout_container'>
        <div className="checkout_info">
         <p className='checkout_title'>You have Checked-Out</p> 
         <p className='checkout_time_date'>{dt.getDate() + "-" + month + "-" + dt.getFullYear()} {dt.getHours() + "h  : " + dt.getMinutes()+"m"}</p> 
            <div className='checkout_to_login'>
              <button onClick={()=>navigate('/')}>Login</button>
            </div>
      </div>
    </div>
  )
}

export default CheckOutComp