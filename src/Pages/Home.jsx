import React from 'react'
import Post from '../Components/Post';
import {getHomeData,get_ids_of_savedData} from "../Api/recipeApi";
import { useLoaderData} from 'react-router-dom';



export const loader = async()=>{
  const datas = {
  getHomeData: await getHomeData(),
  getSavedIds:await get_ids_of_savedData()
 
}
 
return datas;
}

const Home = () => {
const {
  getHomeData:allRecipe,
  getSavedIds:savedRecipe_Id
} = useLoaderData();


  const displayRecipe = allRecipe?.map((recipe,index) => (  
    <Post 
    key={index} 
    recipe = {recipe} 
    savedRecipe_Id={savedRecipe_Id} 
    saveBtn={true}/>
  ))

  if(allRecipe.length === 0){
    return (
      <h1>No Posts are found</h1>
    )
  }

  return (
    <>
    <div className='post-wrapper'>
    {displayRecipe}
    </div>
    
    </>
   
  )
}

export default Home;














