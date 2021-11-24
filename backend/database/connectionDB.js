// const mongoose = require('mongoose');

// const BD = process.env.Db_Connection;

// const dbConnection = async () => {
// 	try {
// 		await mongoose.connect(BD);
// 		console.log('DB online');
// 	} catch (error) {
// 		console.log(error);
// 		throw new Error('Error al inicializar DB');
// 	}
// };

// module.exports = {
// 	dbConnection,
// };

const mongoose = require('mongoose')

// const DB = process.env.Db_Connection;
const urlDB ='mongodb+srv://cado:codigo5@codigo-5.2dqta.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(urlDB);
// mongoose.connect(DB)
const mongoDB = mongoose.connection;
mongoDB.on('open', _ =>{
    console.log("Database is online")
})