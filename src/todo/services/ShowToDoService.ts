import { ToDo } from "../entities/ToDo";
import ToDoRepository from "../repositories/todo.repository";
import { getCustomRepository } from "typeorm";

interface IRequest{
    id: string;
}

class ShowToDoService {
    public async execute({id}: IRequest): Promise<ToDo>{
        const todoRepository = getCustomRepository(ToDoRepository);

        const todo = await todoRepository.findById(id)              

        return todo;
    }    
} export default ShowToDoService;