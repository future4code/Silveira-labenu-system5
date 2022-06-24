import { app } from "./app";
import { ClassController } from "./endpoint/ClassController";
import { StudentController } from "./endpoint/StudentController";
import { TeacherController } from "./endpoint/TeacherController";

const classController = new ClassController();
const studentController = new StudentController();
const teacherController = new TeacherController();


app.post("/class", classController.createClass);

app.post("/teacher", teacherController.createTeacher);

app.post("/student", studentController.createStudent);

app.get("/class", classController.getClasses);

app.get("/teacher", teacherController.getAllTeachers);

app.get("/student", studentController.getStudents);

app.patch("/class/:id", classController.updateClassModule);

app.patch("/student/:id", studentController.updateStudent);

app.patch("/teacher/:id", teacherController.changeTeacherClass);


