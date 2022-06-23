import { app } from "./app";
import { ClassController } from "./endpoint/ClassController";
import { StudentController } from "./endpoint/StudentController";

const classController = new ClassController();
const studentController = new StudentController();

app.post("/class", classController.createClass);

app.get("/class", classController.getClasses);

app.patch("/class/:id", classController.updateClassModule);

app.post("/student", studentController.createStudent);