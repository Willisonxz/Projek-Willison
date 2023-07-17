import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import Wb from "../assets/Website Logo.png"
import Right from "../assets/Right.png"
import Google from "../assets/Google Logo.png"
import Facebook from "../assets/Facebook Logo.png"
import Apple from "../assets/Apple Logo.png"
import Email from "../assets/Email Logo.png"
import Password from "../assets/Lock Logo.png"
import Eye from "../assets/Eye Logo.png"
import Closeeye from "../assets/eye.png"
export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [status,setStatus] = useState("login")
    const [token, setToken] = useState("")
    const [visible,setVisible] = useState(true);


 

      const login = (e)=>{
      e.preventDefault()
      const data = {email:email,password:password}
       axios.post("https://property-api.cranium.id/user/login",data).then((res) => {
        console.log(res.data,"ini res data");
        console.log(res.data.data, "ini res data.data");
           sessionStorage.setItem("token",res.data.data.token)
        }).catch((err) => {
            console.log(err,"ini respon gagal")
        })
      }

      console.log(email,password,"test");

console.log(password,visible,"checkstatus")
  return (
    
    <div>
        <div class="login-page">
  <div class="form">
    {status==="login" ?
  <form class="login-form">
  <img class="img1" src={Wb} alt=''/>
  <p class= "Header">Sign in</p>
  <p class= "Sub-Header">Sign in with this account across the following data</p>
<div  class ="img-container" >
<img class="img2" src={Wb} alt=''/>
  <img class="img3" src={Right} alt=''/>
</div>

<div class="email-container">
      <input class="Email" type="text" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} />
      <div class="mail"><img  src={Email} alt=''/></div>
      </div>
      <div class="password-container">
        <input value={password} id="password" type={visible ? "text" : "password"} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} class="Password"/>
       <div class="lock"><img  src={Password} alt=''/></div>
         <div class="eye" onClick={() => setVisible(!visible)}>
         { visible ? <img src={Eye} style={{witdh : "20px", height:"20px"}}/> : <img src={Closeeye} style={{witdh : "20px", height:"20px"}}/>  }
         </div>
      </div>
      
      <button class="signin" onClick={(e)=>login(e)}>Sign in</button>
      <p class= "textpassword">Forgot your password?</p>
     <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
    <div style={{ flex: 1, borderTop: "1px solid black" }}></div>
    <p style={{ margin: "0 10px", fontWeight: "bold" }}>OR</p>
    <div style={{ flex: 1, borderTop: "1px solid black" }}></div>
   </div>
      <button class="Google"><img class="Google-image" src={Google} alt=''/>Continue with Google</button>
      <button class="Facebook"><img class="Facebook-image" src={Facebook} alt=''/>Continue with Facebook</button>
      <button class="Apple"><img class="Apple-image" src={Apple} alt=''/>Continue with Apple</button>
      <p class="message">Not signed up?  <a href="#" onClick={(e)=>setStatus("register")}>Create an account</a></p>
    </form>:


    <form class="register-form">
    <img class="img1" src={Wb} alt=''/>
  <p class= "Header">Create Account</p>
  <p class= "Sub-Header">You can use this account across the following sites.</p>
<div  class ="img-container" >
<img class="img2" src={Wb} alt=''/>
  <img class="img3" src={Right} alt=''/>
</div>

<div class="email-container">
      <input class="Email" type="text" placeholder="Email address" onChange={(e)=>setEmail(e.target.value)} />
      <div class="mail"><img  src={Email} alt=''/></div>
      </div>
      <div class="password-container">
        <input class="Password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
         <div class="lock"><img  src={Password} alt=''/></div>
         <div class="eye" onClick={() => setVisible(!visible)}>
         { visible ? <img src={Eye} style={{witdh : "20px", height:"20px"}}/> : <img src={Closeeye} style={{witdh : "20px", height:"20px"}}/>  }
         </div>
      </div>
      
      <button class="Createaccount" onClick={(e)=>login(e)}>Create account</button>
      <p class="message1">Already have an account?  <a href="#" onClick={(e)=>setStatus("login")}>Sign In</a></p>
     <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
    <div style={{ flex: 1, borderTop: "1px solid black" }}></div>
    <p style={{ margin: "0 10px", fontWeight: "bold" }}>OR</p>
    <div style={{ flex: 1, borderTop: "1px solid black" }}></div>
   </div>
      <button class="Google"><img class="Google-image" src={Google} alt=''/>Continue with Google</button>
      <button class="Facebook"><img class="Facebook-image" src={Facebook} alt=''/>Continue with Facebook</button>
      <button class="Apple"><img class="Apple-image" src={Apple} alt=''/>Continue with Apple</button>
     
    </form>}

  </div>
  <div class="box">
        <p> Personal information Collection Statement.</p>
      </div>
</div>
    </div>
  )
}
