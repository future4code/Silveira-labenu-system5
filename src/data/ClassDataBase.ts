import { DataBase } from "./DataBase";
import { ClassModel } from "../model/ClassModel";

export class ClassDataBase extends DataBase {
    public async insertClass(classInfo: ClassModel): Promise<void> {
        const {getName, getModule} = classInfo;

        try {
            await DataBase.connection("Class").insert({
                name: getName(),
                module: getModule()
            });

        } catch (error: any) {
            throw new Error("Erro ao inserir class no banco de dados");
        }
    };
};