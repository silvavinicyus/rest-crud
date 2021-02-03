import { ToDo } from "../entities/ToDo";
import ToDoRepository from "../repositories/todo.repository";
import { getCustomRepository } from "typeorm";


class FindToDoService {
    public async execute(): Promise<ToDo[]>{
        const todoRepository = getCustomRepository(ToDoRepository);

        const todo = await todoRepository.find()        

        return todo;
    }    
} export default FindToDoService;