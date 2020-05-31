var checkbox = document.querySelector("input[name=theme]");
checkbox.addEventListener("change", function () {
  this.checked
    ? (trans(), document.documentElement.setAttribute("data-theme", "dark"), (document.getElementById("header-logo").src = "../../../icons/logo-dark.svg"), (document.getElementById("footer-logo").src = "../../../icons/logo-dark.svg"))
    : (trans(), document.documentElement.setAttribute("data-theme", "light"), (document.getElementById("header-logo").src = "../../../icons/logo-light.svg"), (document.getElementById("footer-logo").src = "../../../icons/logo-light.svg"));
});
let trans = () => {
  document.documentElement.classList.add("transition"),
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, "slow");
};
