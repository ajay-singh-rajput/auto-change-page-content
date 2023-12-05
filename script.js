let menu = document.querySelector(".menu");
let menuDiv = document.querySelector("menu");
let item1 = document.querySelector(".i1");
let item2 = document.querySelector(".i2");
let item3 = document.querySelector(".i3");
let item4 = document.querySelector(".i4");
let menuRight = document.querySelector(".menuRight");


let flag = 0;


item1.style.color = "black"
menuRight.innerHTML = `<div class="opt">Accueil</div>
<div class="opt"> Qui sommes-nous ?</div>
<div class="opt">Nos engagements</div>
<div class="opt">Contact</div>`
menu.addEventListener("click", function(){
    if(flag === 0){
        menuDiv.style.width = "100%"
        menuDiv.style.height = "100vh"
        menuDiv.style.top = "-100%"
        menuDiv.style.right = 0;
        menuDiv.style.borderRadius = 0,
        menu.style.transform = "rotateZ(180deg)"
        menu.innerHTML = '<i class="ri-close-line"></i>'
        flag = 1;
    } else {
        flag = 0;
        menuDiv.style.width = "2.5vmax"
        menuDiv.style.height = "2.5vmax"
        menuDiv.style.top = "0"
        menuDiv.style.right = "3%";
        menuDiv.style.borderRadius = "50%"
        menu.style.transform = "rotateZ(0)"
        menu.innerHTML = '<i class="ri-menu-line"></i>'
    }
})

item1.addEventListener("mouseenter", function(){
    menuRight.innerHTML = `<div class="opt">Accueil</div>
    <div class="opt"> Qui sommes-nous ?</div>
    <div class="opt">Nos engagements</div>
    <div class="opt">Contact</div>`
    item1.style.color = "black"
    item2.style.color = "transparent"
    item3.style.color = "transparent"
    item4.style.color = "transparent"
})
item2.addEventListener("mouseenter", function(){
    menuRight.innerHTML = `<div class="opt">Accueil</div>
    <div class="opt"> Qui sommes-nous ?</div>
    <div class="opt">Nos engagements</div>
    <div class="opt">Contact</div><div class="opt">Digital</div>
    <div class="opt">Nos régions</div>
    <div class="opt">Immobilier</div>
    <div class="opt">Sport</div>
    <div class="opt">Illustration</div>
    <div class="opt">Culturel</div>
    <div class="opt">Corporate</div>`
    item2.style.color = "black"
    item1.style.color = "transparent"
    item3.style.color = "transparent"
    item4.style.color = "transparent"
})
item3.addEventListener("mouseenter", function(){
    menuRight.innerHTML = `<div class="opt">Création digitale</div>
    <div class="opt">Création graphique</div>
    <div class="opt">CRM promoteur</div>
    <div class="opt">Audiovisuel</div>`
    item3.style.color = "black"
    item1.style.color = "transparent"
    item2.style.color = "transparent"
    item4.style.color = "transparent"
})
item4.addEventListener("mouseenter", function(){
    menuRight.innerHTML = `<div class="opt">Contacter nous</div>
    <div class="opt">Planifier un brainstorming</div>
    <div class="opt">Demande de devis</div>`
    item4.style.color = "black"
    item1.style.color = "transparent"
    item3.style.color = "transparent"
    item2.style.color = "transparent"
})
var changePhoto = document.querySelector(".blurDiv")
var changePhoto2 = document.querySelector(".contentDiv")
var c1 = document.querySelector(".c1")
var c2 = document.querySelector(".c2")
var c3 = document.querySelector(".c3")
var c4 = document.querySelector(".c4")

let jha = 0;
let chan = setInterval(() => {
    if(jha === 0){
        changePhoto.style.background = "url(https://media.istockphoto.com/id/1409751960/photo/young-businessman-using-digital-tablet-while-working-in-business-office.jpg?s=170667a&w=0&k=20&c=VtWMf90sXiv01IjWsnHUuQC4LVRK596Uiurlf4NRoDU=)"
        jha = 1;
        changePhoto2.style.background = "url(https://media.istockphoto.com/id/1409751960/photo/young-businessman-using-digital-tablet-while-working-in-business-office.jpg?s=170667a&w=0&k=20&c=VtWMf90sXiv01IjWsnHUuQC4LVRK596Uiurlf4NRoDU=)"
        changePhoto2.innerHTML = `<h1 class="p1h1">
        <span class="h1s1">Content</span>
        <span class="h1s2">NEVER GIVE UP</span>
        <div class="line2"></div>
    </h1>
    <p class="p1p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, modi!</p>`
        jha = 1;
        c1.style.background = "white"
        c2.style.background = "transparent"
        c3.style.background = "transparent"
        c4.style.background = "transparent"
    } else if(jha === 1){
        changePhoto.style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU)"
        changePhoto2.style.background = "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRDvW4JnlJxE9wKHWPA0CD6o5ZTZZGmj0PA&usqp=CAU)"
        changePhoto2.innerHTML = `<h1 class="p1h1">
        <span class="h1s1">Content</span>
        <span class="h1s2">Unstoable</span>
        <div class="line2"></div>
    </h1>
    <p class="p1p1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores esse fugiat, enim rem hic aperiam ex.</p>`
        jha = 2;
        c2.style.background = "white"
        c1.style.background = "transparent"
        c3.style.background = "transparent"
        c4.style.background = "transparent"
    } else if(jha === 2){

        changePhoto.style.background = "url(https://m.economictimes.com/thumb/msid-94600951,width-1200,height-900,resizemode-4,imgsize-75546/travel-istock.jpg)"
        jha = 3;
        changePhoto2.style.background = "url(https://m.economictimes.com/thumb/msid-94600951,width-1200,height-900,resizemode-4,imgsize-75546/travel-istock.jpg)"
        changePhoto2.innerHTML = `<h1 class="p1h1">
        <span class="h1s1">Content</span>
        <span class="h1s2">Break Thrue</span>
        <div class="line2"></div>
    </h1>
    <p class="p1p1">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet. esse fugiat, enim rem hic aperiam ex.</p>`
    c3.style.background = "white"
        c2.style.background = "transparent"
        c1.style.background = "transparent"
        c4.style.background = "transparent"
    } else if(jha === 3){

        changePhoto.style.background = "url(https://www.kapturecrm.com/blog/wp-content/uploads/2022/05/X-Common-Customer-Complaints-in-Hospitality-Hotels-How-to-Avoid-Them.jpg)"
        changePhoto2.style.background = "url(https://www.kapturecrm.com/blog/wp-content/uploads/2022/05/X-Common-Customer-Complaints-in-Hospitality-Hotels-How-to-Avoid-Them.jpg)"
        jha = 0;
        changePhoto2.innerHTML = `<h1 class="p1h1">
        <span class="h1s1">Content</span>
        <span class="h1s2">WHRE TO GO</span>
        <div class="line2"></div>
    </h1>
    <p class="p1p1">Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae!.</p>`
    c4.style.background = "white"
        c2.style.background = "transparent"
        c3.style.background = "transparent"
        c1.style.background = "transparent"
    }
    changePhoto.style.backgroundSize = "cover"
    changePhoto.style.backgroundPosition = "center"
    changePhoto.style.backgroundRepeat = "center"
    changePhoto2.style.backgroundSize = "cover"
    changePhoto2.style.backgroundPosition = "center"
    changePhoto2.style.backgroundRepeat = "center"
}, 2000);


// let changePhoto = setInterval(function(){
//     /*if(image 1 condition){

//     } else if(image 2 condition){

//     } else if(image 3 condition){

//     }*/
// },2000)