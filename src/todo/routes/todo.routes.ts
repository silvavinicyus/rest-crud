import {Router} from 'express';
import ToDoController from '../controllers/ToDoController';

const todosRoutes = Router();
const todoController = new ToDoController();

todosRoutes.get('/', todoController.index);
todosRoutes.get('/:id', todoController.show);
todosRoutes.post('/', todoController.create);
todosRoutes.put('/:id', todoController.update);
todosRoutes.delete('/:id', todoController.delete);

export default todosRoutes;