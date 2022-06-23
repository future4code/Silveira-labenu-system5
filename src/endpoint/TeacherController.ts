import { Request, Response } from "express";
import { TeachersDataBase } from "../data/TeachersDataBase";
import { TeacherModel } from "../model/TeacherModel";

export class TeacherController {
    public async createTeacher(req: Request, res: Response){
        try {
            const {name, email, birthDate, classID, specs} = req.body
            const teacher = new TeacherModel(name,email,birthDate,classID,specs)

            if(!name || !email || !birthDate || !classID || !specs ){
                res.statusCode = 400
                throw new Error("Uma ou várias informações faltando")
            }

            if( specs !== ("JS" || "CSS" || "React" || "Typescript" || "POO")){
                res.statusCode = 400
                throw new Error("Especialidade inválida")
            }

            await new TeachersDataBase().insertTeacher(teacher)
            res.status(201).send("Docente criado com sucesso!")

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }
}