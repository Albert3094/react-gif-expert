import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if (categories.includes(newCategory)) return;

    setCategories( [newCategory, ...categories ] );
  }
  
  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>

      {/* input */}
      <AddCategory 
        onNewCategory={value => onAddCategory(value)}
      ></AddCategory>

      {/* listado de gifs */}
      { 
        categories.map( 
          category => (
            <GifGrid key={category} category={category}></GifGrid>
          )
        ) 
      }


    </>
  )
}
