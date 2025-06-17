console.log("Photo Blog");
const row = document.querySelector(".row");
console.log(row);

const endPoint = ("https://lanciweb.github.io/demo/api/pictures/")


// for (let i = 0; i < 6; i++) {
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
                        <img src="${url}" alt="">
                    </div>
                    <div class="card_body">
                        <h2 class="card_title">${title}</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            `
            row.insertAdjacentHTML("beforeend", picturesMarkUpStr)

        });

    })
    .catch(error => {
        console.error(error);
    })
//}
