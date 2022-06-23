import { Request, Response } from "express";
import { ClassDataBase } from "../data/ClassDataBase";
import { ClassModel } from "../model/ClassModel";

export const createClass = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, module } = req.body;
        const classInfo = new ClassModel(name, module);

        await new ClassDataBase().insertClass(classInfo);

        res.status(201).end();

    } catch (error: any) {
        res.status(res.statusCode || 500).send(error.sqlMessage || error.message);
    }
};