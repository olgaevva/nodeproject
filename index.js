// подключение express
const express = require("express");
const path = require('path');
const port = 8080

// создаем объект приложения
const app = express();
// определяем обработчик для маршрута "/"
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(request, response){
    response.sendFile(path.join(__dirname,'public','index.html'));
});
// начинаем прослушивать подключения на 3000 порту
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})