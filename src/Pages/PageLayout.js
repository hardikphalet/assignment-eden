import { Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import "../App.css"
import One from "./PageOne";
import Two from "./PageTwo";
import Three from "./PageThree";
import Four from "./PageFour";
const Layout = () => {
    const [activeStep, setActiveSet] = useState(0);
    const steps = [0,1,2,3];
    const [userName, setUserName] = useState('Steve');

    const displayPage = (n) => {
        switch(n) {
            case 0:
                return <One changeFunc={setActiveSet} changeUser={setUserName}/>
            case 1:
                return <Two changeFunc={setActiveSet}/>
            case 2:
                return <Three changeFunc={setActiveSet}/>
            case 3:
                return <Four changeFunc={setActiveSet} user={userName}/>
            default:
                return <One changeFunc={setActiveSet}/>
        }
    }

    return(
        <div className="page-layout">
            <div className="page-header">
                <img src={require("./logo_color.png")} alt={"Eden"}/>
                <h1>Eden</h1>
            </div>
            <div className="page-stepper">
                <Stepper  activeStep={activeStep}>
                    {
                        steps.map((stepNumber) => (
                            <Step key={stepNumber}>
                                <StepLabel sx={{r:40}}></StepLabel>
                            </Step>
                        ))
                    }
                </Stepper>
            </div>
            {
                displayPage(activeStep)
            }
        </div>
    );    
}

export default Layout;