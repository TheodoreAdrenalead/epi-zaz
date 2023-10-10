function LearnMore(element) {
    var x = element.nextElementSibling
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
} 

function connectPage(){
    // redirect connection page
    window.location.href = "connectPage.html";
   
}

function connectForm(){
    form = document.getElementById("connectForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}
function createForm(){
    form = document.getElementById("createForm");
    if (form.style.display === "none") {
        form.style.display = "block";
    } else {
        form.style.display = "none";
    }
}


function homePage(){
    // redirect connection page
    window.location.href = "job_ad.html";
}


function connect(element) {
    form = document.getElementById("connectForm");
    emailTest = form.email.value;
    mdpTest = form.mdp.value;

 
} 
function createAccount(element) {
   form = document.getElementById("createForm")
   firstName = form.firstName.value;
   lastName = form.lastName.value;
   statu = form.statu.value;
   tel = form.tel.value;
   mdp1 = form.mdp1.value;
   mdp2=form.mdp2.value;
   if(mdp1!=mdp2){
    alert("Mauvais mot de passe");
   }
   else{
    mdp = mdp1;
   }

 
} 