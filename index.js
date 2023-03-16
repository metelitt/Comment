const form = document.querySelector("#form");
const val = document.getElementById("val");
const Name = document.querySelector("#Name");
const container = document.querySelector("#container");
const infoName = document.querySelector("#infoName");
const infoVal = document.querySelector("#infoVal");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  
  const date = form.elements.date.value || new Date().toISOString().slice(0, 10);
  const dateFormatted = formatDate(date);
  
  let divDate = document.createElement('div');
  divDate.innerHTML = `${dateFormatted}`;
  function formatDate(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'сегодня' + new Date().toLocaleTimeString().slice(0, -3);
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'вчера' + new Date().toLocaleTimeString().slice(0, -3);
    } else {
      return date.toLocaleDateString();
    }
  }  
  
  let valValue = val.value;
  let nameValue = Name.value;
  
  if (nameValue === "" && valValue === "") {
    infoVal.innerText = "Неверно заполненный комментарий";
    infoName.innerText = "Неверное имя";
  } else if (valValue === "") {
    infoVal.innerText = "Невернно заполненный комментарий";
    infoName.innerText = "";
  } else if (nameValue === "") {
    infoName.innerText = "Неверное имя";
    infoVal.innerText = "";
  } else {
    infoName.innerText = "";
    infoVal.innerText = "";
      
    let divName = document.createElement("div");
    divName.className = "divName";
    divName.innerHTML = nameValue;
  
    let divVal = document.createElement("div");
    divVal.className = "divVal";
    divVal.innerHTML = valValue;
  
    let divDelete = document.createElement("button");
    divDelete.className = "divDelete";
    divDelete.innerHTML = "Удалить";
  
    divDelete.addEventListener("click", function (e) {
      let Delete = confirm("Вы точно хотите удалить комментарий?");
      if (Delete) {
        container.removeChild(div);
      } else {
        return false;
      }
    });
  
    let divLike = document.createElement('div');
    divLike.innerHTML = `<i class="fa fa-heart">`;
    
    divLike.addEventListener("click", function (e) {
      if (divLike.classList.contains("liked")) {
        divLike.classList.remove("liked");
        divLike.innerHTML = `<i class="fa fa-heart"></i>`;
      } else {
        divLike.classList.add("liked");
        divLike.innerHTML = `<i class="fa fa-heart" style="color: red;"></i>`;
      }
    });
  
    let div = document.createElement("div");
    div.className = "divA";
    div.appendChild(divName);   
    div.appendChild(divVal);
    div.appendChild(divDelete);
    div.appendChild(divLike);
    div.appendChild(divDate);
    
    container.appendChild(div);
  }
  
  val.value = '';
  Name.value = '';
  form.elements.date.value = '';
});

val.addEventListener('input', function () {
  let valValue = val.value;
  
  if (valValue.length > 0) {
    val.removeAttribute('class');
    val.setAttribute('class', 'valid');
  }
  
  if (valValue.length === 0) {
    val.removeAttribute('class');
  }
});

Name.addEventListener('input', function () {
  let nameValue = Name.value.replace(/[0-9]/g,"");
  
  if (nameValue.length > 0) {
    Name.removeAttribute('class');
    Name.setAttribute('class', 'valid');
  }
  
  if (nameValue.length === 0) {
    Name.removeAttribute('class');
  }
});
function noDigits(event) {
    if ("1234567890".indexOf(event.key) != -1)
      event.preventDefault();
  }
  

