fetch("./data.json").then(response => {
  return response.json();
}).then(data => {
  document.querySelector(".intro-text h1").innerHTML = data.name;
  console.log(data);
});