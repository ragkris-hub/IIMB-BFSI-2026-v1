const buttons = document.querySelectorAll(".template");
const themes = ["future","editorial","experience","conversation"];
const saved = localStorage.getItem("bfsi-theme") || "future";
document.body.dataset.theme = saved;
buttons.forEach(b=>{
  b.classList.toggle("active", b.dataset.theme===saved);
  b.addEventListener("click",()=>{
    document.body.dataset.theme=b.dataset.theme;
    localStorage.setItem("bfsi-theme",b.dataset.theme);
    buttons.forEach(x=>x.classList.toggle("active",x===b));
  });
});
