//  let color1 = document.getElementById("color1");
//  let color2 = document.getElementById("color2");
//  let body = document.querySelector('body');

//  function gradient() {
//      body.style = "background:linear-gradient(to right," + color1.value + ", " + color2.value + " );"
//  }
//  color1.addEventListener('change', gradient)
//  color2.addEventListener('change', gradient)
//  let link = document.querySelector('a')
//  link.addEventListener('click', function(e) {
//          e.preventDefault()
//          let res = confirm("voulez vous étre redérigé")
//          if (res) {
//              window.location = "https://www.facebook.com/"
//          } else {
//              alert('Desolé vous ne pouvez pas accéder')
//          }
//      })
//  let compteur = document.querySelector('h1')
//  setInterval(function() {
//      compteur.innerText = (Number(compteur.innerText) + 1).toString()
//  }, 1000)

//  let compteur = document.querySelector('h1')
//  setInterval(function() {
//          let d = new Date()
//          compteur.innerText = d.getHours().toString() + ":" + d.getMinutes().toString() + ":" + d.getSeconds().toString();
//          compteur.style.color = "red"

//      }, 1000)
//  this.navigator.geolocation.getCurrentPosition(function(data) {
//      console.log(data)
//  })
let btn = document.getElementById('add')
let input = document.getElementById('task')
let error = document.querySelector('strong')
let tasks = document.getElementById('tasks')

btn.addEventListener('click', function(e) {
    e.preventDefault()
    if (input.value.length > 2) {
        let flex = document.createElement('div');
        flex.classList.add('d-flex', 'justify-content-between', 'my-3');
        let text = document.createElement('p');
        text.classList.add('fw-bold')

        text.innerText = input.value;
        let completed = document.createElement('button');
        completed.classList.add('btn', 'btn-danger', 'btn-sm', );
        completed.innerText = "Deja vue";
        flex.appendChild(text);
        flex.appendChild(completed);
        tasks.appendChild(flex);
        input.value = "";
        completed.addEventListener('click', function() {
            text.innerHTML = `<strike>${text.textContent}</strike>`
            console.log(text.textContent)

        })
        console.log(text.textContent);
        localStorage.setItem('key', text.textContent)

    } else {
        error.innerText = "vous devez entrer une serie"
        setTimeout(function() { error.innerText = "" }, 3000)
    }
})