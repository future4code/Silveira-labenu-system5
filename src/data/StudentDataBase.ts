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
            await this.getConnection()
                .insert({
                    name: hobby
                }).into("Hobby")
        } catch (error: any) {
            console.log(error.sqlMessage)
        }
    }

    public async selectStudents(): Promise<StudentModel[]> {
        try {
            return await this.getConnection().select("*").from("Student")
        } catch (error: any) {
            throw new Error("Erro ao pegar dados dos alunos")
        }
    }
}