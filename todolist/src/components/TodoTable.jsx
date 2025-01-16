/* eslint-disable react/prop-types */
function TodoTable({items, onEdit, onDelete}){
    return(
        <>
            <table border={1} className="todo-table">
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Due Date</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item,index) => (
                        <tr key={index}>
                            <td>
                                <img src={item.picture} alt={item.name} style={{width:'50px',height:'50px'}} />
                            </td>
                            <td>{item.name}</td>
                            <td>{item.date}</td>
                            <td>{item.dueDate}</td>
                            <td>
                                <button onClick={() => onEdit(item)}>Edit</button>
                                <button onClick={() => onDelete(item)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default TodoTable;