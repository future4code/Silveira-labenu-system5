import { app } from "./app";

import { createClass } from "./endpoint/createClass";

app.post("/class", createClass);