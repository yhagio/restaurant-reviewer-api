### Node.s Express API for Restaurant Reviewer

#### Frontend Repo
- https://github.com/yhagio/restaurant-reviewer-client

#### To run locally
```
git clone https://github.com/yhagio/restaurant-reviewer-api
cd restaurant-reviewer-api
npm install
```
Run mongodb in a tab
```
mongod 
```
ANd in another tab
```
npm run start
```

### To test locally
Run mongodb
```
mongod 
```
in another terminal tab
```
npm run test
```

**Features**:
- JSON Web Token authentication

#### Resources
- [JSON Web Token Introduction](https://jwt.io/introduction/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [express-jwt](https://github.com/auth0/express-jwt)

Calculate Average
- http://stackoverflow.com/questions/26810599/calculating-average-in-mongoose


#### To Deploy on Heroku
```
heroku login
heroku create
git push heroku master
```
Add MONGOLAB addon

Hosted: https://cryptic-ravine-10979.herokuapp.com/