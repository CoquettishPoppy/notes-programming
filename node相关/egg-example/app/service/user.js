'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  // 新增用户
  async add(req) {
    const { ctx } = this;
    const params = {
      userName: req.userName,
      age: req.age || 0,
    };
    return ctx.model.User.create(params).then(res => {
      return {
        success: true, msg: res, code: 0,
      };
    }).catch(err => {
      return { success: false, err };
    });
  }
  // 查询
  async query() {
    const { ctx } = this;
    return ctx.model.User.find({});
  }
  // 删除
  async delete(req) {
    const { ctx } = this;
    return ctx.model.User.remove(req).then(res => {
      return {
        success: true, msg: res, code: 0,
      };
    }).catch(err => {
      return { success: false, err };
    });
  }
  // 修改
  async update(req) {
    const { ctx } = this;
    console.log(req);
    return ctx.model.User.update({ userName: req.userName }, {
      age: req.age,
    }).then(res => {
      return {
        success: true, msg: res, code: 0,
      };
    }).catch(err => {
      return { success: false, err };
    });
  }
}
module.exports = UserService;
