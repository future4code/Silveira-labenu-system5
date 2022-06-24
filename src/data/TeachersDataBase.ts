import { TeacherModel } from "../model/TeacherModel";
import { DataBase } from "./DataBase";

export class TeachersDataBase extends DataBase {
    public async insertTeacher(teacher: TeacherModel): Promise<void>{
        const {name, email, birthDate, classID, specs} = teacher.getTeacherInfo()
        try {
            await this.getConnection().insert({
                name: name,
                email: email,
                birth_date: birthDate,
                class_id: classID
            }).into("Teacher")


             specs.map(async(spec: string)=>{

                const teacherID = await this.getConnection()
                .select("id")
                .from("Teacher")
                .where({
                    name
                })

                const specID = await this.getConnection()
                .select("id")
                .from("Speciality")
                .where({
                    name: spec
                })

                await this.getConnection().insert({
                    teacher_id: teacherID[0].id,
                    speciality_id: specID[0].id
                }).into('Teacher_Speciality')

            })

            

        } catch (error: any) {
            console.log(error.sqlMessage)
            throw new Error("Erro ao criar Docente no Banco de dados")
        }
    }

    public async requestTeachers(){
        try {
            return await this.getConnection()
            .select("*")
            .from("Teacher")
        } catch (error: any) {
            throw new Error("Erro ao pegar os docentes")
        }
    }

    public async updateTeacherClass(teacherID: number,newClassID: number){
        try {
            await this.getConnection()
            .update({
                class_id: newClassID
            })
            .into("Teacher")
            .where({
                id: teacherID
            })
        } catch (error: any) {
            throw new Error("Erro ao Mudar a turma do docente")
        }
    }
}