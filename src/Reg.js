import React from "react";
import { useState } from "react";
const Reg=()=>
{
    const[rno,setrno]=useState("");
    const[name,setname]=useState("");
    const[gender,setgender]=useState("");
    const[Loc,setloc]=useState("");
    const[hobby1,setHobby1]=useState(false);
    const[hobby,setHobby]=useState(false);
    const[hobby2,setHobby2]=useState(false);

    const[res,setres]=useState("");
    
    const ChangeRno=(e)=>
    {
        setrno(e.target.value);
    }
    const ChangeName=(e)=>
    {
        setname(e.target.value);
    }
    const ChangeLoc=(e)=>
    {
        setloc(e.target.value);
    }
    const ChangeGender=(e)=>
    {
        setgender(e.target.value);
    }
   const checkHobby1=()=>
   {
       setHobby1(!hobby1)
   }
   const checkHobby=()=>
   {
       setHobby(!hobby)
   }
   const checkHobby2=()=>
   {
       setHobby2(!hobby2)
   }
    const btn=()=>
    {
        if(name==''||rno==''||gender==''||(Loc==''||Loc=='Select')||(hobby==''&&hobby1==''&&hobby2==''))
        {
            setres("There is an Error.Try again");
        }
        else
        {
            setres("SuccessFully Registered");
        }
    }
    return (<div className="frm">
            
            <table style={{marginLeft:'50px',fontSize:'bold'}}>
            <tr>
                    <td><b>Roll Number :</b></td> 
                    <td> <input style={{width: '300px',padding:'10px'}} type="text" name="txtrno" 
            value={rno} onChange={ChangeRno}  /></td>
                </tr>
                <br/>
                <tr>
                    <td><b>Name :</b></td> 
                    <td> <input style={{width: '300px',padding:'10px'}} type="text" name="txtUser" 
            value={name} onChange={ChangeName}  /></td>
                </tr>
                <br/>
                <tr>
                    <td><b> Gender :</b> </td>
                    <td> 
                        <div onChange={ChangeGender}>
                        <input type="radio" value="Male" name="gender" /> Male
                        <input type="radio" value="Female" name="gender" /> Female
                        <input type="radio" value="Other" name="gender" /> Other
                            </div> 
                        
            </td>
                </tr>
                <br/>
                <tr>
                    <td><b> Location :</b> </td>
                    <td> 
                    <select style={{width: '300px',padding:'10px'}}
                    
                     onChange={ChangeLoc}>
                        <option value="Select">Select</option>
                        <option value="Thrissur">Thrissur</option>
                        <option value="Ernamkulam">Ernamkulam</option>
                        <option value="Malappuram">Malappuram</option>
                        <option value="Palakkad">Palakkad</option>
                    </select>
                        </td>
                        
                         
                </tr>
                <br/>
                <tr>
                    <td><b>Hobbies:</b></td> 
                    <td> <input
                        type="checkbox"
                        name="hobbies"
                        value={hobby1}
                        checked={hobby1}
                        onChange={checkHobby1}/>Reading Books
                        <input
                        type="checkbox"
                        name="hobbies"
                        value={hobby}
                        checked={hobby}
                        onChange={checkHobby}/>Hearing Music
                        <input
                        type="checkbox"
                        name="hobbies"
                        value={hobby2}
                        checked={hobby2}
                        onChange={checkHobby2}/>Others
                    </td>
                </tr>
                <br/>
                <tr >
                    <td colspan="2">    
                        <input style={{width: '100px',padding:'10px',backgroundColor:'blue',color:'white',marginLeft:'100px'}} type="button" value="Click" onClick={btn}/>
                        <br/>
                        <h2 style={{color:"red",marginLeft:'100px'}}>{res}</h2>
                    </td>
                </tr>
            </table>
            
            
            
            
    </div>);
}
export default Reg;