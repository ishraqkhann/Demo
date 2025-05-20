import { Request, Response } from "express";
import { getManager } from "typeorm";
import { Role } from "../entity/role.entity";
import { AppDataSource } from "../../ormconfig";

const roleRepository = AppDataSource.getRepository(Role);

/**
 * Fetch all roles.
 * @param req - The request object.
 * @param res - The response object.
 */
export const fetchRole = async (req: Request, res: Response) => { //unexpected token [E0054]
    try {
        const roles = await roleRepository.find();
        res.status(200).send(roles);
    } catch (error) {
        res.status(500).send(error);
    }
};