const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function (req, res) {
    console.log('Запрос по адресу:', req.url);
    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Ошибка при загрузке файла');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Страница не найдена');
    }
}).listen(8080, () => {
    console.log('Сервер запущен на http://localhost:8080');
});


/*function errorHandling(err) {
    if (err) {
        return console.error('Oooops '+ err);
    }
}*/
/*let result = fs.readFileSync('./some.txt', 'utf8');
console.log(result);
fs.writeFileSync('./some.txt', result +'\nExample test')*/

/*
fs.mkdir('./images' , { recursive: true }, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log('Directory created successfully!');
    fs.writeFile('./images/image.txt', 'Hello', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('File created successfully!');
    })
});
*/

/*fs.unlink('./images/image.txt', (err) => {
    if (err) {
        return console.error(err);
    }
});*/
/*
fs.rm('./images', { recursive: true },errorHandling);
*/
