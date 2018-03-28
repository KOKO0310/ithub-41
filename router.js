//0.加载express
const express = require('express');

//加载所有的处理函数模块
const index = require('./controllers/index');
const topic = require('./controllers/topic');
const user = require('./controllers/user');
//1.调用express.Router()创建一个路由实例
const router = express.Router();
//2.配置路由规则
//首页路由
router.get('/',index.showIndex); //渲染首页

//用户路由
router
        .get('/signin',user.showSignin) //渲染登陆页面
        .post('/signin',user.signin) //处理登陆请求
        .get('/signup',user.showSignup) //渲染注册页面
        .post('/signup',user.signup) //处理注册请求
        .post('/signout',user.signout); //处理退出请求

//话题相关
router
        .get('/topic/create',topic.showCreate) //渲染发布话题页面
        .post('/topic/create',topic.create) //处理发布请求
        .get('/topic/:topicID',topic.show) //渲染话题详情页面
        .get('/topic/:topicID/edit',topic.showEdit) //渲染编辑话题页面
        .post('/topic/:topicID/edit',topic.edit) //处理编辑话题请求
        .post('/topic/:topicID/delete',topic.delete); //处理删除话题请求
//3.导出路由对象
module.exports = router;
//4.在app.js中通过app.use(路由对象)挂载使之生效