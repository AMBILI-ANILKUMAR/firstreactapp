import React from "react";
import { useState } from "react";
const Register=()=>
{
    const[uname,setUname]=useState("");
    const[pwd,setpwd]=useState("");
    const[res,setres]=useState("");
    const ChangeValue=(e)=>
    {
        setUname(e.target.value);
    }

    const ChangePwdValue =(e)=>
    {
        setpwd(e.target.value);
    }

    const btn=()=>
    {
        if(uname=="Ambili" && pwd=="ambili123")
            setres("Success");
        else
            setres("Error");
    }
    return (<div className="frm">
            <h1>Login Here!!</h1>
            <hr/>
            <table style={{marginLeft:'50px',fontSize:'bold'}}>
                <tr>
                    <td><b>Username :</b></td> 
                    <td> <input style={{width: '300px',padding:'10px'}} type="text" name="txtUser" 
            value={uname} onChange={ChangeValue}  /></td>
                </tr>
                <br/>
                <tr>
                    <td><b> Password :</b> </td>
                    <td>  <input style={{width: '300px',padding:'10px'}} type="password" name="txtPwd" 
            value={pwd}  onChange={ChangePwdValue} /></td>
                </tr>
                <br/>
                <tr >
                <input style={{width: '100px',padding:'10px',backgroundColor:'blue',color:'white',marginLeft:'100px'}} type="button" value="Click" onClick={btn}/>
                <h2 style={{color:"red",marginLeft:'100px'}}>{res}</h2>
                </tr>
            </table>
            
            
            
            
    </div>);
}
export default Register;