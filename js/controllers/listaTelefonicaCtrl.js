	
		angular.module("listaTelefonica").controller("listaTelefonicaCtrl",function($scope){
			$scope.app = "Lista Telefonica";
			$scope.contatos = [
				{nome: "Pedro", telefone: "99991111",data: new Date()},
				{nome: "Liz", telefone: "99992222",data: new Date()},
				{nome: "Elo", telefone: "99993333",data: new Date()}
			];
			$scope.operadoras = [
				{nome: "Oi", codigo: "31", categoria: "Celular"},
				{nome: "Vivo", codigo: "15", categoria: "Celular"},
				{nome: "Tim", codigo: "41", categoria: "Celular"},
				{nome: "Claro", codigo: "21", categoria: "Celular"},
				{nome: "GVT", codigo: "25", categoria: "Fixo"},
				{nome: "Embratel", codigo: "21", categoria: "Fixo"},
			]
			$scope.adicionarContato = function(contato){
				$scope.contatos.push(angular.copy(contato));
				delete $scope.contato;
				$scope.formContato.$setPristine();
			};
			$scope.deletarContato = function(contatos){
				$scope.contatos = contatos.filter(function(contato){
					if (!contato.selecionado) return contato;
				});
			};
			$scope.isContatoSelecioando = function(contatos){
				return contatos.some(function(contato){
					return contato.selecionado;
				});
			};
			$scope.ordenarPor = function(campo){
				$scope.criterioOrdenacao = campo;
				$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
			};
		}); 