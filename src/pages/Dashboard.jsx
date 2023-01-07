import React,{useState,useEffect} from 'react'
import { useLocation} from 'react-router-dom'
import DashBoardInfo from '../components/jsx/DashBoardInfo'
import Navbar from '../components/jsx/Navbar';
import students from '../students';

const Dashboard = () => {
  
  const [studentImage,setStudentImage] = useState("") ;
  const location = useLocation();
  
  const name = location.state.name ;
  const count = location.state.count ;
  const rollno = location.state.rollno ;
 
  useEffect(()=>{
    students.find((stu) => {
       if(stu.rollno === rollno)
          setStudentImage(stu.student_image);
    })
  },[])
  return (
    <div>
      <Navbar/>
       <DashBoardInfo rollno={rollno} name={name} count={count} studentImage={studentImage}/>
    </div>
  )
}

export default Dashboard