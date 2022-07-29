import { Button, FormHelperText, Input, TextField } from "@mui/material";
import STRINGS from "../Consts/strings"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const Four = ({changeFunc, user}) => {
    const handleClick = () => {
        changeFunc(4);
    }
    return (
        <>
            <CheckCircleIcon sx={{fontSize:100}} color="primary"/>
            <h2>{"Congratulations, " + user + "!"}</h2>
            <p>You have completed onboarding, you can start using the Eden!</p>
            <Button variant="contained" fullWidth onClick={handleClick}>Launch Eden</Button>
        </>
    );
}

export default Four;