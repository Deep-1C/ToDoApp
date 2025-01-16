// import React from "react";
import { useEffect, useState } from "react";
// eslint-disable-next-line react/prop-types
function TodoForm({ onAddItem, onEditItem, editingItem }){
    const [form,setForm] = useState({
        name:'',
        picture: '',
        date: '',
        dueDate: ''
    })

    //populate form when editingItem changes
    useEffect(()=>{
        if(editingItem){
            setForm(editingItem);
        }else{
            setForm({name:'',picture:'',date:'',dueDate:''});
        }
    },[editingItem])

    // handle input change
    const handleChange = (e) => {
        const {name,value} = e.target;
        setForm({...form,[name]:value})
    }
    //handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!form.name || !form.picture || !form.date || !form.dueDate){
            alert('please fill out fields!');
            return;
        }
        if(editingItem){
            onEditItem(form);
        }else{
            onAddItem(form);
        }
        // onAddItem(form);
        setForm({name:'',picture:'',date:'',dueDate:''});
    }
    return(
        <>
            <form onSubmit={handleSubmit} className="todo-form">
                <div>
                    <label>Item Name:</label>
                    <input 
                        type="text"
                        name="name"
                        placeholder="Enter Item Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Item Picture(URL):</label>
                    <input 
                        type="text"
                        name="picture"
                        placeholder="Enter Picture URl"
                        value={form.picture}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Item Date:</label>
                    <input 
                        type="date"
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Item Due Date:</label>
                    <input 
                        type="date"
                        name="dueDate"
                        placeholder="Enter Item Name"
                        value={form.dueDate}
                        onChange={handleChange}
                    />
                </div>
                {/* <button type="submit">Add Item</button> */}
                <button type="submit">{editingItem ? 'Update Item' : 'Add Item'}</button>
            </form>
        </>
    )
}
export default TodoForm;