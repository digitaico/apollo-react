const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const { createStore } = require('./utils');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({ 
	typeDefs,
	dataSources: () => ({
		LaunchAPI: new LaunchAPI(),
		UserAPI: new UserAPI({ store })
	})
});

server.listen().then(() => {
	console.log( `  
		Server is running!
		Listening on port 400
	`);
});
