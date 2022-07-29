import { Button, FormHelperText, Input, TextField } from "@mui/material";
import STRINGS from "../Consts/strings"
const Two = ({changeFunc}) => {
    const handleClick = () => {
        changeFunc(2);
    }
    return (
        <>
            <h2>{STRINGS.TWO_MAIN_MESSAGE}</h2>
            <p>{STRINGS.TWO_SUB_TEXT}</p>
            <div className="helper-text-field">
                <FormHelperText>Workspace Name</FormHelperText>
                <TextField fullWidth placeholder="Eden" />
            </div>
            <div className="helper-text-field">
                <FormHelperText>Workplace URL</FormHelperText>
                <TextField fullWidth placeholder="Example" sx={{mb:5}} />
            </div>
            
            <Button variant="contained" fullWidth onClick={handleClick}>{STRINGS.ONE_THREE_BUTTON}</Button>
        </>
    );
}

export default Two;