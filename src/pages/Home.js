import React, {useState, useEffect} from 'react'
import NavbarHomepage from '../components/NavbarHomepage'
import TabExplore from '../components/TabExplore'
import homepage_bg from "../assets/homepage_bg.png" 
import coal from "../assets/coal.svg"
import Grid from "@mui/material/Grid"
import { getProductList } from '../services/api'
import axios from 'axios'


export default function Home() {
  const [data,setData]=useState([])

useEffect(()=>{
  // getProduct()
  getProductFromAxios()
},[])


const getProduct= async (e)=>{
  const res = await getProductList("batubara")
  console.log(res,"ini res getProduct");
}

const getProductFromAxios =(e)=>{
  axios.get("https://indomine-cms.cranium.id/api/search-product/batubara").then((res)=>{
    console.log(res,"ini respon sukses");
    console.log(res.data.data.data.data,"ini data.data");
    setData(res.data.data.data.data)
  }).catch((err)=>{
    console.log(err,"ini respon gagal");
  })
}


console.log(data,"ini data state");
  return (
    <div>
        <NavbarHomepage/>
        <div className='box-header'  style={{backgroundImage:`url(${homepage_bg})`}}>
            <div className='text-banner'>
                <Grid container display={"flex"} direction="column" className='box-content'>
                <h1 className='c-ff '>Find Real Estate <br/> and Get Your Dream Space</h1>
                <img src={coal} alt='' />
                <p className='c-ff'>Find a variety of properties that suit you very easily<br/>
forget all difficulties in finding a residence for you</p>
</Grid>
            </div>
        </div>
        <div className='box-content'>
        <TabExplore  dataYangDikirim={data}  />
        </div>
    </div>
  )
}
