import React from 'react'
import Styled from "styled-components"
export default function Signup() {
    const onclickhandler = ()=>{
        window.location.href="/login"
    }
  return <div>
  <Container>
  <FormContainer>
  <div>Sign up</div>
  <Form>
  <span>Username</span>
  <input type="text" placeholder="Username"/>
  <span>Email Address</span>
  <input type="text" placeholder="Email Address"/>
  <span>Password</span>
  <input type="text" placeholder="Password"/>
  <Others>
  <div>
  <input type="checkbox"/>
  <span>I accept the terms & conditions</span>
  </div>
  </Others>
  <button type="button" onClick={(e)=>onclickhandler(e)}>Sign up</button>
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
justify-content:flex-start;
&>div{
    margin-top:5px;
    display:flex;
    flex-direction:row;
    margin-left:-165px;
    width:500px;
    input{
        width:15px;
        height:15px;
    }
    span{
        color:#FFFFFF;
        font-size:15px;
        white-space: nowrap;
        margin-top:-30px;
        position:relative;
        right:115px;
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
