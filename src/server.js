// câu lệnh import thư viện express
// để sử dụng import trong ES6 thì ta cần phải cấu hình thêm.
// const express = require('express');  
//cấu hình thư viện babel để dùng cú pháp ES6
import express from 'express';
import configViewEngine from './config/viewEngine';

//import thư viện path
const path = require('path');
// khởi tạo một instane express
const app = express();
// 
configViewEngine(app); 
// init port
// port phân chia ranh giới giữa các app .
const port = 3000;
// tạo một Router có path là '/'
app.get('/',(req,res) => {
  res.render('index.ejs');
})
// tạo một Router có path là '/about'
app.get('/about',(req,res) => {
  res.send(`I'm Eric`);
})
//câu lệnh để chỉ app sẽ chạy trên port nào.
app.listen(port,()=>{
console.log(`Example app listening on port: ${port}` )
})
