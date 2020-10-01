class Player {
    constructor( name, age, weight, height, nationality, img) {
        this.id = 0;
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.nationality = nationality;
        this.img = img;
    }
    getHtml(){
        let str = `<tr>
                     <td>${this.id +1}</td>
                     <td>${this.name}</td>
                     <td>${this.age}</td>
                     <td>${this.weight}</td>
                     <td>${this.height}</td>
                     <td>${this.nationality}</td>
                     <td><img width="100px" src="${this.img}"></td>
                     <td><button onclick="editPlayer(${this.id})">EDIT</button></td>
                     <td><button onclick="deletePlayer(${this.id})">DELETE</button></td>
                  </tr>`;
        return str;
    }
}
