export class ClassModel {    
    constructor(
        private name: string,
        private email: string,
        private birth_date: string,
        private class_id: number,
        private specs: string
    ) {};

    public getTeacherInfo(){
        return {
            name: this.name,
            email: this.email,
            birthDate: this.birth_date,
            classID: this.class_id,
            specs: this.specs
        }
    }

};