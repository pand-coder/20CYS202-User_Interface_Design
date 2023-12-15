const check = document.querySelector('#check');
const checkMsg = document.querySelector('#checkMsg');

const name = document.querySelector('.name');
const psd = document.querySelector('.psd');
const msg = document.querySelector('#msg');

const main = document.querySelector('.main');

const signupOption = document.getElementById('signup-option');


signupOption.addEventListener('click', function() {

  window.open('login.html', '_self');
});


let img = ["https://hiphop-n-more.com/wp-content/uploads/2023/03/the-weeknd-live-at-sofi-stadium-stream.jpg ","https://w0.peakpx.com/wallpaper/523/813/HD-wallpaper-ariana-grande-portrait-concert-american-singer-microphone-black-dress.jpg ","https://images.radio.com/aiu-media/THEWEEKND-9a908c5e-8869-43d1-8ef7-cefba619e2e8.png  "];

let index =  0;
let imglength = img.length;


 //slider 
setInterval(function(){
     
  var index1 = img[index]; 
  index++;
  
  if(index >= imglength){
    index = 0;
  }
  
     
    main.style.backgroundImage = `url(${index1})`;
          
     },4000);


var a = 1;

check.addEventListener('click',()=>{

load();

});



const load = () =>{
  
    if(a == 1){
  checkMsg.style.color = "#fff";
    a = 0;
  
}else{
  checkMsg.style.color = "#1db954";
    a = 1;
  }
  
}

load();


//
const refresh = () =>{
  window.open('index.html', '_self');
  if(name.value == "" && psd.value == ""){
    msg.innerText = "Empty username & password";
  }else{
        msg.innerText = "";

    check.checked = false;
    load();
  }
  
  name.value = "";
  psd.value = "";
 
}
