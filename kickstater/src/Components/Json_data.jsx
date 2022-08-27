import { useState } from "react";
import axios from "axios"


const intState={
  image:"",
  title:"",
  discription:"",
  Auther:""
}
const JsonData=()=>{
   const [FormData,setFormdata]=useState(intState)
   
 


   const handleChange=(e)=>{
    const {name,value}=e.target
    setFormdata((prev)=>({...prev,[name]:value}));
   }

   const onSubmit=async()=>{
   
    try{
      await axios.post(`http://localhost:3333/data2`,FormData)
    }
    catch(err){
      console.log("something is wrong")
    }
    console.log(FormData)
   }
   const {image,title,discription,Auther} =FormData

  
    return(
        <>
        <form style={{widht:"400px",textAlign:'center'}} onSubmit={onSubmit}>
          <input style={{width:'300px',heigth:"50px",marginBottom:"10px"}}
           onChange={handleChange} type="text" value={image} name="image" 
           placeholder="image link" /><br />
          <input style={{width:'300px',heigth:"50px",marginBottom:"10px"}}  onChange={handleChange} type="text" value={title} name="title" placeholder="title" /><br />
          <input style={{width:'300px',heigth:"50px",marginBottom:"10px"}}  onChange={handleChange} type="text" value={discription} name="discription" placeholder="discription"/><br />
          <input style={{width:'300px',heigth:"50px",marginBottom:"10px"}}  onChange={handleChange} type="text" value={Auther} name="Auther" placeholder="Auther"/><br />
          <input style={{width:'300px',heigth:"50px",marginBottom:"10px"}}  onChange={handleChange} type="submit" />
        </form> 


        </>
    )
}


export default JsonData;