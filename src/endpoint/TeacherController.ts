import { request, Request, Response } from "express";
import { TeachersDataBase } from "../data/TeachersDataBase";
import { TeacherModel } from "../model/TeacherModel";

export class TeacherController {
    public async createTeacher(req: Request, res: Response){
        try {
            const {name, email, birthDate, classID, specs} = req.body

            const reverseDate = birthDate.split("/").reverse().join("-")

            if(!name || !email || !birthDate || !classID || !specs ){
                res.statusCode = 400
                throw new Error("Uma ou várias informações faltando")
            }

            specs.map((spec: string)=> {
                if( spec == "JS" || spec == "CSS" || spec == "React" || spec == "Typescript" || spec == "POO"){
                    
                }else{
                    res.statusCode = 400
                    throw new Error("Uma ou mais Especialidades inválidas")
                }
            })

                const teacher = new TeacherModel(name,email,reverseDate,classID,specs)
                await new TeachersDataBase().insertTeacher(teacher)
                res.status(201).send("Docente criado com sucesso!")

        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }

    public async getAllTeachers(req: Request, res: Response){
        try {
            const teachers = await new TeachersDataBase().requestTeachers()
            res.send(teachers)
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }

    public async changeTeacherClass(req: Request, res: Response){
        try {
            const teacherID = Number(req.params.id)
            const classID = Number(req.query.class)

            if( !teacherID || !classID){
                res.statusCode
                throw new Error("Faltando informação nos parâmetros ou na querry")
            }

            await new TeachersDataBase().updateTeacherClass(teacherID,classID)
            res.status(200).send("Turma de docente trocada com sucesso")
        } catch (error: any) {
            res.status(res.statusCode !== 200 ? res.statusCode : 500).send(error.sqlMessage || error.message);
        }
    }
}