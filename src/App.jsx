// import React from 'react'
import './App.css'
import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoTable from './components/TodoTable';
function App() {
  const [items,setItems] = useState(() => {
      //Retrive items from local storage or intialize as an empty array
      const savedItems = localStorage.getItem('todoItems');
      return savedItems ? JSON.parse(savedItems) : [];
  }); //state to store items


  //create a state to track edited items
  const [editingItem,setEditingItem] = useState(null);



  //Store items in local storage whenever they change
  useEffect(()=>{
    localStorage.setItem('todoItems',JSON.stringify(items));
  },[items])


  //Remove expire item but keep them in local storage
  // useEffect(()=>{
  //   const now = new Date();
  //   const validItems = items.filter(item => new Date(item.dueDate) >= now);
  //   if(validItems.length !== items.length){
  //     setItems(validItems);
  //   }
  // },[items])
  const nonExpiredItems = items.filter(item => new Date(item.dueDate) >= new Date());

  // sort the item based on due date
  const sortedItems = nonExpiredItems.sort((a,b) => new Date(a.dueDate) - new Date(b.dueDate));


  // console.log(items);
  //handle form submission
  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  }

  //handle editted item
  const handleEditItem = (updatedItem) => {
    setItems(items.map(item => item === editingItem ? updatedItem : item));
  }

  //handle item deletion
  const handleDeleteItem = (itemtoDelete) => {
    setItems(items.filter(item => item !== itemtoDelete))
  }
  return (
    <>

      <div className="App">
        <h1>To-Do List</h1>

        {/* form to add new items  */}
        <TodoForm onAddItem = {handleAddItem}
                  onEditItem = {handleEditItem}
                  editingItem={editingItem}
        />

        <TodoTable /*items={items}*/ items={sortedItems} onEdit={setEditingItem} onDelete={handleDeleteItem}/>
      </div>
      
    </>
  )
}

export default App
