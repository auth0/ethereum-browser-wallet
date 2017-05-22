# Auth0 Browser Wallet

The purpose of this project is to have a easy way to map primary address and secondary address.

## Main project deployment
Install dependencies:

```script
npm install
```
* put your certificates and rsa keys in the config directory
  * config/certs should contain the following files:
    * server.crt
	* server.csr
	* server.key

Run:

```script
node app.js
```

Go to:

`http://localhost:3003/wallet`