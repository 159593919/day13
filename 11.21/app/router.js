'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //登录
  router.post('/api/login',controller.home.login)
  //权限
  router.get("/api/token",controller.home.list)
};
