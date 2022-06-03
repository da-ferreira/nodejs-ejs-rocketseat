const app = require('express')();

// Informando ao Express que o motor de renderização de HTML será o EJS
app.set('view engine', 'ejs');

// A resposta ao acessar a rota '/' será renderizar o index na pasta views
app.get('/', function (req, res) {
	const items = [
		{ title: 'D', message: 'Lorem' },
		{ title: 'E', message: 'Lorem' },
		{ title: 'M', message: 'Lorem' },
		{ title: 'A', message: 'Lorem' },
		{ title: 'I', message: 'Lorem' },
		{ title: 'S', message: 'Lorem' },
	];

	const subtitle = 'Uma linguagem de modelagem para criação de páginas HTML utilizando JS';

	res.render('pages/index', { qualitys: items, subtitle: subtitle }); // Passando um objeto
});

app.get('/about', function (req, res) {
	res.render('pages/about');
});

// Iniciando o servidor (listen fica ouvindo uma porta)
app.listen(8080, () => {
	console.log('Rodando na porta 8080');
});
