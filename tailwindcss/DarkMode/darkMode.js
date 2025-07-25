const ThemeDark = document.getElementById("ThemeDark");

const valueStorage = localStorage.getItem("darkmode");


if(valueStorage && valueStorage === "true"){
    document.documentElement.classList.add("dark");
    ThemeDark.innerHTML = "Light";
}else{
    document.documentElement.classList.remove("dark");
    ThemeDark.innerHTML = "Dark";
}

ThemeDark.addEventListener("click", () => {
  const change = document.documentElement.classList.toggle("dark");
  console.log(change);
  if (change) {
    ThemeDark.innerHTML = "Light";
  } else {
    ThemeDark.innerHTML = "Dark";
  }
  localStorage.setItem("darkmode", change);
});
