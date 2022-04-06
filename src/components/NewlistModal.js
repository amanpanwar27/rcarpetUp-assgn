import React, { useState } from "react";
import styled from "styled-components";
const NewlistModal = (props)=>{
    const [listname,setlistname] = useState("");
    const [listid,setlistid] = useState("");
    const clickhandler = async()=>{
        
        const bodydata = {
            "title":listname
        }
        //   var data = new FormData();
        //   data.append( "json", JSON.stringify( bodydata ) );
        console.log("*****listname:",bodydata);
        await fetch("http://localhost:8000/addlist",{
            method:"POST",
            mode:"cors",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(bodydata)
        }).then(res=>res.json()).then((data)=>{
            console.log(data);
            setlistid(data.id);
            props.setshowlistmodal(false);
        }).
        catch((err)=>console.log(err));
    }
    return <div>
    <Container>
    <Modal>
    <img src="assets/close.png" onClick={()=>props.setshowlistmodal(false)}/>
    <div>
    <input type="text" placeholder="New List" onChange={(e)=>setlistname(e.target.value)}/>
    <img src="assets/add.png" onClick={()=>{clickhandler()}}/>
    </div>
    </Modal>
    </Container>
    </div>
}
const Container = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
background-color:rgba(0,0,0,0.8);
z-index:1000;
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
height:100px;
background-color:white;
margin:auto;
margin-top:25vh;
div{
    margin-top:20px;
    display:flex;
    flex-direction:row;
    input{
        background:#F1F5FB;
        width:250px;
        height:40px;
        margin-left:20px;
        padding-left:10px;
    }
    img{
        margin-left:-350px;
        width:40px;
        height:40px;
        margin-top:-10px;
        cursor:pointer;
    }
}
`;
export default NewlistModal;