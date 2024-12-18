 import React from 'react'
 import categories from './utility/data'
 import CategoriesCard from './components/CategoriesCard'
 const App = () => {
   return (
     <div>
      <CategoriesCard categories={categories} />
     </div>
   )
 }
 
 export default App