'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/user/add', controller.user.add);
  router.get('/user/query', controller.user.query);
  router.post('/user/delete', controller.user.delete);
  router.post('/user/update', controller.user.update);
};
