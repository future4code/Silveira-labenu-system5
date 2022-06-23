import { DataBase } from "./DataBase";
import { ClassModel } from "../model/ClassModel";

export class ClassDataBase extends DataBase {
    public async insertClass(classInfo: ClassModel): Promise<void> {
        const {getName, getModule} = classInfo;

        try {
            await this.getConnection().insert({
                name: getName(),
                module: getModule()
            }).into("Class");

        } catch (error: any) {
            throw new Error("Erro ao inserir turma no banco de dados");
        }
    };

    public async selectClasses(): Promise<ClassModel[]> {
        try {
            return await this.getConnection().select("*").from("Class");

        } catch (error: any) {
            throw new Error("Erro ao pegar dados das turmas");
        }
    };

    public async updateClassModule(module: number, id: number): Promise<void> {
        try {
            await this.getConnection().update({module}).where({id}).into("Class");

        } catch (error: any) {
            throw new Error("Erro ao editar módulo no banco de dados");
        }
    };
};