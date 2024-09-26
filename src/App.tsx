import  {useState}  from "react";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

function App(){
    const [listTodo,setListTodo]=useState([]);
    let addList = (inputText:never)=>{
        if(inputText !== '')
        setListTodo([...listTodo,inputText]);
    }
    const deleteListitem = (key: any)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
return (
    <div className="main-container">
        <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listitem,i)=>{
            return (
                <Todolist key={i} index={i} item={listitem} deleteitem={deleteListitem}/>
            )
        })}

        </div>
    </div>
)
}

export default App;

