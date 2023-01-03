import {useState}from 'react'
import { AddCategory, GifGrid } from './components';


export const GiffExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
  const onAddCategories =   ( newCategory) => {

    if (categories.includes(newCategory)) return;

    
       //categories.push(newCategory) 
         setCategories([newCategory,...categories]) 
     // setCategories(cat=> [...cat,'valoran'])
  }
  
    return (
    <>
   
    <h1>Giff Expert App</h1>
    
    <AddCategory     
    onNewCategory ={ (value) =>onAddCategories(value)}
    /> 
    
    
        {categories.map((category) =>(          
              <GifGrid
               key={category} 
               category={category}
               />
            ))
        
        }
       
    
     </>
  )
}

