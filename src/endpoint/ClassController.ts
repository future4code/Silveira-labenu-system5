import { Request, Response } from "express";
import { ClassDataBase } from "../data/ClassDataBase";
import { ClassModel } from "../model/ClassModel";

export class ClassController {
    public async createClass(req: Request, res: Response): Promise<void> {
        try {
            const { name, module } = req.body;
            const classInfo = new ClassModel(name, module);

            if(!name || !module) {
                res.statusCode = 422;
                throw new Error("Nome ou módulo de turma inválido");
            }
    
            await new ClassDataBase().insertClass(classInfo);
    
            res.status(201).end();
    
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public async getClasses(req: Request, res: Response): Promise<void> {
        try {
            const classes = await new ClassDataBase().selectClasses();

            res.status(200).send(classes);

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };

    public async updateClassModule(req: Request, res: Response): Promise<void> {
        try {
            const id = Number(req.params.id);
            const module = Number(req.query.module);

            if(!module) {
                res.statusCode = 422;
                throw new Error("Valor de módulo inválido.");
            }

            await new ClassDataBase().updateClassModule(module, id);

            res.status(200).end();

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    };
};