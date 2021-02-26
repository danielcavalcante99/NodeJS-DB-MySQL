//Arquivo: ConexaoDB.js

//Autor: Daniel Henrique Cavalcante da Silva

//Nesse arquivo iremos configurar o NodeJS para acessar o banco de dados

//Instale no terminal o mysql: npm init mysql --save
var mysql = require('mysql');

//Importando o arquivo DadosDB.js
var dados = require('./DadosDB.js');

class ConexaoDB {

        static select(query){

        const DB = mysql.createConnection(dados.DBConfig);   

        DB.connect((err) => {
            if (err) {
                console.log('Erro ao conectar ao banco de dados ...', err);
                return
            }
            console.log('Conexão estabelecida!');
        });


        DB.query(query, (err, exibirQuery) => {
            if (err) throw err
        
            //Aqui será mostrado o resultado do seu SELECT
        console.log('Resultado: ', exibirQuery, '\n\n');
        });


        DB.end((err) => {
            if(err) {
                console.log('Erro ao encerrar a conexão ...', err);
                return 
            }
            console.log('A conexão foi finalizada ...');
        });

    }
}

//Aqui iremos exportar a classe ConexaoDB para que outros arquivos possam acessa-la
module.exports.ConexaoDB = ConexaoDB;