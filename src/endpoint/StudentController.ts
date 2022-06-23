import { Request, Response } from "express";
import { StudentDataBase } from "../data/StudentDataBase";
import { StudentModel } from "../model/StudentModel";

export class StudentController {
    public async createStudent(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, birthDate, classID, hobby } = req.body
            const studentInfo = new StudentModel(name, email, birthDate, classID, hobby)

            if (!name || !email || !birthDate || !classID || !hobby) {
                throw new Error("Preencha os campos corretamente.")
            }
            await new StudentDataBase().insertStudent(studentInfo)
            res.status(200).end()
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}