const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target.classList.contains("remove-button")) {
    console.log(e.target.parentElement.remove());
  }
});
