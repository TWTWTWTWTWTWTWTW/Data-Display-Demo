const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => (c.style.display = "none"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.target).style.display = "block";
  });
});
