import React from 'react';
import { useNavigate } from 'react-router-dom';
import students from '../../students';
import "../styles/DashBoardInfoStyles.css";

const DashBoardInfo = ({rollno,name,count,studentImage}) => {
    const navigate = useNavigate() ;
    const dt = new Date();
    const month = dt.getMonth() + 1;

    const checkOut = ()=>{
        navigate("/checkout")
    }
  return (
    <div className='dashboardinfo_container'>
        <div className='student_present_timing'>
          <div className='student_profile'>
          <p className='student_profile_text'>Student Profile</p>
          <img className='student_profile_image' src={studentImage} alt="student_image" />
          <p className='student_rollno'>Roll No : {rollno}</p>
          <p className='student_name'>Name : {name}</p>
          </div>
        <hr className="chekin_open"/>
       <p className='checkin_title'> Check-In Date and Time</p>
       <hr className="chekin_close"/>
        <p className='checkin_details'>{dt.getDate() + "-" + month + "-" + dt.getFullYear()} {dt.getHours() + "h  : " + dt.getMinutes()+"m"}</p> 
          <div className='checkout_btn'>
          <button onClick={checkOut}>Check Out</button>
          </div>
         <hr />
         <div className='student_present_now'>
           Total Student Present - {count} / {students.length}
        </div>
        </div>
        <div className='student_info'>
          <div>
          <p className='welcome_msg'>Welcome to your Dashboard</p>   
          </div>
        </div>
 
    </div>
  )
}

export default DashBoardInfo