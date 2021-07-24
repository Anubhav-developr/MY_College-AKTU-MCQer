window.onload = function () {
  for (let i = 2; i <= 8; i += 2) {
    var op = document.createElement("option");
    var optxt = document.createTextNode(`${i}`);
    op.appendChild(optxt);
    var slecty = document.getElementById("luckys");
    slecty.appendChild(op);
    var divy = document.getElementById("divy");
    divy.appendChild(slecty);
    var formgH = document.getElementsByTagName("form");
    var for2 = document.getElementsByClassName("formg");
    //  formgH[0].insertBefore(divy,for2[2]);
    var formy = document.getElementById("formb");
    formy.appendChild(divy);
    var divroot = document.getElementById("divroot");
    divroot.appendChild(formy);
    document.getElementsByTagName("section")[0].appendChild(divroot);
  }
  loader[0].classList.add("disappear");

  // hera pheri
  var btn = document.getElementById("btn");
  formgH[0].insertBefore(for2[0], btn);
  formgH[0].insertBefore(for2[1], btn);
  formgH[0].insertBefore(for2[2], btn);
  formgH[0].insertBefore(for2[2], for2[1]);
  formgH[0].insertBefore(for2[1], for2[0]);
  formgH[0].insertBefore(for2[2], for2[0]);
};

var formg = document.getElementsByClassName("formg");
var usr = document.getElementsByTagName("input");
var loader = document.getElementsByClassName("pre_load");
window.addEventListener("load", vanish);

function vanish() {
  loader[0].classList.add("disappear");
  const mydata = toJSON("./data.json");
}
function Formit() {
  const obj = {
    userid: usr[0].value,
    pss: usr[1].value,
  };
  localStorage.setItem("uid", obj.userid);
  localStorage.setItem("pss", obj.pss);
  if (obj.userid === "anu" && obj.pss === "1234") {
    location.href = "./redirect.html";
  }
  console.log(localStorage.getItem("uid") + localStorage.getItem("pss"));
}

document.getElementById("btn").addEventListener("click", () => {
  location.href = "./sub.html";
});

function Shange() {
  
    location.href = "./subjectMCQS/TAFL.html";
  
}
var url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBX9UsuMYFegTWQXxvPjyPYV2ERVp4UrSw`;
var uid = document.getElementById("userid").value;
var pass = document.getElementById("password").value;
//document.getElementById("signupbtn").addEventListener("click",)
//)


function post(event) {
  
  fetch(url,{
    mathod : 'POST',
    body: json.stringify({
      userid :  uid  ,
      password : pass ,
      returnSecureToken : true,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  }).then((res)=>{
    if(!res.ok){
      res.json().then((data)=>{
        window.alert("failed");
        
      })
    }
  })
  }