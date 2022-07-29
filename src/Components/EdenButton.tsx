import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import React from "react";

interface EdenButtonProps {
    Icon: React.Component,
    text1: string,
    text2: string
};

const EdenButton = (props: EdenButtonProps) => {
    return(
        <Card sx={{width:2/5}}>
            <CardActionArea>
                <CardContent>
                    <>{props.Icon}</>
                    <h4>{props.text1}</h4>
                    <Typography fontSize={10}>{props.text2}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default EdenButton;