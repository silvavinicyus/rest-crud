import { ToDo } from "../entities/ToDo";
import ToDoRepository from "../repositories/todo.repository";
import { getCustomRepository } from "typeorm";

interface IRequest {
    id: string;
    name: string;
    hours: string;
}

class UpdateToDoService {
    public async execute({id, name, hours}: IRequest): Promise<ToDo>{
        const todoRepository = getCustomRepository(ToDoRepository);

        const todo = await todoRepository.findById(id);

        if(!todo){
            throw new Error(`Não há ToDo com o id: ${id}`);
        }

        todo.name = name;
        todo.hours = hours;

        await todoRepository.save(todo);

        return todo;
    }    
} export default UpdateToDoService;