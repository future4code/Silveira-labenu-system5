type Hobby = {
    name: string
}

export class StudentModel {
    constructor(
        private name: string,
        private email: string,
        private birth_date: string,
        private class_id: number,
        private hobby: Hobby[]
    ) { };
    public getStudentInfo() {
        return {
            name: this.name,
            email: this.email,
            birthDate: this.birth_date,
            classID: this.class_id,
            hobby: this.hobby
        }
    }
}