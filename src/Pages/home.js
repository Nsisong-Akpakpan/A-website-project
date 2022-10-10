// import {Typography} from '@mui/material';
import { useState } from 'react';
import Navbar from '../Templates/Navbar';
import {Grid, Typography, Box, TextField, Container} from '@mui/material';
import {Card, CardContent, CardActions, Button, Divider} from '@mui/material';
import ButtonMain from '../Components/ButtonMain';
import Twokids from "../../src/pictureImport/Twokids.png";
// import ladywithcomputer from "../../src/pictureImport/ladywithcomputer.png";
import DividerBar from '../Templates/Dividerbar';
import { Link } from 'react-router-dom';
// import projectCategories from "../Data/data/data"
import { myData } from '../data'; 
// Icons
import {GoPrimitiveDot} from "react-icons/go";
import {GrGroup} from "react-icons/gr";
import {BsArrowRight} from "react-icons/bs";

function Home() {
    const[data] = useState(myData);
    return(
        <div>
            <Navbar/>
            
            {/* Second grid */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
            <Grid container spacing={2} columns={12}>
                <Grid item xs={12} sm={12} md={6.6}>
                    <Typography variant="h4">Receive the support you need to create a ripple effect in your school and community.</Typography>             
                    <Typography variant="p">We empower high school students ages 10 - 18 to become innovators and global change agents.</Typography>
                    <Box>
                        <ButtonMain
                        type="submit" 
                        variant={"contained"} 
                        width={"260px"} 
                        height={"50px"} 
                        // bg={"inherit"} 
                        // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                        color={"#FFFFFF"}  
                        text={"Learn how it works"} 
                        fontSize={"13px"}
                        /> 
                    </Box>            
                </Grid>
                <Grid item xs={12} sm={12} md={5.4}>
                <img src={Twokids} alt="" sx={{width:"50px"}}/>
                    {/* <Twokids/>              */}
                </Grid>
            </Grid>
            </Container>

            {/* Third grid */}
            <DividerBar/>

            {/* Fourth grid */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
            <Grid container spacing={2} columns={12} sx={{display:"flex", flexDirection:"center", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{border:"1px solid red"}}>
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{display:"flex"}} >
                    <Box sx={{pt:4}} >
                        <Box>
                            <Typography variant="h4" sx={{width:"583px", fontSize:"32px", fontWeight:"600", color:"#303E49"}}>RipplED supports your learning and social impact Activities</Typography>             
                            <Typography variant="p" sx={{mt:2, width:"583px", fontSize:"24px", fontWeight:"300", color:"#3A3A3A"}}>Through its online platform, RipplED offer students in Secondary Schools the opportunity to access skill development opportunities, mentorship and tailored curriculum to enable them learn and accelerate their activities and become global change makers.</Typography>
                        </Box>
                        <Box sx={{pt:5}}>
                            <ButtonMain
                            type="submit" 
                            variant={"contained"} 
                            width={"260px"} 
                            height={"50px"} 
                            // bg={"inherit"} 
                            // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                            color={"#FFFFFF"}  
                            text={"Join Our Community"} 
                            fontSize={"13px"}
                            /> 
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Container>

            {/* Fifth grid */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
                <Grid container spacing={0} columns={12}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box>
                            <Box sx={{ border:"1px solid red", justifyContent:"center", display:"grid", gridGap:"10px", gridTemplateRows: "70px 70px 70px 70px 70px 70px 70px 70px"}}>
                                <Box sx={{border:"1px solid red", width:"200px"}}>
                                    <Link to='/allsdgs' >
                                        All SDGS
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/nopoverty' >
                                        No Poverty
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/nopoverty' >
                                        No Poverty
                                    </Link>
                                </Box >
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/zerohunger' >
                                        Zero Hunger
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/goodhealth' >
                                        Good health & well-being
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/qualityeducation' >
                                        Quality Education
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/gengerequality' >
                                        Genger Equality
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red"}}>
                                    <Link to='/affordable' >
                                        Affordable & clean energy
                                    </Link>
                                </Box>
                            </Box>
                            
                        </Box>
                    
                    </Grid>
                        <Grid item xs={12} sm={12} md={9} sx={{border:"1px solid red"}} >
                        <Grid container spacing={2} columns={9}>
                    {data.map((datum) =>(
                        // <Box sx={{display:"grid", gridGap:"18px", gridTemplateColumns: "42vh 42vh 42vh" }}>
                        <Grid item xs={9} sm={9} md={3} sx={{border:"1px solid red"}} >
                            <Box sx={{border:"1px solid red"}}>
                                <Card>
                                    <Box>
                                        <img src={datum.image} alt=""/>
                                        {/* {datum.image} */}
                                    </Box>
                                    <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                                        <Button startIcon={<GoPrimitiveDot color="#F06277"/>} size="small" variant="contained" sx={{textTransform:"none", color:"#6E7A87", bgcolor:"rgba(42, 86, 159, 0.95)"}}>{datum.category}</Button>
                                        <Button size="small" variant="text" sx={{textTransform:"none", color:"#2A569F"}}>{datum.date}</Button>
                                    </CardActions>
                                    <CardContent>
                                        <Typography variant="body2" color="black">
                                        {datum.text}
                                        </Typography>
                                        <Divider sx={{ borderColor: "#2A569F", borderBottomWidth: 2, fontWeight:"bold"}}/>
                                    </CardContent>
                                    <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                                        <Button startIcon={<GrGroup color="#F06277"/>} sx={{textTransform:"none", color:"#F06277"}} size="small">223</Button>
                                        <ButtonMain
                                        type="submit" 
                                        variant={"contained"} 
                                        width={"28.12px"} 
                                        height={"40.44px"} 
                                        // bg={"inherit"} 
                                        // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                                        color={"#FFFFFF"}  
                                        text={"View"} 
                                        fontSize={"13px"}
                                        /> 
                                        
                                    </CardActions>

                                </Card>
                            </Box>

                            {/* <Box>
                            <Card>
                                    <Box>
                                        <img src={ladywithcomputer} alt=""/>
                                    </Box>

                                </Card>
                                
                            </Box>

                            <Box>
                            <Card>
                                    <Box>
                                        <img src={ladywithcomputer} alt=""/>
                                    </Box>

                                </Card>
                            </Box> */}
                        {/* // </Box> */}
                        </Grid>

                        
                ))} 
                </Grid>
                    </Grid>

                    
                </Grid>

            </Container>
            
            {/* Sixth grid */}
            <Box mt={10} sx={{ justifyContent:"center", height:"303px", color:"white", backgroundColor:"rgba(42, 86, 159, 0.95);", display:"grid", gridGap:"140px", gridTemplateColumns: "0.7fr 0.4fr", alignItems:"center"}}>
                <Box sx={{ border:"1px solid red"}}>
                    <Typography variant="h3" sx={{fontWeight:"bold", textAlign:"left"}} >You Can Become A RipplED Sponsor Or Partner</Typography>
                </Box>
               
                <Box sx={{border:"1px solid red", justifyContent:"center", textAlign:"justify",}}>
                <Typography variant="p" sx={{display: "inline-block", width:"100%", border:"1px solid red", textAlign:"justify", lineHeight:"33.6px", fontSize:"24px"}} >Our students are reaching communities with their solutions and we need your help to enable them scale their impact.</Typography>
                    
                    <Box sx={{display:"grid", gridGap:"29px", gridTemplateColumns: "200px 50px 200px" }}>
                        <Box>
                        <ButtonMain
                        type="submit"
                        diplay={"flex"}
                        justifyContent={"space-around"} 
                        variant={"contained"} 
                        width={"186px"} 
                        height={"66px"} 
                        // bg={"inherit"} 
                        // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                        color={"#FFFFFF"}  
                        text={"Sponsor"} 
                        fontSize={"15px"}
                        endIcon={<BsArrowRight color="#ffffff" size="40px"/>}
                        />
                        </Box>

                        <Box mt={2} sx={{fontSize:"24px"}}>
                           or
                        </Box>
                    
                        <Box>
                        <ButtonMain
                        type="submit"
                        diplay={"flex"}
                        justifyContent={"space-around"} 
                        variant={"contained"} 
                        width={"186px"} 
                        height={"66px"} 
                        // bg={"inherit"} 
                        // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                        color={"#FFFFFF"}  
                        text={"Partner"} 
                        fontSize={"15px"}
                        endIcon={<BsArrowRight color="#ffffff" size="40px"/>}
                        />
                        </Box>
                    </Box>
                
                        
                
                </Box>
              
            </Box>

            {/* Seventh grid */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"80%"}, mt: 8 }}>
            <Grid container spacing={1} columns={12}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{width:"100%", border:"1px solid red", display:"flex"}} >
                    <Box>
                        <Typography variant="h4" sx={{width:"358px", fontSize:"32px", fontWeight:"600", color:"#303E49"}} >Watch Our Students In Action</Typography>             
                        <Box sx={{pt:5}}>
                            <Typography variant="p" >From acting for Quality Education, to advocating for Gender Equality to  Championing climate causes, our students are working towards the actualization of the SDGs by 2030</Typography>
                        </Box>
                        <Box>
                        <Button size="small" endIcon={<BsArrowRight />} variant="text" sx={{textTransform:"none", color:"#2A569F"}}>Learn More</Button> 
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </Container>

             {/*Eight grid */}
             <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"80%"}, mt: 8}}>
                 <Box sx={{border:"1px solid red", display:"flex", flexDirection:"center", justifyContent:"center", textAlign:"center"}} >
                    <Typography variant="6" sx={{textAlign:"center", fontWeight:"600", fontSize:"32px"}}>What Our Students Say</Typography>
                 </Box>
            <Grid container spacing={1} columns={12} mt={2.6} sx={{display:"flex", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:"90%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:"90%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:"90%", display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
            </Grid>
            </Container>

             {/* Ninth grid */}
             <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
            <Grid container spacing={2} columns={12} sx={{display:"flex", flexDirection:"center", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{border:"1px solid red"}}>
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{display:"flex"}} >
                    <form>
                        <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                            <Box sx={{border: "1px solid red", height: "90px", width:"260px", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >NAME</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Your name" />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:"260px", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >SUBJECT</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Choose subject" />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:"260px", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >COMPANY</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Text here" />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:"260px", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >EMAIL</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Your email address" />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:"100%", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >MESSAGE</Typography>
                                     <TextField id="fullWidth"  variant="outlined" margin="dense" fullWidth multiline label="Start typing here" />
                                </Box>
                            </Box>
                            
                        </Box>

                    </form>
                    
                </Grid>
            </Grid>
            </Container>
            
          
         
        </div>


    );
}
export default Home;