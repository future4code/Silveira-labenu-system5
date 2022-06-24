import { app } from "./app";
import { ClassController } from "./endpoint/ClassController";
import { TeacherController } from "./endpoint/TeacherController";

const classController = new ClassController();
const teacherController = new TeacherController();

app.post("/class", classController.createClass);

app.post("/teacher", teacherController.createTeacher)

app.get("/class", classController.getClasses);

app.get("/teacher", teacherController.getAllTeachers);

app.patch("/class/:id", classController.updateClassModule);

app.patch("/teacher/:id", teacherController.changeTeacherClass)