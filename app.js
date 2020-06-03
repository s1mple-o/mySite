// 导入express模块
const express = require("express");

// 导入模板模块
const template = require("art-template");

// 导入路径处理模块
const path = require("path");

// 创建网站服务
const app = express();

// 设置模板文件默认路径
app.set("views", path.join(__dirname, "view"));

// 设置模板默认后缀
app.set("view engine", "art");

// 模板后缀匹配
app.engine("art", require("express-art-template"));

// 开发静态文件
app.use(express.static(path.join(__dirname, "public")));

// 路由匹配路径
app.use("/", require("./router/index"));

app.listen(3000);
console.log('服务器已运行...');