// import logo from './logo.svg';
import React, {useState} from 'react';
import styled from "styled-components";
import './App.css';


const Container = styled.div`
display:flex;
align-items:clearInterval;
flex-direction:column;
align-items:center;
justify-items:center;
margin-left:10px;
`;
const Button = styled.button`
  display:inline-block;
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  height: 30px;
  width: 50px;
  border-radius: 2px;
  cursor: pointer;
  &:hover{
    cursor:pointer;
  }
  margin-left:10px;
`;

const Text = styled.input`
  border: 2px solid #000;
  align-items:center;
  // margin-right:17px;
`;
const TaskCount = styled.span`
  margin: 10px;
  text-size:20px;
  // margin-top:20px;
`;
const Tasks = styled.div`
`;
const LIST = styled.li`
    listStyle:"none";
    text-decoration: "line-through";

`;
const App = () => {
  const [input, setInput] = useState("");
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [todoList, setTodoList] = useState([]);
const handleClick = () => {
    const id = todoList.length + 1;
    setTodoList((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        complete: false,
      }
    ]);
    setInput("");
  };
  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id === id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            // setCompletedTaskCount(completedTaskCount - 1);
        }
item = { ...task, complete: !task.complete };
      } else item = { ...task };
return item;
    });
    setTodoList(list);
  };
return (
    <Container>
      <div>
          <h1>Todo List</h1>
          <Text value={input} onInput={(e) =>setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleClick();
            }
          }}
          />
          
          <Button onClick={() => handleClick()}>Add</Button>
        <Tasks>
          <TaskCount>
            <b>Pending Tasks</b> {todoList.length - completedTaskCount}
          </TaskCount>
        
        </Tasks>
        <div>
          <ul>
            {todoList.map((todo) => {
              return (
                <LIST
                  complete = {todo.complete}
                  id={todo.id}
                  onClick={() => handleComplete(todo.id)}
                  style={{
                    listStyle: "none",
                    textDecoration: todo.complete && "line-through",
                  }}
                >
                  {todo.task}
                </LIST>
              );
            })}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default App;
