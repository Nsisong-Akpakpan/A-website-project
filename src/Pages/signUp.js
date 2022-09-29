import {Typography, Stack, TextField, Button } from "@mui/material";
function SignUp() {
    return(
        <div style ={{display:"flex", margin:"auto", flexDirection:"column", textAlign:"center", justifyContent:"center" }}>
            <Typography variant="h3">Sign up for an Account</Typography>
            <form style ={{display:"flex", margin:"auto", flexDirection:"column", textAlign:"center", justifyContent:"center" }}>
                <Stack spacing={4}>
                    <Stack direction="row" spacing={1}>
                        <TextField
                        sx={{width:"100%"}}
                        placeholder="First Name"
                        label="First Name"
                        type="text"
                        size="small"
                        />
                        <TextField
                        sx={{width:"100%"}}
                         placeholder="First Name"
                         label="Last Name"
                         type="text"
                         size="small"
                         />
                    </Stack>
                    <TextField
                      placeholder="Email Address"
                      label="Email Address"
                      type="text"
                      size="small"
                      />
                    <TextField
                      placeholder="+234"
                      label="+234"
                      type="number"
                      size="small"
                      />
                    <TextField
                      placeholder="Password"
                      label="Password"
                      type="Password"
                      size="small"
                      />
                    <TextField
                      placeholder="Confirm password"
                      label="Confirm password"
                      type="password"
                      size="small"
                      />

                    <Button sx={{textTransform:"none"}} variant="contained">Create your account</Button>
                </Stack>
              
            </form>


        </div>

    );
}
export default SignUp