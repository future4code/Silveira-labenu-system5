import { Request, Response } from "express";
import { StudentDataBase } from "../data/StudentDataBase";
import { StudentModel } from "../model/StudentModel";

export class StudentController {
    public async createStudent(req: Request, res: Response): Promise<void> {
        try {
            const { name, email, birthDate, classID, hobby } = req.body

            if (!name || !email || !birthDate || !classID || !hobby) {
                throw new Error("Preencha os campos corretamente.")
            }

            const reverseDate = birthDate.split("/").reverse().join("-")
            const studentInfo = new StudentModel(name, email, reverseDate, classID, hobby)
            await new StudentDataBase().insertStudent(studentInfo)
            res.status(200).end()
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

    public async getStudents(req: Request, res: Response): Promise<void> {
        try {
            const nome = req.query.nome as string
            if (!nome) {
                throw new Error("Estudante não encontrado")
            }
            const result = await new StudentDataBase().selectStudents(nome)
            res.status(200).send(result);
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }

    public async updateStudent(req: Request, res: Response): Promise<void> {
        try {
            const studentID = Number(req.params.id)
            const classID = Number(req.query.class)

            if (!studentID || !classID) {
                throw new Error("Preencha corretamente os parâmetros")
            }
            await new StudentDataBase().updateStudantClass(studentID, classID)
            res.status(200).send("Aluno tranferido de turma!")
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }
}