import React from 'react'
import Post from '../Components/Post';
import {getSavedRecipe} from "../Api/recipeApi";
import { useLoaderData } from 'react-router-dom';

export const loader = async()=>{
 return await getSavedRecipe();
}

const SaveRecipe = () => {
  const savedRecipe = useLoaderData()

  const displayRecipe = savedRecipe?.map((recipe,index) => (  
    <Post recipe = {recipe} key={index}/>
  ))

  if(savedRecipe.length === 0){
    return (
      <h1>No Saved Recipe found</h1>
    )
  }

  return (
    <div className='post-wrapper'>
      {displayRecipe}
    </div>
  )
}

export default SaveRecipe