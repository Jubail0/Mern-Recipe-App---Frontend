import axios from 'axios';
import React from 'react'

import { useCookies } from 'react-cookie';
import {saveRecipe} from "../Api/recipeApi"

const Post = ({recipe,savedRecipe_Id,saveBtn}) => {
   const [cookies, setCookies] = useCookies(["access_token"]); 

  const [isSaved,setIsSaved] = React.useState(false);
  
  const {_id,name,imgUrl, description, ingredients} = recipe;

  const handleSaveRecipe = async()=>{

    if(!cookies.access_token){
     return alert("Please Login")
   }
   
   const res = await saveRecipe(_id,cookies) 
   if(res) setIsSaved(true)
   else setIsSaved(false)
  }

   
  
  return (
    <div className='post'>
    <h2>{name}</h2>
   {saveBtn && <button className='btn save-btn' onClick={handleSaveRecipe}>{isSaved || savedRecipe_Id?.includes(_id) ? "Saved" : "Save"}</button>}
    <div className='post-description'>
        <span>
           {description}
        </span>
    </div>
    <div className='img-container'>
      <img className='post-img' src={imgUrl} alt='post'/>        
    </div>
    <div className='post-ingredients'>
      {
        ingredients?.map((ingre,index)=>(
          <span key={index}>{ingre}</span>
        ))
      }
    </div>
    <hr style={{marginTop:"1.2rem", color:'grey'}}/>
   </div>
  )
}

export default Post