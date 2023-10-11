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
window.addEventListener("load", () => {
    document.getElementById("create").addEventListener("click", function(event){
        
        event.preventDefault();
        
        createAccount();
    });
})

function createAccount() {              
    
   form = document.getElementById("createForm")
   firstName = form.firstName.value;
   lastName = form.lastName.value;
   statu = form.statu.value;
   tel = form.tel.value;
   email = form.email.value;
   mdp1 = form.mdp1.value;
   mdp2=form.mdp2.value;
   
   if(mdp1!=mdp2){
    alert("Mauvais mot de passe");
   }
   else{
    mdp = mdp1;
    fetch("http://localhost:8000/people",{
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            statu: statu,
            tel: tel,
            email: email,
            mdp: mdp
        })
        })
        .then(response => response.json())
        .then(data => {
        if (data === true) {
            alert(`Compte créé avec succès \n Bienvenue ${firstName}`);
        } 
        else {
            alert("Échec de la création du compte");
        }
    }).catch(error => {
        console.log(error)
    })
   }

 
} 