import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid"
import buy1 from "../assets/buy_icon1.svg"
import buy2 from "../assets/buy_icon2.svg"
import buy3 from "../assets/buy_icon3.svg"
import Card from '@mui/material/Card';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabExplore(props) {

  console.log(props.dataYangDikirim,"ini props tabExplore");
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const data = [buy1,buy2,buy3,buy1,buy2,buy3]
  const data1 = [{img:buy1,title:"title1",content:"content 1"},{img:buy2,title:"title 2",content:"content  2"},{img:buy3,title:"title 3",content:"content 3"}]
  const data2 = props.dataYangDikirim
  const data3 = [buy1,buy3,buy3]

  const test = [{nama:"ani", umur:17}, {nama:"nia", umur:19}, {nama:"dani", umur:17}]

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='w-600' label="Buying" {...a11yProps(0)} />
          <Tab label="Rating" {...a11yProps(1)} />
          <Tab label="Selling" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       <Grid container display="flex" direction="row" justifyContent="space-between">
        {data1.map((item,i)=>{
            if (i<5){
                return(
       <Card key={i} className='card'>
            <div className='center'>
            <img src={item.img} alt='' />
            <p className='w-600'>{item.title} </p>
                <p className='c-72'>{item.content} </p>
            </div>
            <a href="#" className='w-600 c-63'>Check property values</a>
        </Card>)
            }})}
       </Grid>

       {test.map((item)=>(
        <h1>{item.nama} {item.umur} </h1>
       ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container display="flex" direction="row" justifyContent="space-between">
        {data2.map((item,i)=>(
       <Card key={i} className='card'>
            <div className='center'>
            <img src={buy1} alt='' />
            <p className='w-600'>{item.code_product} </p>
                <p className='c-72'>{item.port_name} </p>
            </div>
            <a href="#" className='w-600 c-63'>Check property values</a>
        </Card>))}
       </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container display="flex" direction="row" justifyContent="space-between">
        {data3.map((item,i)=>(
       <Card key={i} className='card'>
            <div className='center'>
            <img src={item} alt='' />
            <p className='w-600'>Get estimated property prices with 
                a realEstimate™</p>
                <p className='c-72'>See how much your property’s worth whether you own it or want to buy it.</p>
            </div>
            <a href="#" className='w-600 c-63'>Check property values</a>
        </Card>))}
       </Grid>
      </TabPanel>
    </Box>
  );
}