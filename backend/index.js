
require('./database/connectionDB')
require('dotenv').config();

const typeDefs = require('./typeDef')
const resolvers = require('./resolver')

// const {dbConnection} = require('./database/connectionDB');

// const Port = process.env.Port;


const express = require('express')
const { ApolloServer } = require('apollo-server-express')


/** Base de datos */
// dbConnection();

const iniciarServidor = async () => {
    const api = express();
    const apollo = new ApolloServer(
        {
            typeDefs,
            resolvers
        });
    await apollo.start()
    apollo.applyMiddleware({ app: api })
    api.use((request, response) => {
        response.send('Hola')
    })
    api.listen('9092', () => console.log('Inicio server'))
}
iniciarServidor()