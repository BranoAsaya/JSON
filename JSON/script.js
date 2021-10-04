const ContactUs =`{
    "name":"kong",
    "sms":"kong",
    "email":"kong@mail.com"
}`;

console.log(JSON.parse(ContactUs));

const vehicles=`{
    "cars":[{"model":"mazda","price":1200,"year":2009},
            {"model":"kia","price":50000,"year":2019}],
    "ships":[{"name":"mor","year":2000,"marina":"haifa","img":"https://s.alicdn.com/@sc04/kf/H307e968b1a2544e59132454278e412adb.jpg_300x300.jpg"},
            {"name":"koy","year":2018,"marina":"ako","img":"https://s.alicdn.com/@sc04/kf/H9340df33130c45868d21cac88f814185e.jpg_300x300.jpg"}]
}`;

const vehiclesJSON = JSON.parse(vehicles);
console.log(vehiclesJSON);
let con=document.getElementById("show");
for (let i = 0; i < vehiclesJSON.ships.length; i++) {
     con.innerHTML+=`<img src="${vehiclesJSON.ships[i].img}" alt="ship">`
    console.log();
 }   
let form=document.getElementById("form")
let user=document.getElementById("name")
let mail=document.getElementById("email")
let subject=document.getElementById("subject")
let submit=document.getElementById("submit")

form.onsubmit=((e)=>{
    e.preventDefault()
  const dataForm={name:user.value,email:mail.value,sms:subject.value};
console.log(JSON.stringify(dataForm) );    
});

 let open={name:"man",age:12};

function makeObjectToJSON(obj){
    return JSON.stringify(obj)

}
console.log(makeObjectToJSON(open));

function JSONToObject(json){
    JSON.parse(json)

}

const userName={age:20,name:"man",mail:"man@mail.com"};

function TripleAgeMakeToJSON(obj){
    obj.age*=3;
    return JSON.stringify(obj)


}
console.log(TripleAgeMakeToJSON(userName));

    
    
