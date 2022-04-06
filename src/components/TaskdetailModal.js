import React from "react";
import styled from "styled-components";
const TaskDetailModal = (props)=>{
    return <div>
    <Container>
    <Modal>
    <img src="assets/close.png" onClick={()=>props.setshowModal(false)}/>
    <Form>
    <div>
    <span>{props.taskvalue}</span>
    <textarea placeholder="Add details"></textarea>
    </div>
    <Extra>
    <span>Add date</span>
    <span>Move to another list</span>
    </Extra>
    </Form>
    </Modal>
    </Container>
    </div>
}
const Extra = styled.div`
margin-top:30px;
color:#1C437C;
`
const Form = styled.form`
div{
    display:flex;
    color:#1C437C;
    flex-direction:column;
    margin-left:10px;
    width:100%;
    gap:10px;
    textarea{
        background-color:#F1F5FB;
        height:100px;
        width:370px !important;
        padding-left:10px;
        padding-top:10px;
    }
}
`;
const Modal = styled.div`
img{
    width:20px;
    height:20px;
    position:relative;
    left:370px;
    top:10px;
    cursor:pointer;
}
width:400px;
height:300px;
background-color:white;
margin:auto;
margin-top:25vh;
`;
const Container = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0,0,0,0.8);
z-index:1000;
`;
export default TaskDetailModal;