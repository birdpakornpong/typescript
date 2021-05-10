console.log("hello World");
var names: string = "Hello Bird";
var count: number = 24;
var varieblestatus: boolean = false;
var isRunning: boolean = true;
var fname: any = "bird Pakornpong Hiranjsraspiwat";
document.getElementById("id1").innerHTML = names;
document.write("count is Type: " + typeof count + "<br/>");
document.write("varieblestatus is Type: " + typeof varieblestatus + "<br/>");
document.write("isRunning is Type: " + typeof isRunning + "<br/>");
var employee: string[] = ["A", "B"];
employee.push("C#");
employee.push("500");
employee.push("JAVA");
console.log("arrayString: ", employee.toString());
var employeeAny: any[] = ["A", 500];
employeeAny.push(5);
employeeAny.push(true);
employeeAny.push("bird");
console.log("arrayAny: ", employeeAny.toString());
interface Player {
  realName: string;
  HP: number;
  weapon: string;
  attack?: () => string;
}
var HPBird = 100;
var HPPang = 110;
var playerBird: Player = {
  realName: "Bird",
  HP: HPBird,
  weapon: "Sword",
  attack: (): string => {
    HPPang -= 20;
    HPBot -= 30;
    return `Bird Attack HP Pang = ${HPPang} and HP Bot = ${HPBot}`;
  },
};
var playerPang: Player = {
  realName: "Pang",
  HP: HPBird,
  weapon: "Archer",
  attack: (): string => {
    HPBird -= 18;
    HPBot -= 40;
    return `Pang Attack HP Bird = ${HPBird} and Hp Bot = ${HPBot}`;
  },
};
var HPBot = 10000;
var playerBot: Player = {
  realName: "Bot",
  HP: HPBot,
  weapon: "Unarmed",
};
console.log("Player: ", playerBird.realName);
console.log("Hit 1", playerBird.attack());
console.log("PlayerBirdUse: ", playerBird.weapon);
console.log("Hit 2", playerPang.attack());
console.log("PlayerPangUse: ", playerPang.weapon);
enum Color {
  red = 5,
  blue = 9,
  yellow,
}
console.log("enum red: ", Color.red);
console.log("enum blue: ", Color.blue);
console.log("enum yellow: ", Color.yellow);
enum numberConst {
  pi = 3.14,
  e = 2.71,
}
var r: number = 5;
console.log("area Circle: ", numberConst.pi * r ** 2);
function showMessage() {
  console.log("Typescript Learn");
}
showMessage();
function addProduct(name: string, id: number, price?: number) {
  if (price != undefined) {
    console.log(`addProduct name = ${name} ID = ${id} Price = ${price}`);
  } else {
    console.log(`addProduct name = ${name} ID = ${id} not have Price`);
  }
}
addProduct("pakornpong", 1, 279);
addProduct("nantawan", 2);
function addNumber(number1: number, number2: number) {
  let sum: number = number1 + number2;
  console.log("addNumber: ", sum);
}
addNumber(38676, 6234);
function addNumbers(...num: number[]) {
  let sum: number = 0;
  var i;
  for (i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  console.log("addNumbers: ", sum);
}
addNumbers(3, 5677, 76, 44, 6532, 112);
function addNumberReduce(number: number[]) {
  let sum: number = number.reduce((sum, num) => {
    return sum + num;
  }, 0);
  console.log("addNumberReduce: ", sum);
}
addNumberReduce([454, 656, 67657, 4245, 256]);
class Employee {
  private id: number;
  private names: string;
  private sex: number;
  private salary: number;
  private department: string;
  constructor(id: number, name: string, sex: number, salary: number) {
    this.id = id;
    this.names = name;
    this.sex = sex;
    this.salary = salary;
  }
  display(): void {
    console.log(
      `show : ${this.id} name: ${this.names} sex: ${
        this.sex ? "ชาย" : "หญิง"
      } salary: ${this.salary}`
    );
  }
  setDepartment(dep: string): void {
    this.department = dep;
  }
  getDepartment(): string {
    return this.department;
  }
}
let emp1s = new Employee(101, "Bird pakornpong", 1, 2800);
emp1s.display();
let emp2s = new Employee(102, "Pang nantawan", 0, 2800);
emp2s.display();
let emp3s = new Employee(103, "Bot IamRoBot", 1, 1400);
emp3s.setDepartment("programmer");
emp3s.display();
console.log("GetDepartment: ", emp3s.getDepartment());
class Students {
  private id: number;
  private names: string;
  private sex: number;
  private main: string;
  public major: string;
  public story: string;
  constructor(
    id: number,
    name: string,
    sex: number,
    main: string,
    major: string
  ) {
    this.id = id;
    this.names = name;
    this.sex = sex;
    this.main = main;
    this.major = major;
  }
  display(): void {
    console.log(
      `Student ID: ${this.id} Name: ${this.names} SEX: ${
        this.sex ? "ชาย" : "หญฺิง"
      } Main: ${this.main} Major: ${this.major}`
    );
  }
  setStudent(story: string): void {
    this.story = story;
  }
  display2(): void {
    console.log(`Check Story ${this.story}`);
  }
  getStudent(): string {
    return this.story;
  }
}
let stu1s = new Students(1, "pang", 0, "testMain", "testMajor");
stu1s.display();
class Child extends Students {
  display(): void {
    console.log(`This is Child Major Student Name คือ ${this.major}`);
  }
}
let stu2s = new Child(2, "bird", 1, "MainBird", "MajorBird");
stu2s.display();
stu1s.setStudent("stortTest");
stu1s.display2();
stu2s.setStudent("storyBird");
console.log("Check story Bird", stu2s.getStudent());
class Windows {
  static width: number;
  static hight: number;
  static showWidth(): void {
    console.log(`Show Width ${Windows.width} Show Hight ${Windows.hight}`);
  }
}
Windows.width = 1024;
Windows.hight = 256;
Windows.showWidth();
