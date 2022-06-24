import { DataBase } from "./DataBase";
import { StudentModel } from "../model/StudentModel";

export class StudentDataBase extends DataBase {
    public async insertStudent(studentInfo: StudentModel): Promise<void> {
        const { name, email, birthDate, classID, hobby } = studentInfo.getStudentInfo();
        try {
            await this.getConnection()
                .insert({
                    name: name,
                    email: email,
                    birth_date: birthDate,
                    class_id: classID,
                }).into("Student")

            hobby.map(async (item) => {
                await this.getConnection()
                    .insert({
                        name: item
                    })
                    .into("Hobby")
                const studentID = await this.getConnection()
                    .select("id")
                    .from("Student")
                    .where({
                        name: name
                    })

                const hobbyID = await this.getConnection()
                    .select("id")
                    .from("Hobby")
                    .where({
                        name: item
                    })

                await this.getConnection()
                    .insert({
                        student_id: studentID[0].id,
                        hobby_id: hobbyID[0].id
                    })
                    .into("Student_Hobby")
            })
        } catch (error: any) {
            throw new Error("Erro ao inserir aluno no banco de dados")
        }
    }

    public async selectStudents(nome: string): Promise<StudentModel[]> {
        try {
            return await this.getConnection()
                .select("*")
                .from("Student")
                .where("name", "LIKE", nome)
        } catch (error: any) {
            throw new Error("Erro ao pegar dados dos alunos")
        }
    }

    public async updateStudantClass(studentID: number, classID: number): Promise<void> {
        try {
            await this.getConnection()
                .update({ class_id: classID })
                .where({ id: studentID })
                .into("Student")
        } catch (error: any) {
            throw new Error("Erro ao mudar aluno de turma")
        }
    }
}