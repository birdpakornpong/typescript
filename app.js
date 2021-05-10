var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello World");
var names = "Hello Bird";
var count = 24;
var varieblestatus = false;
var isRunning = true;
var fname = "bird Pakornpong Hiranjsraspiwat";
document.getElementById("id1").innerHTML = names;
document.write("count is Type: " + typeof count + "<br/>");
document.write("varieblestatus is Type: " + typeof varieblestatus + "<br/>");
document.write("isRunning is Type: " + typeof isRunning + "<br/>");
var employee = ["A", "B"];
employee.push("C#");
employee.push("500");
employee.push("JAVA");
console.log("arrayString: ", employee.toString());
var employeeAny = ["A", 500];
employeeAny.push(5);
employeeAny.push(true);
employeeAny.push("bird");
console.log("arrayAny: ", employeeAny.toString());
var HPBird = 100;
var HPPang = 110;
var playerBird = {
    realName: "Bird",
    HP: HPBird,
    weapon: "Sword",
    attack: function () {
        HPPang -= 20;
        HPBot -= 30;
        return "Bird Attack HP Pang = " + HPPang + " and HP Bot = " + HPBot;
    }
};
var playerPang = {
    realName: "Pang",
    HP: HPBird,
    weapon: "Archer",
    attack: function () {
        HPBird -= 18;
        HPBot -= 40;
        return "Pang Attack HP Bird = " + HPBird + " and Hp Bot = " + HPBot;
    }
};
var HPBot = 10000;
var playerBot = {
    realName: "Bot",
    HP: HPBot,
    weapon: "Unarmed"
};
console.log("Player: ", playerBird.realName);
console.log("Hit 1", playerBird.attack());
console.log("PlayerBirdUse: ", playerBird.weapon);
console.log("Hit 2", playerPang.attack());
console.log("PlayerPangUse: ", playerPang.weapon);
var Color;
(function (Color) {
    Color[Color["red"] = 5] = "red";
    Color[Color["blue"] = 9] = "blue";
    Color[Color["yellow"] = 10] = "yellow";
})(Color || (Color = {}));
console.log("enum red: ", Color.red);
console.log("enum blue: ", Color.blue);
console.log("enum yellow: ", Color.yellow);
var numberConst;
(function (numberConst) {
    numberConst[numberConst["pi"] = 3.14] = "pi";
    numberConst[numberConst["e"] = 2.71] = "e";
})(numberConst || (numberConst = {}));
var r = 5;
console.log("area Circle: ", numberConst.pi * Math.pow(r, 2));
function showMessage() {
    console.log("Typescript Learn");
}
showMessage();
function addProduct(name, id, price) {
    if (price != undefined) {
        console.log("addProduct name = " + name + " ID = " + id + " Price = " + price);
    }
    else {
        console.log("addProduct name = " + name + " ID = " + id + " not have Price");
    }
}
addProduct("pakornpong", 1, 279);
addProduct("nantawan", 2);
function addNumber(number1, number2) {
    var sum = number1 + number2;
    console.log("addNumber: ", sum);
}
addNumber(38676, 6234);
function addNumbers() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    var i;
    for (i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }
    console.log("addNumbers: ", sum);
}
addNumbers(3, 5677, 76, 44, 6532, 112);
function addNumberReduce(number) {
    var sum = number.reduce(function (sum, num) {
        return sum + num;
    }, 0);
    console.log("addNumberReduce: ", sum);
}
addNumberReduce([454, 656, 67657, 4245, 256]);
var Employee = /** @class */ (function () {
    function Employee(id, name, sex, salary) {
        this.id = id;
        this.names = name;
        this.sex = sex;
        this.salary = salary;
    }
    Employee.prototype.display = function () {
        console.log("show : " + this.id + " name: " + this.names + " sex: " + (this.sex ? "ชาย" : "หญิง") + " salary: " + this.salary);
    };
    Employee.prototype.setDepartment = function (dep) {
        this.department = dep;
    };
    Employee.prototype.getDepartment = function () {
        return this.department;
    };
    return Employee;
}());
var emp1s = new Employee(101, "Bird pakornpong", 1, 2800);
emp1s.display();
var emp2s = new Employee(102, "Pang nantawan", 0, 2800);
emp2s.display();
var emp3s = new Employee(103, "Bot IamRoBot", 1, 1400);
emp3s.setDepartment("programmer");
emp3s.display();
console.log("GetDepartment: ", emp3s.getDepartment());
var Students = /** @class */ (function () {
    function Students(id, name, sex, main, major) {
        this.id = id;
        this.names = name;
        this.sex = sex;
        this.main = main;
        this.major = major;
    }
    Students.prototype.display = function () {
        console.log("Student ID: " + this.id + " Name: " + this.names + " SEX: " + (this.sex ? "ชาย" : "หญฺิง") + " Main: " + this.main + " Major: " + this.major);
    };
    Students.prototype.setStudent = function (story) {
        this.story = story;
    };
    Students.prototype.display2 = function () {
        console.log("Check Story " + this.story);
    };
    Students.prototype.getStudent = function () {
        return this.story;
    };
    return Students;
}());
var stu1s = new Students(1, "pang", 0, "testMain", "testMajor");
stu1s.display();
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.display = function () {
        console.log("This is Child Major Student Name \u0E04\u0E37\u0E2D " + this.major);
    };
    return Child;
}(Students));
var stu2s = new Child(2, "bird", 1, "MainBird", "MajorBird");
stu2s.display();
stu1s.setStudent("stortTest");
stu1s.display2();
stu2s.setStudent("storyBird");
console.log("Check story Bird", stu2s.getStudent());
var Windows = /** @class */ (function () {
    function Windows() {
    }
    Windows.showWidth = function () {
        console.log("Show Width " + Windows.width + " Show Hight " + Windows.hight);
    };
    return Windows;
}());
Windows.width = 1024;
Windows.hight = 256;
Windows.showWidth();
