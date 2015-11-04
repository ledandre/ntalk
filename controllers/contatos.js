module.exports = function(app) {
	var ContatoController = {
		index: function(request, response) {
			var usuario = request.session.usuario;
			var params = {usuario: usuario};

			response.render('contatos/index', params);
		}
	}

	return ContatoController;
}