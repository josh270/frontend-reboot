let count = 0;
const button = document.getElementById("btn");
const counterText = document.getElementById("count");

button.addEventListener("click", () => {
    count++;
    counterText.textContent = `Count: ${count}`;

  });
  
  const user = {
    name: "Joshua",
    role: "Frontend Developer",
    stack: "JavaScript"
  };
  
  const { name, role } = user;
  
  console.log(name);
  console.log(role);

  const skills = ["HTML", "CSS", "JavaScript"];
const updatedSkills = [...skills, "React"];

console.log(updatedSkills);

const numbers = [1, 2, 3, 4, 5];

// map
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter
const even = numbers.filter(num => num % 2 === 0);
console.log(even);

// reduce
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);
