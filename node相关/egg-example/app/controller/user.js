'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  // http://127.0.0.1:7001/user/add data={userName=王璐&age=18}
  async add() {
    const { ctx } = this;
    const req = ctx.request.body;
    console.log(req);
    const result = await ctx.service.user.add(req);
    ctx.body = result;
  }
  // http://127.0.0.1:7001/user/query
  async query() {
    const { ctx } = this;
    const result = await ctx.service.user.query();
    ctx.body = result;
  }
  // 根据userName删除 http://127.0.0.1:7001/user/add?userName=王璐
  async delete() {
    const { ctx } = this;
    const req = ctx.query;
    const result = await ctx.service.user.delete(req);
    ctx.body = result;
  }
  // 根据userName修改 http://127.0.0.1:7001/user/update?userName=王璐5&age=12
  async update() {
    const { ctx } = this;
    const req = ctx.query;
    const result = await ctx.service.user.update(req);
    ctx.body = result;
  }
}
module.exports = UserController;
