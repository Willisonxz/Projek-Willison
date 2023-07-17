import React from 'react'
import logo from "../assets/logo.svg"
import Grid from "@mui/material/Grid";
import {NavLink} from 'react-router-dom'

export default function NavbarHomepage() {

  const path = window.location.pathname
  const check_path = (e)=>{
    let color = "#726E75"
    if (e== path){
      color = "white"
    }
    return color
  }



  return (
    <div className='header'>
      <Grid direction="row" justifyContent={"space-between"} display="flex" className='box-content'>
        <Grid item direction={"row"} display={"flex"}>
          <img src={logo} alt=''/>
          <Grid className='menu' container display={"flex"} direction={"row"}>
            <NavLink to="/" style={{color: `${check_path("/")}` }}>Buy</NavLink>
            <NavLink to="/rent" style={{color: `${check_path("/rent")}` }}>Rent</NavLink>
            <NavLink to="/sold" style={{color: `${check_path("/sold")}` }}>Sold</NavLink>
            <p>New Homes</p>
            <p>Find Agents</p>
            <p>News</p>
          </Grid>
        </Grid>
        <Grid item >
          <button onClick={(e)=>window.location.href="/login"}>Sign In</button>
          <button className='bt-join'>Join</button>
        </Grid>
      </Grid>
    </div>
  )
}
