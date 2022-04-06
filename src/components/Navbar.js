import React from "react";
import styled from "styled-components";
import { useEffect,useState} from "react";
const Navbar = ()=>{
    const [img,setimg] = useState("");
    useEffect(()=>{
        fetch("https://picsum.photos/id/55/info",
        {
            method:"GET",
            mode:"cors",
            headers:{
                "Content-Type":"application/json",
            }
        }
        ).then((res)=>res.json()).then((data)=>{
            console.log(data);
            setimg(data.download_url);
        }).catch((err)=>console.log(err));
    },[]);
    console.log("&&&&&&&&&&&&&----- ",img);
    return <div>
    <Container>
    <h1>TasksBoard</h1>
    <div><img src={img}/></div>
    </Container>
    </div>
}
const Container = styled.div`
width:100vw;
height:100px;
background-color:#1C437C;
position:absolute;
display:flex;
flex-direction:row;
justify-content:space-between;
h1{
    color:#FFFFFF;
    font-size:25px;
    margin-left:50px;
    margin-top:30px;
}
div{
    /* margin-left:95vw; */
    top:20px;
    width:60px;
    height:60px;
    background-color:white;
    margin-top:15px;
    margin-right:20px;
    border-radius:50%;
    img{
        top:15px;
        left:15px;
        height:60px;
        width:60px;
        border-radius:50%;
    }
}
`;
export default Navbar;