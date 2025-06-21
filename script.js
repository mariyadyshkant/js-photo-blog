console.log("Photo Blog");
// aggiungere date


const row = document.querySelector(".row");
console.log(row);
const overlayDiv = document.querySelector("#overlay_div");

const endPoint = ("https://lanciweb.github.io/demo/api/pictures/")

// Fetching data from the API
// and displaying it on the page
fetch(endPoint)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(picture => {
            const { title, url } = picture;
            console.log(title, url);
            const picturesMarkUpStr = `
            <div class="col-4">    
                <div class="card">
                    <div class="card_img">
                        <img id="pin" src="./img/pin.svg" alt="">
                        <img class="img" src="${url}" alt="">
                    </div>
                    <div class="card_body">
                        <h2 class="card_title">${title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            `
            row.insertAdjacentHTML("beforeend", picturesMarkUpStr)

            const blogImgs = document.querySelectorAll(".img");
            blogImgs.forEach(img => {
                img.addEventListener("click", () => {
                    console.log("Cliccato su Immagine");
                    overlayDiv.classList.remove("close_div");
                    const overlayImg = document.querySelector(".overlay_pic");
                    overlayImg.src = img.src;
                });
            });

        })
            .catch(error => {
                console.error(error);
            })
    });

const closeBtn = document.querySelector(".close_btn");
closeBtn.addEventListener("click", () => {
    console.log("Cliccato su Chiudi");
    overlayDiv.classList.add("close_div")
});

// const closeBodyClick = document.querySelector("body");
// closeBodyClick.addEventListener("click", () => {
//     if (!overlayDiv.classList.contains("close_div")) {
//         console.log("Cliccato su Body");
//         overlayDiv.classList.add("close_div");
//     }
// });
// function closeOverlay(event) {
//     if (event.target === overlayDiv) {
//         console.log("Cliccato su Overlay");
//         overlayDiv.classList.add("close_div");
//     }
// }
// [document.querySelector(".close_btn"), document.querySelector("body")].forEach(item => {
//     item.addEventListener("click", () => {
//         overlayDiv.classList.add("close_div");
//     });
// })