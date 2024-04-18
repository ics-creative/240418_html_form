const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8",
    });
        if ('/submit' == request.url && 'POST' == request.method) {
            let data = "";
            let view = "";
            request.on("data", function (_argdata) {
                data += _argdata;
            });
            request.on("end", function() {
                const params = new URLSearchParams(data);
                view += '<p>氏名： '+ params.get('name') + '</p>';
                view += '<p>メールアドレス： '+ params.get('email') + '</p>';
                view += '<p>電話番号： '+ params.get('tel') + '</p>';
                view += '<p>性別： '+ params.get('gender') + '</p>';
                view += '<p>生年月日： ' + params.get('birthday') + '</p>';
                view += '<p>志望動機： '+ params.get('reason') + '</p>';
                view += '<p>ポートフォリオ： '+ params.get('portfolio') + '</p>';
                view += '<p>その他： '+ params.get('other') + '</p>';
                response.end(view);
            })
        }
});

server.listen(3000);
