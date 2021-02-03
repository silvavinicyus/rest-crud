import { ToDo } from "../entities/ToDo";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ToDo)
class ToDoRepository extends Repository<ToDo>{
    public async findById(id: string): Promise<ToDo>{
        const todo = await this.findOne({
            where: {id}
        });

        if(!todo){
            throw new Error(`Não há ToDo com o id: ${id}`);
        }

        return todo;
    }
} export default ToDoRepository;