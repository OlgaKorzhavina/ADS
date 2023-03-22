let content = document.querySelector(".parts-card__hidden");
let show = document.getElementById("showContent");

show.addEventListener("click", () => {
    content.classList.toggle('parts-card__hidden--visible');
    show.innerText = 'Свернуть все';

    if (show.innerText="Свернуть все"){
        show.addEventListener("click", () => {
        show.innerText = 'Показать все';
        }
       
            
        );
    }
})



   
 