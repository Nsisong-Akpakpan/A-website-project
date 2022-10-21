// import {Typography} from '@mui/material';
import { useState } from 'react';
import Navbar from '../Templates/Navbar';
import {Grid, Typography, Box, TextField, Container} from '@mui/material';
import {Card, CardContent, CardActions, Button, Divider} from '@mui/material';
import ButtonMain from '../Components/ButtonMain';
// IMAGES
import Twokids from "../../src/pictureImport/Twokids.png";
import Rectangle74 from "../../src/pictureImport/Rectangle74.png"
import ninthgridpicture from "../../src/pictureImport/ninthgridpicture.png"  
// import ninthGridBottomPolygon from "../../src/pictureImport/ninthGridBottomPolygon.png"  
// import ladywithcomputer from "../../src/pictureImport/ladywithcomputer.png";
import DividerBar from '../Templates/Dividerbar';
import { Link } from 'react-router-dom';
// import projectCategories from "../Data/data/data"
import { myData } from '../data'; 
// Icons
import {GoPrimitiveDot} from "react-icons/go";
import {GrGroup} from "react-icons/gr";
import {BsArrowRight} from "react-icons/bs";
import {FaFacebook} from "react-icons/fa";
import {FaInstagramSquare} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {BsArrowUpCircle} from "react-icons/bs";

