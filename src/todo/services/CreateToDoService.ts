import { ToDo } from "../entities/ToDo";
import ToDoRepository from "../repositories/todo.repository";
import { getCustomRepository } from "typeorm";

interface IRequest {
    name: string;
    hours: string;
}

class CreateToDoService {
    public async execute({name, hours}: IRequest): Promise<ToDo>{
        const todoRepository = getCustomRepository(ToDoRepository);

        const todo = todoRepository.create({
            name,
            hours
        });

        await todoRepository.save(todo);

        return todo;
    }    
} export default CreateToDoService;