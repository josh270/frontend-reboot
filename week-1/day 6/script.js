let todos = [];
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
function renderTodos() {
    list.innerHTML = "";
  
    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "❌";
  
      deleteBtn.addEventListener("click", () => {
        deleteTodo(index);
      });
  
      li.appendChild(deleteBtn);
      list.appendChild(li);
    });
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    todos.push(input.value);
    input.value = "";
  
    saveTodos();
    renderTodos();
  });
  function deleteTodo(index) {
    todos.splice(index, 1);
    saveTodos();
    renderTodos();
  }
  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  function loadTodos() {
    const saved = localStorage.getItem("todos");
    if (saved) {
      todos = JSON.parse(saved);
    }
  }
  
  loadTodos();
  renderTodos();
    