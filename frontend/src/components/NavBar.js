import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css"
import Logo from "../assets/monstera.png";
import Grid from '@mui/material/Grid';

function NavBar() {
  return (
    <Grid display="flex" backgroundColor="#182d43" justifyContent="space-between" alignItems="center" gap={20}>
      <Link to="/home" className="title">
        BE-Y<img src={Logo} alt="" className="be-your-logo"/>UR-PLANT
      </Link>
      <Grid display="flex" flexDirection="row" margin={2}>
        <Link to="/login" className="login">Login</Link>
        <Link to="/registration" className="join">Join</Link>
        <Link to="/about" className="about">About</Link>
      </Grid >
    </Grid >
  );
}

export default NavBar;
