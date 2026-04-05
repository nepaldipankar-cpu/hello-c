let pTag = document.querySelector("#divId");
pTag.addEventListener('click',changeBackgroundColor);

function changeBackgroundColor(){
     console.log("ptag clicked");
     pTag.style.BackgroundColor = 'red';

}
