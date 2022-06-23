import { TeacherModel } from "../model/TeacherModel";
import { DataBase } from "./DataBase";

export class TeachersDataBase extends DataBase {
    public async insertTeacher(teacher: TeacherModel): Promise<void>{
        const {name, email, birthDate, classID, specs} = teacher.getTeacherInfo()
        try {
            console.log( teacher.getTeacherInfo())
            await this.getConnection().insert({
                name: name,
                email: email,
                birth_date: birthDate,
                class_id: classID
            }).into("Teacher")
        } catch (error: any) {
            throw new Error("Erro ao criar Docente no Banco de dados")
        }
    }
}