import React, { Component } from 'react'
import axios from 'axios'
export default class componentName extends Component {
    state={
username:"",
password:""
    }
    handChange=(type,value)=>{
        this.setState({
            [type]:value 
            
        })
       

    }
    gologin=()=>{
        let {username,password}=this.state
        axios.post('/api/login',{
            username:username,
            password:password
        }).then(res=>{
            if(res.data.code===1){
                let {token,rolename}=res.data
               localStorage.setItem("token",token)
               localStorage.setItem("userinfo",JSON.stringify({username,rolename}))
               this.props.history.push("/main")
            }else{
                alert(res.data.msg)
            }

 })
    }

    render() {
        let{username,password}=this.state
        return (
            <div>
                <h3>login页面</h3>
             <input type='text' onChange={(e)=>{this.handChange("username",e.target.value)}} value={username}></input>
                <input type='password' onChange={(e)=>{this.handChange("password",e.target.value)}} value={password}></input>
                <button onClick={this.gologin}>登录</button>
            </div>
        )
    }
}
