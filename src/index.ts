import { app } from "./app";
import { ClassController } from "./endpoint/ClassController";

const classController = new ClassController();

app.post("/class", classController.createClass);

app.get("/class", classController.getClasses);

app.patch("/class/:id", classController.updateClassModule);