import {Request, Response} from 'express';
import CreateToDoService from '../services/CreateToDoService';
import DeleteToDoService from '../services/DeleteToDoService';
import FindToDoService from '../services/FindToDoService';
import ShowToDoService from '../services/ShowToDoService';
import UpdateToDoService from '../services/UpdateToDoService';

export default class ToDoController{
    public async index(request: Request, response: Response): Promise<Response>{
        const findTodo = new FindToDoService();

        const todos = await findTodo.execute();

        return response.json(todos);
    }

    public async show(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const showTodo = new ShowToDoService();
        

        const todo = await showTodo.execute({id});

        return response.json(todo);        
    }

    public async create(request: Request, response: Response): Promise<Response>{
        const {name, hours} = request.body;

        const createTodo = new CreateToDoService();

        const product = await createTodo.execute({name, hours});

        return response.json(product);
    }

    public async update(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;
        const {name, hours} = request.body;

        const updateTodo = new UpdateToDoService();

        const todo = await updateTodo.execute({id, name, hours});

        return response.json(todo);
    }

    public async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params;

        const deleteTodo = new DeleteToDoService();

        await deleteTodo.execute({id});

        return response.status(204).json([]);
    }
}