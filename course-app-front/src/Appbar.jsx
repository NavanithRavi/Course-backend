
import { Button,Typography} from '@mui/material';
function Appbar(){
    const handlesigin = () =>{
     window.location="/signin"
    }
    const hadlesignup = () =>{
     window.location="/signup"
    }
    
    return(
    <>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Typography variant="h6" component="h2">
  CourseEra
</Typography>
     <div>
    <Button variant="outlined" onClick={()=>handlesigin()} >signin</Button>
    <Button variant="outlined"onClick={()=>hadlesignup()}>signup</Button>
    </div>
    </div>
    </>)
}
export default Appbar;