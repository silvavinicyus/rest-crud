import {Router} from 'express';
import todosRoutes from '../../todo/routes/todo.routes';

const routes = Router();

routes.use('/todo', todosRoutes);

export default routes;