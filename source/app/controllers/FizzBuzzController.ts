import * as restify from 'restify';
import { FizzBuzzService as service } from './../services/FizzBuzzService';

export function createList(req: restify.Request, res: restify.Response) {
  try {
    let num = req.params.id;

    const svc = new service();
    const result = svc.generateList(num);
    return res.send(result);
  } catch (e) {
    console.log(e);
  }
}