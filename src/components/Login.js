import React from "react";
import Styled from "styled-components"
const Login = ()=>{
    const clickhandler = ()=>{
        window.location.href = "/tasks";
    }
    return <div>
    <Container>
    <FormContainer>
    <div>Log in!</div>
    <Form>
    <span>Email Address</span>
    <input type="text" placeholder="Enter Email"/>
    <span>Password</span>
    <input type="text" placeholder="Enter Password"/>
    <Others>
    <div>
    <input type="checkbox"/>
    <span>Remember me</span>
    </div>
    <a href="#">Forgot Password?</a>
    </Others>
    <button type="button" onClick={()=>clickhandler()}>Log in</button>
    </Form>
    </FormContainer>
    </Container>
    </div>
}
const Others = Styled.div`
width:300px;
display:flex;
margin:auto;
flex-direction:row;
margin-top:-20px;
justify-content:space-between;
&>div{
    margin-top:5px;
    display:flex;
    flex-direction:row;
    margin-left:-105px;
    width:500px;
    input{
        width:15px;
        height:15px;
    }
    span{
        color:#FFFFFF;
        margin-left:5px;
        font-size:15px;
        white-space: nowrap;
        margin-top:-30px;
    }
}
gap:270px;
a{
    color:#FFFFFF;
    font-size:15px;
    text-decoration:none;
    margin-top:5px;
    white-space: nowrap;
}

`;
const Container = Styled.div`
width:100vw;
height:100vh;
background-color:#1C437C;
position:absolute;
`;
const Form = Styled.form`
display:flex;
gap:20px;
flex-direction:column;
justify-content:space-between;
height:auto;
span{
    margin:auto;
    position:relative;
    top:30px;
    padding-left:2px;
    padding-right:5px;
    color:#FFFFFF;
    background-color:#1C437C;
    white-space: nowrap;
}
input{
    background:transparent;
    border:0.5px solid #FFFFFF;
    width:500px;
    height:60px;
    margin:auto;
    border-radius:2px;
    padding-left:10px;
    color:#FFFFFF;
}
button{
    width:200px;
    margin:auto;
    height:50px;
    border-radius:2px;
    margin-top:50px;
    color:#1C437C;
    font-weight:bold;
}
`;
const FormContainer = Styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
/* border:2px solid white; */
margin-top:20vh;
height:500px;
&>div{
    color:#FFFFFF;
    margin:auto;
    font-size:35px;
    font-weight:bold;
    margin-bottom:50px;
}
`;


export default Login;