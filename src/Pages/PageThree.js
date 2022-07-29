import { Button, FormHelperText, Input, TextField } from "@mui/material";
import STRINGS from "../Consts/strings"
import "../App.css"
import EdenButton from "../Components/EdenButton.tsx";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
const Three = ({changeFunc}) => {
    const handleClick = () => {
        changeFunc(3);
    }
    return (
        <>
            <h2>{STRINGS.THREE_MAIN_MESSAGE}</h2>
            <p>{STRINGS.THREE_SUB_MESSAGE}</p>

            <div className="button-group">
                <EdenButton  Icon={<PersonIcon/>} text1={"For myself"} text2={STRINGS.THREE_MESSAGE_ONE}/>
                <EdenButton  Icon={<GroupsIcon/>} text1={"With my team"} text2={STRINGS.THREE_MESSAGE_TWO}/>
            </div>
            
            
            <Button variant="contained" fullWidth onClick={handleClick}>{STRINGS.ONE_THREE_BUTTON}</Button>
        </>
    );
}

export default Three;