import { Button, FormHelperText, Input, TextField } from "@mui/material";
import { useState } from "react";
import STRINGS from "../Consts/strings"
const One = ({changeFunc, changeUser}) => {
    const [display, setDisplay] = useState("");
    const handleClick = () => {
        changeUser(display);
        changeFunc(1);
    }

    return (
        <>
            <h2>{STRINGS.ONE_WELCOME_MESSAGE}</h2>
            <p>{STRINGS.ONE_WELCOME_SUBTEXT}</p>
            <div className="helper-text-field">
                <FormHelperText>Full Name</FormHelperText>
                <TextField fullWidth placeholder="Steve Jobs" />
            </div>
            <div className="helper-text-field">
                <FormHelperText>Display Name</FormHelperText>
                <TextField fullWidth placeholder="Steve" sx={{mb:5}} onChange={(e) => setDisplay(e.target.value)} value={display}/>
            </div>
            
            <Button variant="contained" fullWidth onClick={handleClick}>{STRINGS.ONE_THREE_BUTTON}</Button>
        </>
    );
}

export default One;