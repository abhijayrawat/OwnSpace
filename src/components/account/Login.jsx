import { Box, TextField, Button, styled ,Typography} from "@mui/material";
import { useState } from "react";


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgba(0, 0, 0, 0.2);
`;

const LoginButton = styled(Button)`
    text-transform:none;
    // background-color: #3f51b5;
    text-color: white;
    height:48px;
    border-radius: 2px;
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);

`
const SignupButton = styled(Button)`
text-transform:none;
    background-color: #white;
    text-color: #blue;
    height:48px;
    border-radius: 2px;
    box-shadow:0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.2),0 1px 5px 0 rgba(0,0,0,0.12);
`

const Text= styled(Typography)({
    // color: "black",
    fontSize: "15px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.54)",

})

const Image = styled("img")({
  width: 200,
  margin: "auto",
  display: "flex",
  padding: "50px",
});

const Wrapper= styled(Box)({
    padding: "20px 40px",
    display: "flex",
    flex:1,
    flexDirection: "column",
    gap: "20px",
    
    })

const Login = () => {
  const imageURL =
    "data:image/png;base64,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";
 const[account,toggleAccount]=useState('login');

 const toggleSignup=()=>{
     account==='signup'?toggleAccount('login'):toggleAccount('signup')
 }
 const LoginSignup=()=>{
    account==='login'?toggleAccount('signup'):toggleAccount('login')
}
 
    return (
    <Component>
      <Box>
        <Image src={imageURL} alt="logo" />
        {
            account==='login'?
        <Wrapper>
          <TextField variant="standard" label="Enter username"/>
          <TextField variant="standard" label="Enter password"/>
          <LoginButton variant="contained">Login</LoginButton>
          <Text style={{textAlign:'center'}}>OR</Text>
          <SignupButton onClick={toggleSignup}> Create an account</SignupButton>
        </Wrapper>
        :
        <Wrapper>
          <TextField variant="standard" label="Enter Name"/>

          <TextField variant="standard" label="Enter username"/>
          <TextField variant="standard" label="Enter password"/>
          <SignupButton variant="contained">Signup</SignupButton>
          <Text style={{textAlign:'center'}}>OR</Text>
          <LoginButton onClick={LoginSignup}>  Already have an account</LoginButton>
        </Wrapper>
        }
      </Box>
    </Component>
  );
};
export default Login;
