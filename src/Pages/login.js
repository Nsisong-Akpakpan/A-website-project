import {Typography, Stack, TextField, Button } from "@mui/material";
function Login() {
    return(
        <div style ={{display:"flex", margin:"auto", flexDirection:"column", textAlign:"center", justifyContent:"center" }}>
            <Typography variant="h3">Login</Typography>
            <form style ={{display:"flex", margin:"auto", flexDirection:"column", textAlign:"center", justifyContent:"center" }}>
                <Stack spacing={4}>
                      <TextField
                      placeholder="Email Address"
                      label="Email Address"
                      type="text"
                      size="small"
                      />
                      
                    <TextField
                      placeholder="Password"
                      label="Password"
                      type="Password"
                      size="small"
                      />

                    <Stack direction="row" spacing={3} sx={{textAlign:"right", justifyContent:"right"}}>
                          <Typography variant="p">Forgot Password?</Typography>
                          <Typography variant="p">Reset it</Typography>
                      </Stack>
                    
                    

                    <Button sx={{textTransform:"none"}} variant="contained">Login</Button>
                    
                    <Stack direction="row" spacing={1} sx={{textAlign:"right", justifyContent:"right"}}>
                          <Typography variant="p">Don't have an Account?</Typography>
                          <Typography variant="p">Create Account</Typography>
                      </Stack>
                </Stack>
              
            </form>


        </div>

        
    );
}
export default Login;