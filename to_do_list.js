    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
      const taskText = inputBox.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.innerText = taskText;

      const span = document.createElement("span");
      span.innerText = "×"; // Close symbol
      li.appendChild(span);

      listContainer.appendChild(li);
      inputBox.value = "";
      saveData();
    }

    listContainer.addEventListener("click", function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });

    function saveData() {
      localStorage.setItem("todoList", listContainer.innerHTML);
    }

    function showData() {
      listContainer.innerHTML = localStorage.getItem("todoList") || "";
    }

    showData();
