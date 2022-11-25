import  express  from "express";

const configViewEngine = (app) =>{
    // cấu hình view engine sử dụng ejs
    app.set('view engine','ejs');
    //cấu hình thư mục chứa các file ejs
    app.set('views', './src/views')
}

export default configViewEngine;