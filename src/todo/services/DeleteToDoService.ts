import ToDoRepository from "../repositories/todo.repository";
import { getCustomRepository } from "typeorm";

interface IRequest{
    id: string;
}

class DeleteToDoService {
    public async execute({id}: IRequest): Promise<void>{
        const todoRepository = getCustomRepository(ToDoRepository);

        const todoExists = await todoRepository.findById(id);

        if(!todoExists){
            throw new Error(`Não há ToDo com o id: ${id}`);
        }

        await todoRepository.remove(todoExists);
    }
} export default DeleteToDoService;