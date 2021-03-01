import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

class UserController {
    async create(request: Request, response: Response){
        const { name, email } = request.body;

        const userRepository = getCustomRepository(UsersRepository);


        const usersAlreadyExists = await userRepository.findOne({
            email
        })

        if(usersAlreadyExists){
            return response.status(400).json({
                error: "Usuario ja existe com esse email!"
            });
        }
        
        const user = userRepository.create({
            name , email
        })

        await userRepository.save(user);
        return response.status(201).json(user);
    }
}
export { UserController };
