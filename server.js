const app = require('express')();

// Informando ao Express que o motor de renderização de HTML será o EJS
app.set('view engine', 'ejs');

// A resposta ao acessar a rota '/' será renderizar o index na pasta views
app.get('/', function (req, res) {
	res.render('index');
});

app.get('/sobre', function (req, res) {
	res.render('about');
});

// Iniciando o servidor (listen fica ouvindo uma porta)
app.listen(8080, () => {
	console.log('Sistema iniciado com sucesso na porta 8080');
});
