import {Component} from "react"
import "./index.css"

class Register extends Component{
    state={username:"",password:""}

registerusername=event=>{
    this.setState({username:event.target.value})
}
registeruserpassword=event=>{
    this.setState({password:event.target.value})
}

    onClickregister=async (event)=>{
        event.preventDefault()
        const{username,password}=this.state
        const userdetails={username,password}
        const url="https://oscowl-1-houp.onrender.com/register"
        const options={
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(userdetails)
        }
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)

    }

    render(){
        return <div className="register-container">
            <form className="form-container" onSubmit={this.onClickregister}>
            <h1 className="create-account">CREATE ACCOUNT</h1>
            <label>Username</label>
            <input type="text" placeholder="Username" onChange={this.registerusername}/>
            <label>Password</label>
            <input type="password" placeholder="password" onChange={this.registeruserpassword}/>
            <button type="submit" className="register-submit-button">submit</button>
           
            </form>
            
            
        </div>


        
    }
}

export default Register