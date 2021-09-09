# Marketplacepohubi
 

An attempt to a MarketPlace Store for every Human registered on the ProofOfHumanity registry!

## Preface (Why MarketPlace ?) 

The barter was the first means of payment in the history of mankind, dating back to the Neolithic. Barter was based on the consensus between the two parties to give value
to things. Cows, salt, pepper and feathers were some "coin-objects" with a consensual value, then came the coins and little bit short after the bills used in MarketPlaces 
such as Amazon, MercadoLibre, Alibaba, etc that now are the reason that give main value to this payment method.

As ProofOfHumanity mints 1 $UBI token per hour for every human registered in the blockchain, with this MarketPlace working on the Profile of each registered human we can give 
value so they can exchange for goods and service(also later NFTs).

## How will work ? 

Every Human registered on ProofOfHumanity registry will have access with his address to the store and will be able to use UBI(and other ERC20/criptos) to buy and sell goods and services, using oracles to keep products price stable, later also NFTs. To maintain this MP, a small amount UBI will we charged for every transaction, half to maintain and half to burn. 

👍 Likes / Support (Or how to come up with excuses to burn UBI)🔥🔥🔥

## Notice 
This is a work in progress to learn about building a fully functioning Decentralized app. PRs will be accepted to help improving the architecture.

### Raíz
```sh
$ npx hardhat node
$ npx hardhat run --network localhost scripts/deploy.js
```

### Frontend
```sh
$ cd /frontend
$ npm install
$ npm start
```

### Backend

```sh
$ cd /backend
$ create dir public/uploads (if necessary)
$ npm install
$ create file .env and set the variable MONGODB_URl with the url of the mongo database, and JWT_PRIVATE_KEY with a private key to hashing the token
$ npm run dev

```
Example of a .env file
```
MONGODB_URL=mongodb+srv://<username>:<password>@cluster0.dn7hp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
JWT_PRIVATE_KEY=<anyhashyouwant>
```


Parts of the credits go to Julien(https://eattheblocks.com/)
https://www.youtube.com/watch?v=f5npM1PvoyE&t=816s



