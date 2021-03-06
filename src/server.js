// Servidor
const express = require('express');
const server = express();

const {pageGiveClasses, pageLanding, pageStudy, saveClasses} = require('./pages');

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true
})

// Receber dados do req.body
server.use(express.urlencoded({extended: true}));
// arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"));
// rotas da aplicação
server.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start server
.listen(5500);