function Home() {
    const[data] = useState(myData);
    return(
        <div>
            <Navbar/>
            
            {/* Second grid */}
            <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt:{md:8}  }}>
            <Grid container spacing={1} columns={12}>
                <Grid item xs={12} sm={12} md={6.1} sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:{xs:"center", sm:"center", md:"start"} }}>
                    <Box sx={{border:"1px solid red", justifyContent:"center", textAlign:"justify"}} >
                        <Typography variant="h4" sx={{display: "inline-block", color:"#6C6C6C", height:{xs:"100%", sm:"100%", md:"150px"}, fontSize:{xs:"1.5rem", md:"2rem"}, fontWeight:{xs:"700", md:"700"}, lineHeight:"50px", }}>Receive the support you need to create a ripple effect in your school and community.</Typography>             
                    </Box>

                    <Box sx={{justifyContent:"center", textAlign:"justify"}}>
                        <Typography variant="p" sx={{display: "inline-block", color:"#767672", fontSize:"18px", fontWeight:"400", lineHeight:"25.2px"}}>We empower high school students ages 10 - 18 to become innovators and global change agents.</Typography>
                    </Box>

                    <Box sx={{display:{xs:"block", md:"grid"}, gridTemplateColumns:"1fr 1fr", mt:2}}>
                        <Box sx={{pt:{md:1.5}}}>
                            <Typography variant="p" sx={{color:"#767672", fontSize:"20px", fontWeight:"700", lineHeight:"28px"}}>Want to join our community?</Typography>
                        </Box>
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
                    </Box>            
                </Grid>
                <Grid item xs={12} sm={12} md={5.9} sx={{border:"1px solid black"}} >
                    <Box sx={{border:"1px solid green", width:{xs:"100%", sm:"100%", md:"48vw"}, display:"flex", justifyContent:{xs:"center", sm:"center", md:"end"} }}>
                        <img src={Twokids} alt="" style={{border:"1px solid red", width:"100%"}} />

                    </Box>
                                                    
                </Grid>
            </Grid>
            </Container>

            {/* Third grid */}
            <DividerBar/>

            {/* Fourth grid */}
            <Container mt={13} maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
            <Grid container spacing={2} columns={12} sx={{display:"flex", flexDirection:"center", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{border:"1px solid red"}}>
                        <img src={Twokids} alt="" style={{width:"100%", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{display:"flex"}} >
                    <Box sx={{pt:4}} >
                        <Box sx={{border:"1px solid red", justifyContent:"center", textAlign:"justify"}} >
                            <Typography variant="h4" sx={{display: "inline-block", color:"#6C6C6C", height:{xs:"100%", sm:"100%", md:"90px"}, fontSize:{xs:"1.4rem", md:"1.9rem"}, fontWeight:{xs:"400", md:"600"}, lineHeight:"44.8px", }}>RipplED supports your learning and social impact Activities</Typography>             
                        </Box>

                        <Box sx={{justifyContent:"center", textAlign:"justify"}}>
                            <Typography variant="p" sx={{color:"#767672", display: "inline-block", fontSize:"18px", fontWeight:"400", lineHeight:"25.2px"}}>Through its online platform, RipplED offer students in Secondary Schools the opportunity to access skill development opportunities, mentorship and tailored curriculum to enable them learn and accelerate their activities and become global change makers.</Typography>
                        </Box>
                        {/* <Box>
                            <Typography variant="h4" sx={{width:"583px", fontSize:"32px", fontWeight:"600", color:"#303E49"}}>RipplED supports your learning and social impact Activities</Typography>             
                            <Typography variant="p" sx={{mt:2, width:"583px", fontSize:"24px", fontWeight:"300", color:"#3A3A3A"}}>Through its online platform, RipplED offer students in Secondary Schools the opportunity to access skill development opportunities, mentorship and tailored curriculum to enable them learn and accelerate their activities and become global change makers.</Typography>
                        </Box> */}
                        <Box sx={{pt:5, display:"flex", flexDirection:"row", justifyContent:{xs:"center", md:"start"}}}>
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
                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"center", justifyContent:"center", textAlign:"center"}} >
                    <Typography variant="6" sx={{border:"1px solid red", textAlign:"center", color:"#303E49", fontWeight:"600", fontSize:"32px"}}>View Our Project Categories</Typography>
                 </Box>
                <Grid container spacing={0} columns={12}>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box sx={{border:"1px solid yellow",display:"flex", flexDirection:"column", height:"100%",}}>
                            <Box sx={{ border:"1px solid green", justifyContent:"center", display:"grid", gridGap:"10px", gridTemplateRows: "70px 70px 70px 70px 70px 70px 70px 70px"}}>
                                <Box sx={{border:"1px solid red", color:"#767672", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/allsdgs'>
                                        All SDGS
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/nopoverty' >
                                        No Poverty
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/nopoverty' >
                                        No Poverty
                                    </Link>
                                </Box >
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/zerohunger' >
                                        Zero Hunger
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/goodhealth' >
                                        Good health & well-being
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/qualityeducation' >
                                        Quality Education
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/gengerequality' >
                                        Genger Equality
                                    </Link>
                                </Box>
                                <Box sx={{border:"1px solid red", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:{xs:"100%", sm:"100%", md:"200px"} }}>
                                    <Link to='/affordable' >
                                        Affordable & clean energy
                                    </Link>
                                </Box>
                            </Box>

                            <Box sx={{border:"1px solid green", mt:{xs:2, md:27}, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                <ButtonMain
                                type="submit" 
                                variant={"contained"} 
                                width={"230px"} 
                                height={"50px"} 
                                // bg={"inherit"} 
                                // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                                color={"#FFFFFF"}  
                                text={"Upload A Project"} 
                                fontSize={"13px"}
                                /> 
                            </Box>         
                            
                        </Box>
                    
                    </Grid>
                        <Grid item xs={12} sm={12} md={9} sx={{border:"1px solid red"}} >
                        <Grid container spacing={2} columns={9}>
                    {data.map((datum) =>(
                        // <Box sx={{display:"grid", gridGap:"18px", gridTemplateColumns: "42vh 42vh 42vh" }}>
                        <Grid item xs={9} sm={9} md={3} sx={{border:"1px solid red", mt:{xs:7, md:0}}} >
                            <Box sx={{border:"1px solid red" }}>
                                <Card>
                                    <Box width="100%" >
                                        <img src={datum.image} alt="" style={{border:"1px solid green", width:"100%"}}/>
                                    </Box>
                                    <CardActions sx={{display:"flex", justifyContent:"space-between"}}>
                                        <Button startIcon={<GoPrimitiveDot color="#F06277"/>} size="small" variant="contained" sx={{textTransform:"none", color:"#6E7A87", bgcolor:"rgba(42, 86, 159, 0.95)"}}>{datum.category}</Button>
                                        <Button size="small" variant="text" sx={{textTransform:"none", color:"#2A569F"}}>{datum.date}</Button>
                                    </CardActions>
                                    <CardContent sx={{justifyContent:"center", textAlign:"justify"}}>
                                        <Typography sx={{display: "inline-block"}} variant="body2" color="black">
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
            <Box mt={10} sx={{ justifyContent:"center", height:{md:"303px"}, color:"white", backgroundColor:"rgba(42, 86, 159, 0.95);", display:{xs:"block", md:"grid"}, gridGap:"140px", gridTemplateColumns:{xs:"1fr 1fr", md:"0.7fr 0.4fr"}, alignItems:"center"}}>
                <Box sx={{ border:"1px solid red", justifyContent:"center", textAlign:"justify"}}>
                    <Typography sx={{display: "inline-block", fontSize:{xs:"30px", md:"50px"}, fontWeight:{xs:"500", md:"600"} }} >You Can Become A RipplED Sponsor Or Partner</Typography>
                </Box>
               
                <Box sx={{border:"1px solid red", justifyContent:"center", textAlign:"justify"}}>
                    <Typography variant="p" sx={{display: "inline-block", width:"100%", border:"1px solid red", textAlign:"justify", lineHeight:"33.6px", fontSize:{xs:"19", md:"24px"} }} >Our students are reaching communities with their solutions and we need your help to enable them scale their impact.</Typography>
                    
                    <Box sx={{display:{xs:"flex", md:"grid"}, gridGap:{md:"29px"}, gridTemplateColumns: "200px 50px 200px", justifyContent:"center" }}>
                        <Box>
                        <ButtonMain
                        sx={{width:{xs:"170px"}}}
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
                        sx={{width:{xs:"170px"}}}
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
                    <Box sx={{display:"flex", justifyContent:{xs:"center"}}}>
                        <img src={Twokids} alt="" style={{width:"90%", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{width:"100%", border:"1px solid red", display:"flex"}} >
                    <Box>
                        <Typography variant="h4" sx={{fontSize:"32px", fontWeight:"600", color:"#303E49"}} >Watch Our Students In Action</Typography>             
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
                    <Typography variant="6" sx={{textAlign:"center", color:"#303E49", fontWeight:"600", fontSize:"32px"}}>What Our Students Say</Typography>
                 </Box>
            <Grid container spacing={1} columns={12} mt={2.6} sx={{display:"flex", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"100%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:{xs:"100%", md:"90%"}, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"100%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:{xs:"100%", md:"90%"}, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box >
                        <img src={Twokids} alt="" style={{width:"100%", border:"1px solid red"}} />
                    </Box>
                    <Box sx={{border:"1px solid red", width:{xs:"100%", md:"90%"}, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Typography variant="p" sx={{fontWeight:"400", width:"170px", fontSize:"14px", color:"#303E49"}}>An enim nullam tempori donec porta and blandi integer velna vitae.</Typography>
                    </Box>
                </Grid>
            </Grid>
            </Container>

             {/* Ninth grid */}
             <Container maxWidth="lg" sx={{width:{xs:"100%", sm:"90%", md:"90%"}, mt: 8 }}>
            <Grid container spacing={2} columns={12} sx={{display:"flex", flexDirection:"center", justifyContent:"center"}}>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{border:"1px solid red", width:{xs:"100%", md:"416px"}, height:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center" }}>
                        <img src={ninthgridpicture} alt="" style={{width:"100%", height:"406px", borderRadius:"9px", border:"1px solid red"}} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <form>
                    <Typography sx={{fontWeight:"600", color:"#303E49", fontSize:"32px"}}>Get In Touch With Us</Typography>
                        <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"space-between"}}>
                            <Box sx={{border: "1px solid red", height: "90px", width:{xs:"100%", md:"260px"}, display: "flex"}}>
                                <Box width="100%" sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >NAME</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Your name" 
                                    sx={{
                                        width:{xs:350, md:540}
                                    }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:{xs:"100%", md:"260px"}, display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >SUBJECT</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Choose subject" 
                                     sx={{
                                        width:{xs:350, md:540}
                                    }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:{xs:"100%", md:"260px"}, display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >COMPANY</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Text here"
                                     sx={{
                                        width:{xs:350, md:540}
                                    }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "90px", width:{xs:"100%", md:"260px"}, display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >EMAIL</Typography>
                                     <TextField variant="outlined" margin="dense" size="small" label="Your email address"
                                     sx={{
                                        width:{xs:350, md:540}
                                    }}
                                    />
                                </Box>
                            </Box>
                            <Box sx={{border: "1px solid red", height: "250px", width:"100%", display: "flex"}}>
                                <Box sx={{display:"block"}}>
                                    <Typography sx={{fontWeight:"500", fontSize:"16px", lineHeight:"24px"}} >MESSAGE</Typography>
                                     <TextField  variant="outlined"
                                      margin="dense"
                                      fullWidth
                                      multiline
                                      label="Start typing here"
                                      sx={{
                                          width:{xs:350, md:540}
                                      }}
                                      InputProps={{ sx: { height:200 } }}
                                     />
                                </Box>
                            </Box>
                            <Box>
                                <ButtonMain
                                type="submit" 
                                variant={"contained"} 
                                width={"152px"} 
                                height={"50px"} 
                                // bg={"inherit"} 
                                // bg={"linear-gradient(274.01deg, #F06277 8.9%, #FFB1BD 126.7%)"} 
                                color={"#FFFFFF"}  
                                text={"Submit"} 
                                fontSize={"13px"}
                                /> 
                            </Box>
                            
                        </Box>

                    </form>
                    
                </Grid>
            </Grid>
            </Container>

            {/* Footer section */}
            <Box pt={17} width="100%" sx={{position:"absolute", border:"1px solid red", dislay:"flex", flexDirection:"row", justifyContent:"center", textAlign:"center"}} >
                <Button variant="contained" size="medium" sx={{width:"184.75px", height:"105.08px", bgcolor:"#303E49", zIndex:"15", borderRadius:"20px", border:"9px solid white", dislay:"flex", flexDirection:"row", justifyContent:"center"}}><img src={Rectangle74} style={{width:"150.11px"}} alt=""/></Button>
            </Box>

            <Box mt={20} sx={{border:"1px solid red", backgroundColor:"#303E49", color:"white", position:"relative", height:"342px", display:{xs:"block", md:"grid"}, gridTemplateColumns: "95vw 5vw", justifyContent:"center", alignItems:"center", textAlign:"center" }}>
                <Box sx={{border:"1px solid black", height:"100%", dislay:"flex", justifyContent:"space-between"}}>
                    <Box sx={{border:"5px solid green", height:"87%",  display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{border:"1px solid red", display:{xs:"block", md:"grid"}, gridGap:"50px", gridTemplateColumns: "100px 100px 100px 100px", justifyContent:"center", textAlign:"center" }}>
                            <Box sx={{border:"1px solid green", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                Help
                            </Box>
                            <Box sx={{border:"1px solid green"}}>
                                Contact                            
                            </Box>
                            <Box sx={{border:"1px solid green"}}>
                                Privacy                            
                            </Box>
                            <Box sx={{border:"1px solid green"}}>
                                Terms                          
                            </Box>
                        </Box>

                        <Box mt={3} sx={{border:"1px solid red", display:"grid", gridGap:"3px", gridTemplateColumns: "50px 50px 50px", justifyContent:"center", textAlign:"center" }}>
                            <Box sx={{border:"1px solid green", display:"flex", justifyContent:"center", alignItems:"center"}}>
                                <FaFacebook/>
                            </Box>
                            <Box sx={{border:"1px solid green"}}>
                                <FaInstagramSquare/>                            
                            </Box>
                            <Box sx={{border:"1px solid green"}}>
                                <FiTwitter/>                           
                            </Box>
                        
                        </Box>
                            
                       
                    </Box>

                  

                    <Box sx={{border:"5px solid blue", display:"flex", justifyContent:"center", textAlign:"center" }}>
                        @ 2022 RipplED, Inc, All rights reserved
                                               
                    </Box>

                </Box>
                <BsArrowUpCircle size="50px"/>

           
            </Box>
            
          
         
        </div>


    );
}
export default Home;