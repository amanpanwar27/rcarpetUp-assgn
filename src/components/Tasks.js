import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import TaskBox from "./TaskBox";
import NewlistModal from "./NewlistModal";
const Tasks = ()=>{
    const [showlistmodal,setshowlistmodal] = useState(false);
    return <div>
    
    <Navbar/>
    <TaskContainer>
    <TaskBox/>
    </TaskContainer>
    <Add>
    <img src="assets/add.png" onClick={()=>setshowlistmodal(true)}/>
    </Add>
    {showlistmodal?<NewlistModal setshowlistmodal={setshowlistmodal}/>:<div/>}
    </div>
}
const TaskContainer = styled.div`
position:absolute;
top:150px;
left:10px;
`;
const Add = styled.div`
img{
    width:80px;
    height:80px;
    position:absolute;
    left:90vw;
    top:80vh;
    cursor:pointer;
}
`
export default Tasks;