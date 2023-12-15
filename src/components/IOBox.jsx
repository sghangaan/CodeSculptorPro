import React from "react";
import { Card, Typography } from "@mui/material";

export default function IOBox(props) {
  return (
    <>
      <center>
        <Typography variant="h5" fontWeight="700" sx={{ marginTop: "1%", color: "#ffffff"  }}>
          {props.title}
        </Typography>

        
        <Card variant="outlined" sx={{ padding: "1%", margin: "1% 0% 2%", color: 'white', background:"radial-gradient(circle at 0% 0%, #422532, #120544, #992c2c);" }}>
          <Typography fontFamily="roboto" fontSize="1.5rem" className="ioBox">
            {props.text}
          </Typography>
        </Card>
      </center>
    </>
  );
}
