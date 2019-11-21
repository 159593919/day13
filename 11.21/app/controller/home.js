'use strict';

const Controller = require('egg').Controller;
const jwt=require("jsonwebtoken")

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login(){
    const {ctx}=this;
    let {username,password}=ctx.request.body
    if(username&&password){
      try{
        let data=await this.service.index.login(username,password)
        if(data.length){
let token=jwt.sign({username,password,roleid:data[0].roleid},"key_",{expiresIn:"1h"})
  ctx.body={
    code:1,
    token,
    rolename:data[0].rolename
  }
          }else{
            ctx.body={
              code:0,
              msg:"用户名或密码错误"
            }
          }

        }catch(e){
        ctx.body={
  code:2,
  msg:e
        }
        }
      }else{
        ctx.body={
          code:3,
          mse:'参数丢失'
        }

      }
    }
    async list(){
      const {ctx}=this;
      // console.log(ctx)
      let token=ctx.request.header.token
      let info=jwt.verify(token,"key_")
     try{
       let usertoken=await this.service.index.userlist(info.roleid)
      ctx.body={
        code:1,
        usertoken

      }
     

     }catch(e){
       ctx.body={
         code:2,
         msg:e
       }
     }
    }
  }

module.exports = HomeController;
