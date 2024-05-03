
import React from "react";
import CustomNavbar from "@/component/navbar/page";
import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

//create a folder inside src/app named register
// create a file page.js inside it and write following code:
const Register = () => {
    return (

          <div>
      <CustomNavbar chocolate="kitkat"/>
      <div className="flex h-screen justify-center items-center">
        <div className='border border-black m-7 w-72 p-4'>
        <Input type="name" label="Full Name" placeholder="Enter your Username" /><br/> <br/>
        <Input type="email" label="Email" placeholder="Enter your email" defaultValue="aasis@gmail.com" /><br/>
          <Input type="password" label="Password" placeholder="Enter your password" /><br/>
           
          <Button color="primary">
      Sign in
    </Button>
    
         <br/>
         </div>
          </div>
      </div>
      
    )
  }
  
  export default Register
  