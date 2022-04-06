import { useState ,React} from "react";
import styled from "styled-components";
import TaskDetailModal from "./TaskdetailModal";

const AddedTask = ()=>{
    const [showModal ,setshowModal] = useState(false);
    return<div>
    <Container>
    <span><img src="/assets/oval.png"/></span>
    <span className="tasktext">task 1</span>
    <span><img src="/assets/draw.png" onClick={()=>setshowModal(true)}/></span>
    </Container>
    {showModal ? <TaskDetailModal setshowModal = {setshowModal}/> : <div/>}
    </div>
}
const Container = styled.div`
.tasktext{
    margin-top:5px;
    font-size:18px;
    margin-right:100px;
    color:#1C437C;
}
width:250px;
display:flex;
flex-direction:row;
justify-content:space-between;
span:first-child{
    img{
        width:30px;
        height:30px;
        margin-left:5px;
    }
}
span:last-child{
    img{
        width:20px;
        height:20px;
        margin-right:10px;
        margin-top:5px;
    }
}
`;
export default AddedTask;