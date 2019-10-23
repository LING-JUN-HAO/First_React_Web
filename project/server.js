//建立Express伺服器
var express = require('express');
//使用request模塊向http請求
var request = require('request');
//fs模塊用於對系統文件及目錄進行讀寫操作
var fs = require('fs');
//使用Express伺服器
var app = express();

//static中介軟體函數可使用(css,javascript,影像)
app.use(express.static('dist'));
app.use(express.static('src/View'));

app.get('/', function(request,response){
  //第一個參數是狀態代碼，200表示一切正常，第二個參數是包含響應頭的對象
  response.writeHeader(200,{'Content-Type':'text/html/js'});
  //Sync 表示是同步方法讀取檔案
  response.write(fs.readFileSync('dist/index.html'));
  response.end();
});

//監聽port 9000
app.listen(9000, function(error){
  if(error){
      console.error(error)
  }else{
      console.info("Server is run on 9000")
  }
})

