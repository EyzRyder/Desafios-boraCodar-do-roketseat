let desafios = document.getElementById("collection");
let doc;
// import  * as doc  from "../data.json";

fetch('../data.json')
    .then((response) =>  response.json())
    .then((json) => {
        json.forEach((item) => {
            // console.log(item.link)
            desafios.innerHTML += `<a href="../${item.link}/index.html"> <div class="desafio"> 
            
            <p>${item.link} - ${item.name}</p>
            </div>
            </a>
            `;
        })
    });


