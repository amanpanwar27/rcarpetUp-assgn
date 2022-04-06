import React, { useState } from "react";
import styled from "styled-components";

import AddedTask from "./AddedTask"
const TaskBox = ()=>{
    const [taskslist,settasklist] = useState([]);
    const [showtaskinput,setshowtaskinput] = useState(true);
    
    const [taskvalue,settaskvalue] = useState("");
    const addtaskclickhandler = ()=>{
        fetch("http://localhost:8000/addtask",{
            method:"POST",
            mode:"no-cors",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                taskvalue:taskvalue
            })
        }).then(res=>res.json()).then((data)=>console.log(data)).
        catch((err)=>console.log(err));
    }
    return <div>
    <Container>
    <Header>
    <span>My Tasks</span>
    <span><img src="assets/options.png"/></span>
    </Header>
    {
        showtaskinput ? <AddEtask>
        <input type="text" placeholder="New Task" onChange={(e)=>settaskvalue(e.target.value)} />
        <span><img src="/assets/add.png" onClick={()=>{addtaskclickhandler()}}/></span>
        </AddEtask> : <AddTask>
        <span onClick={()=>setshowtaskinput(true)}><img src="/assets/add.png"></img></span>
        <span>Add a task</span>
        </AddTask>
    }
    <TaskList>
    <AddedTask/>
    </TaskList>
    </Container>
    
    </div>
}
const TaskList= styled.div`
width:100px;
height:50px;
`;
const AddEtask = styled.div`
margin-top:15px;
margin-bottom:15px;
display:flex;
flex-direction:row;
justify-content:space-between;
input{
    margin-left:5px;
    font-size:15px;
    margin-bottom:5px;
    color:grey;
}
span:last-child{
    img{
        width:25px;
        height:25px;
        margin-right:5px;
        cursor:pointer;
    }
}
`;
const AddTask = styled.div`
margin-top:15px;
margin-bottom:15px;
display:flex;
flex-direction:row;
justify-content:space-between;
span:first-child{
    img{
        width:25px;
        height:25px;
        margin-left:5px;
    }
}
span:last-child{
    margin-right:15px;
    font-size:15px;
    margin-top:5px;
    color:#1C437C;
}

`;
const Header = styled.div`
&>span>img{
    width:30px;
    height:30px;
}
display:flex;
    flex-direction:row;
    justify-content:space-between;
    span{
        margin-top:10px;
    }
    span:first-child{
        margin-top:15px;
        margin-left:5px;
        font-size:18px;
        color:#1C437C;
    }
`;
const Container = styled.div`
    width:250px;
    height:auto;
    border:1px solid #1C437C;
    border-radius:2px;
`;
export default TaskBox;