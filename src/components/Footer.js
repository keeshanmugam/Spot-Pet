import React from "react";
import { useHistory } from "react-router-dom";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

export default function Footer() {

  let history = useHistory();
  let footerStyle = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#dfa658",
    background: "#dfa658",
    height: "10vh",
    width: "100%",
    position: "fixed",
    zIndex: 10,
    bottom: 0,
    left:0
  };
  let footerText = {
    display: "flex",
    justifyContent: "center",
    marginTop: 8,
    fontWeight: 600,
    fontsize: "50px",
    color:"white",
  };

  return (
    <div>
      <div style={footerStyle}>
        <button
          style={{
            width: 30,
            position: "absolute",
            left: 20,
            top: 10,
            backgroundColor: "#254a69",
            color: "#dfa658",
            borderBlockColor:"#dfa658",
          }}
          onClick={() => history.goBack()}
        >
          <KeyboardArrowLeftIcon />
        </button>

        <p style={footerText}> Spot Pet</p>

        <p style={footerText}> | Created by NAK |</p>
     
      </div>
    </div>
  );
}
