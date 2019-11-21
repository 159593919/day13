const Service = require('egg').Service;

class UserService extends Service {
  async login(username,password) {
    const user = await this.app.mysql.query('select * from userlist where username=? and password=?',[username,password]);
    return user;
  }
  async userlist(roleid){
      const data=await this.app.mysql.query(`select * from menulist where power like'%${roleid}%'`)
      return data
  }
}

module.exports = UserService;