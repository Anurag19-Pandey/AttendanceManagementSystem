import React,{useState,useEffect} from 'react';
import students from "../../students" ;
import { useNavigate } from 'react-router-dom';
import "../styles/AttendanceFormStyles.css";
const AttendanceForm = () => {
    
    const navigate = useNavigate();

    const [student , setStudent] = useState({
        rollno:"",
        name : ""
    }) ;

    const [isSubmit , setIsSubmit] = useState(false) ;
    let [count , setCount] = useState(0) ;
    const [formErrors , setFormErrors] = useState({}) ;

    const submitForm = (e)=>{
        e.preventDefault() ;
        setFormErrors(validateForm()) ;
        setIsSubmit(true);
    }

    const validateForm = ()=>{
     
        const errors = {} ;

        if(student.name === ""){
            errors.name = "Name cannot be empty" ;
        } 

        if(student.rollno === ""){
            errors.rollno = "Roll No cannot be empty" ;
        } 

        if(!students.find((stu) => (stu.rollno === student.rollno && stu.name === student.name))){
            errors.others = "Invalid Credentials" ;
        }

        return errors ;
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit === true){
           setCount(count++) ;
           navigate('/dashboard', { state :{rollno:student.rollno , name: student.name , count : count }});
        }
        else{
            setIsSubmit(false) ;
        }
    },[formErrors])
    
  return (
    <>
    <div className='attendance_login_form_container'>
    <div className='attendanceform_container'>
        <div>
            <div className='login_app_logo_container'>
                <img className='login_app_logo' src="https://www.hr2eazy.com/images/features-icon/attendance/customizable-Attendance.png"/> 
            </div>
         <div className='login_app_title'>
         <h4 className='login_app_name'>Attendance<span className='login_logo_dot'>.</span></h4>
         </div>
        </div>
        <div className='login_form'>
        <form>
            <p className='errors'>{formErrors.others}</p>
        <div>
          <input name="rollno" placeholder="Roll No." onChange={(e)=>setStudent({...student , rollno : e.target.value})}/>
          <p className='errors'>{formErrors.rollno}</p>
        </div>    
        <div>
          <input name="name" placeholder="Name" onChange={(e)=>setStudent({...student , name : e.target.value})}/>
          <p className='errors'>{formErrors.name}</p>
        </div>
        <div className='login_btn'>
          <button onClick={(e)=>submitForm(e)}>Login</button>
        </div>
        </form>
        </div>
    </div>   
    </div>
    </>
  )
}

export default AttendanceForm

