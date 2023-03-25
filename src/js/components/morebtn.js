let content = document.querySelector(".hidden");
let show = document.getElementById("showContent");

show.addEventListener("click", () => {
    content.classList.toggle('hidden--visible');
    show.innerText = 'Свернуть все';

    if (show.innerText="Свернуть все"){
        show.addEventListener("click", () => {
        show.innerText = 'Показать все';
        }
       
            
        );
    }
})



   
 