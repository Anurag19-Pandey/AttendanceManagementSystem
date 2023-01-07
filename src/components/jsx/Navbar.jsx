import React from 'react'
import "../styles/NavbarStyles.css";
const Navbar = () => {
  return (
    <div className='navbar_container'>
       <div className='app_logo'>
       <img className='logo_image' src="https://www.hr2eazy.com/images/features-icon/attendance/customizable-Attendance.png"/> 
       </div>
       <div className='app_name'>
           <h2 className='logo_name'>Attendance<span className='logo_dot'>.</span></h2>
       </div>
    </div>
  )
}

export default Navbar