import { HelloWorld } from "./models/helloWorld";

let helloWorld = new HelloWorld("Ts Beginner");

const element = <HTMLInputElement>document.getElementById("hello-world");
element.innerHTML = helloWorld.show();

// イベントの種類を指定する方法 例題
const questions = [
  { level: "HIGHLEVEL", content: "√10 * 3 = ?", answer: "3√10" },
  { level: "STANDARD", content: "sin1/2π = ?", answer: "1" },
  { level: "BEGINNER", content: "√2 * √3 = ?", answer: "√6" },
];

const selects = [
  { level: "HIGHLEVEL", list: ["3√10", "√10", "10√3"] },
  { level: "STANDARD", list: ["1", "0", "1/2"] },
  { level: "BEGINNER", list: ["√6", "√5", "√2"] },
];
