
let player = getData();
let current = 1;
function displayPlayer(){
    let str = ''
     let eml = document.getElementById("main")
    for (let i = 0;i<player.length;i++){
        player[i].id = i;
        str += player[i].getHtml();
    }
    eml.innerHTML = str
}
function addPlayer(){
    let name = document.getElementById("player-name").value;
    let age = document.getElementById("player-age").value;
    let weight = document.getElementById("player-weight").value;
    let height = document.getElementById("player-height").value;
    let nationality = document.getElementById("player-nationality").value;
    let img = document.getElementById("player-img").value;
    let player1 = new Player(name,age,weight,height,nationality,img);
    player.push(player1);
    console.log(player);
    displayPlayer();
    setData();
}
function deletePlayer(id){
    player.splice(id,1);
    displayPlayer()
    setData()
}
function editPlayer(index){
    document.getElementById("edit-name").value = player[index].name;
    document.getElementById("edit-age").value = player[index].age;
    document.getElementById("edit-weight").value = player[index].weight;
    document.getElementById("edit-height").value = player[index].height;
    document.getElementById("edit-nationality").value = player[index].nationality;
    document.getElementById("edit-img").value = player[index].img;
    current = index;
}
function upDate(){
    let index = current;
    player[index].name = document.getElementById("edit-name").value;
    player[index].age = document.getElementById("edit-age").value;
    player[index].weight = document.getElementById("edit-weight").value;
    player[index].height= document.getElementById("edit-height").value;
    player[index].nationality = document.getElementById("edit-nationality").value;
    player[index].img = document.getElementById("edit-img").value;
    displayPlayer();
    setData();
}
function setData(){
    window.localStorage.setItem('name',JSON.stringify(player))
}
function getData(){
    let arr = localStorage.hasOwnProperty('name')?JSON.parse(localStorage.getItem('name')):[];
    let objs = [];
    for (let i =0;i<arr.length;i++){
        let name = new Player(arr[i]["name"],arr[i]["age"],arr[i]["weight"],arr[i]["height"],arr[i]["nationality"],arr[i]["img"]);
        objs.push(name);
    }
}
displayPlayer()