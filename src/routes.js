import { Router } from 'express';

import OngValidator from './app/middlewares/OngValidator';
import AuthValidator from './app/middlewares/AuthValidator';
import ParamsValidator from './app/middlewares/ParamsValidator';
import PagesValidator from './app/middlewares/PagesValidator';
import SessionValidator from './app/middlewares/SessionValidator';
import IncidentValidator from './app/middlewares/IncidentValidator';
import UpdateValidator from './app/middlewares/UpdateValidator';

import SessionController from './app/controllers/SessionController';
import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';

const routes = new Router();

routes.post('/sessions', SessionValidator, SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator, OngController.store);

routes.get('/incidents', PagesValidator, IncidentController.index);
routes.post(
  '/incidents',
  AuthValidator,
  IncidentValidator,
  IncidentController.store
);
routes.put(
  '/incidents/:id',
  UpdateValidator,
  ParamsValidator,
  IncidentController.update
);
routes.delete(
  '/incidents/:id',
  AuthValidator,
  ParamsValidator,
  IncidentController.delete
);

routes.get('/profile', AuthValidator, ProfileController.index);

export default routes;
