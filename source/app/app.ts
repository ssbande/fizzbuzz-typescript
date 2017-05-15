import * as restify from 'restify';
import * as controller from './controllers/FizzBuzzController';
const app = restify.createServer({
  name: 'Shreyas_Bande_Type_Script'
});

app.use(restify.bodyParser({ mapParams: false }));
app.use(restify.queryParser());
app.pre(restify.pre.sanitizePath());
app.use(restify.gzipResponse({ memLevel: 9, level: 4 }));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// Adding all the routes required for the APP.
app.get('/getList/:id', controller.createList);

const port = process.env.PORT || 3200;
app.listen(port);

console.log('try this: curl http://localhost:' + port);