import React, {useState} from 'react'
import {FormControl, FormLabel,Input, InputRightElement,InputGroup, 
    VStack, Button} from "@chakra-ui/react"


const SignUp=()=>{
    const [show, setShow] = useState(false);
    const [name, setName]= useState();
    const [email, setEmail]= useState();
    const [password, setPassword]=useState();
    const [confirmpassword, setConfirmpassword]=useState();
    const [pic, setPic]= useState();

    const handleClick=(e) => setShow(!show); 

    const postDetails=(pics)=>{};
    const submitHandler=()=>{};

    return (
        
        <VStack spacing="5px" color="black">
             <FormControl id="first-name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder="Enter Your Name"
                    onChange={(e)=>setName(e.target.value)}/>
             </FormControl>
             <FormControl id="email" isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Enter Your Email"
                    onChange={(e)=>setEmail(e.target.value)}/>
             </FormControl>
              <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                    <Input 
                    type={show ? "text" : "password"}
                    placeholder="Enter Your Password"
                    onChange={(e)=>setPassword(e.target.value)}/>

                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide":"Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
             </FormControl>

              <FormControl id="confirm password" isRequired>
                    <FormLabel>Confirm Password</FormLabel>
                    <InputGroup>
                    <Input 
                    type={show ? "text" : "password"}
                    placeholder="Enter Your Password"
                    onChange={(e)=>setPassword(e.target.value)}/>

                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide":"Show"}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
             </FormControl>


              <FormControl id="pic" isRequired>
                    <FormLabel>Upload your Picture</FormLabel>
                    <Input 
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e)=>postDetails(e.target.value)}/>
             </FormControl>

             
             <Button colorScheme="blue" width="100%" style={{marginTop:15}} 
             onClick={submitHandler}>
                   Sign Up         
            </Button>
        </VStack>
    )
}

export default SignUp;
