const http = require("http");

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  if ("/submit" == request.url && "POST" == request.method) {
    let requestData = "";
    let responseView = "";

    request.on("data", (chunk) => {
      requestData += chunk;
    });

    request.on("end", () => {
      const params = new URLSearchParams(requestData);
      responseView += "<p>氏名： " + params.get("name") + "</p>";
      responseView += "<p>メールアドレス： " + params.get("email") + "</p>";
      responseView += "<p>電話番号： " + params.get("tel") + "</p>";
      responseView += "<p>性別： " + params.get("gender") + "</p>";
      responseView += "<p>生年月日： " + params.get("birthday") + "</p>";
      responseView += "<p>志望動機： " + params.get("reason") + "</p>";
      responseView += "<p>ポートフォリオ： " + params.get("portfolio") + "</p>";
      responseView += "<p>その他： " + params.get("other") + "</p>";
      response.end(responseView);
    });
  }
});

server.listen(3000);
