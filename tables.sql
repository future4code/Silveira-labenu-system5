CREATE TABLE Class (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    module INT NOT NULL DEFAULT 0
);

CREATE TABLE Student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE TABLE Student_Hobby (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Student(id),
    hobby_id INT NOT NULL,
    FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
);

CREATE TABLE Hobby (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Teacher (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    birth_date DATE NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(id)
);

CREATE TABLE Teacher_Speciality (
    id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(id),
    speciality_id INT NOT NULL,
    FOREIGN KEY (speciality_id) REFERENCES Speciality(id)
);

CREATE TABLE Speciality (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE
);

DESCRIBE Student;

SELECT * FROM Class;