import {Box, Typography, Divider} from "@mui/material";
function DividerBar() {
    return(
        <div>
            <Box sx={{justifyContent:"center", height:"303px", color:"white", backgroundColor:"rgba(42, 86, 159, 0.95);", display:"grid", gridGap:"0px", gridTemplateColumns: "0.2fr 0.17px 0.2fr 0.17px 0.2fr 0.17px 0.2fr", alignItems:"center"}}>
                <Box sx={{ border:"1px solid red", height:"97.7px", textAlign:"center"}}>
                    <Typography variant="h2" sx={{fontWeight:"bold"}}>200</Typography>
                    <Typography variant="">Students</Typography>
                </Box>
                <Divider orientation="vertical" sx={{height: "115px", borderColor: "white" }}/>
                <Box sx={{border:"1px solid red", height:"97.7px", justifyContent:"center", textAlign:"center"}}>
                    <Typography variant="h2" sx={{fontWeight:"bold"}}>50</Typography>
                    <Typography variant="">Projects</Typography>
                </Box>
                <Divider orientation="vertical" sx={{ height: "115px", borderColor: "white" }}/>
                <Box sx={{ border:"1px solid red", height:"97.7px", justifyContent:"center", textAlign:"center"}}>
                    <Typography variant="h2" sx={{fontWeight:"bold"}}>$5k</Typography>
                    <Typography variant="">Raised</Typography>
                </Box>
                <Divider orientation="vertical" sx={{ height: "115px", borderColor: "white" }}/>
                <Box sx={{ border:"1px solid red", height:"97.7px", justifyContent:"center", textAlign:"center"}}>
                    <Typography variant="h2" sx={{fontWeight:"bold"}}>8k</Typography>
                    <Typography variant="">Children & Adults</Typography>
                </Box>
            </Box>

        </div>
    );

}
export default DividerBar;