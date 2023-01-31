const cardImgContainer = document.getElementById("card-img-container");
const cardImgContainer2 = document.getElementById("card-img-container-2");
const btn = document.getElementById("btn")





btn.addEventListener("click",()=>{

    document.getElementById("winner").innerHTML = " ";
    cardImgContainer.innerHTML = " ";
    cardImgContainer2.innerHTML = " ";
    document.getElementById("theme").volume = 0.2;

    document.getElementById("theme").play();

    
    game();
})

async function getImg(){
    const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster');
    const response2 = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster');
    const data = await  response.json();
    const data2 = await response2.json();
    
    let rand = Math.floor(Math.random() * data.data.length);
    let rand2 = Math.floor(Math.random() * data.data.length);

    let cardImg1 = data.data[rand].card_images[0].image_url;
    let cardImg2 = data.data[rand2].card_images[0].image_url;

    let cardAtk1 = data.data[rand].atk;
    let cardAtk2 = data.data[rand2].atk;

    let arr = [cardImg1,cardImg2,cardAtk1,cardAtk2]

    return arr
}


async function game(){
    const cevap = await getImg();

    const winner = document.getElementById("winner");

    if(cevap[2] > cevap[3]){
        winner.textContent = "Congratulations You Won";
    }
    else if(cevap[2] < cevap[3]){
        winner.textContent = "Unfortunately You Lost";
    }
    else{
        winner.textContent = "Draw";
    }

    cardImgContainer.innerHTML += `<h1>You</h1> <img src=${cevap[0]} alt="" class="card-img">`
    cardImgContainer2.innerHTML += `<h1>Computer</h1> <img src=${cevap[1]} alt="" class="card-img">`

    
    
}   


