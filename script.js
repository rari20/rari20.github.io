function changeColor(event) {
    // Changing the background color of the clicked element
    event.target.style.backgroundColor = "lightblue";
  }
  
  function installEventHandler() {
    // Getting the element by its ID
    const contentElement = document.getElementById("content");
  
    // Installing the event handler
    contentElement.addEventListener("click", changeColor);
  }
  