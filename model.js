var bcrypt = require('bcrypt');
var pg = require('pg');

var saltRounds = 10;


var dbPath = "postgres://localhost:5432/comunica"
var connection = new pg.Client();

var myStorePasswd = function (passwd)
{
	bcrypt.hash(passwd,saltRounds).then(function (hash){
		
		
	})
}


module.exports=
{
	storePasswd : myStorePasswd
};
