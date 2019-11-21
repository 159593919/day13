import React, { Component } from 'react'
import Home from './home'
import Myorder from './myorder'
import Orderjingli from './orderjingli'
import Ordermang from './ordermange'
import Orderroom from './orderroom'
import axios from 'axios'
import '../../style.css'
import {Route,Switch,NavLink,Redirect} from 'react-router-dom'
export default class componentName extends Component {
    state={
        username:"",
        rolename:"",
        meunlist:[]
    }
    componentDidMount(){
        if(!localStorage.getItem("token")){
this.props.history.push("/login")

        }else{
let {username,rolename}=JSON.parse(localStorage.getItem("userinfo"))
this.setState({
    username,
    rolename
    
})
let token=localStorage.getItem("token")
axios.get("/api/token",{headers:{token}}).then(res=>{
   
    if(res.data.code===1){
        
        this.setState({
            meunlist:res.data.data
            
        })
       
    }else{
        alert(res.data.msg)
    }
})

        }
        }
        goin=()=>{
localStorage.clear("token")
this.props.history.push("/login")
        }
    render() {
        let {username,rolename,meunlist}=this.state
       return (
            <div className='wrap'>
                <header>
                    {username}-{rolename} <button onClick={this.goin}>退出</button>
                </header>
                <div className='main'>
                    <div className='left'>
                <NavLink to='/main/home' tag='p'>首页</NavLink>
                <NavLink to='/main/myorder' tag='p'>我的预定</NavLink>
                <NavLink to='/main/orderjingli' tag='p'>预定审批(项目经理)</NavLink>
                <NavLink to='/main/ordermang' tag='p'>预定审批(管理员)</NavLink>
                <NavLink to='/main/orderroom' tag='p'>预定会议室</NavLink>
                    </div>
                    <div className='right'>

<Switch>
    <Route path='/main/home' component={Home}></Route>
    <Route path='/main/myorder' component={Myorder}></Route>
    <Route path='/main/orderjingli' component={Orderjingli}></Route>
    <Route path='/main/ordermang' component={Ordermang}></Route>
    <Route path='/main/orderroom' component={Orderroom}></Route>
    <Redirect from="/main" to="/main/home"></Redirect>
</Switch>
                    </div>
                </div>
            </div>
        )
    }
}
