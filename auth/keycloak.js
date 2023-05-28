const session = require('express-session');
const Keycloak = require('keycloak-connect');

let _keycloak
var memoryStore = new session.MemoryStore();

var keycloakConfig = {
    clientId: 'tick-it-backend',
    bearerOnly: true,
    serverUrl: 'https://auth.greif.me/auth',
    realm: 'development',
    credentials: {
        secret: process.env.KEYCLOAK_CLIENT_SECRET
    }
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    } 
    else {
        try {
            console.log("Initializing Keycloak...");
            
            _keycloak = new Keycloak({ }, keycloakConfig);
            return _keycloak;
        } catch (err) {
            console.log("could not initialize keycloak", err)
        }
    }
}

function getKeycloak() {
    if (!_keycloak){
        console.error('Keycloak has not been initialized. Please called init first.');
    } 
    return _keycloak;
}

module.exports = { initKeycloak, getKeycloak }