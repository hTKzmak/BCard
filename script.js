const f = document.forms[0];
let cardInfo = document.querySelector(".cardInfo");

f.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataobject = {};

    const formData = new FormData(f);
    const imageFile = formData.get('images');
    const fio = formData.get('fio');
    const email = formData.get('email');
    const phoneNum = formData.get('phoneNum');

    const imageUrl = URL.createObjectURL(imageFile);
  
    dataobject.images = imageUrl;
    dataobject.fio = fio;
    dataobject.email = email;
    dataobject.phoneNum = phoneNum;


  let html = "<div>";
    html += `
    <div class="card" style="background-color: rgb(44,44,44); color: whitesmoke;  ">
    <img src="${dataobject.images}" class="card-img-top" alt="photo">
    <div class="card-body">
      <h5 class="card-title">ФИО:</h5>
      <p>${dataobject.fio}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <h4>Email:</h4>
        <p>${dataobject.email}</p>
      </li>
      <li class="list-group-item">
        <h4>Телефон:</h4>
        <p>${dataobject.phoneNum}</p>
      </li>
    </ul>
    </div>
    `

  html += "</div>"
  cardInfo.innerHTML += html;

  URL.revokeObjectURL(imageUrl);

})