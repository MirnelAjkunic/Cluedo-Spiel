let Suspects = [
    mrGreen = {
        firstName: 'Jacob',
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "green"
    },
    drOrchid = {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "white"
    },
    profPlum = {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
        color: "purple"
    },
    missScarlet = {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
        color: "red"
    },
    mrMustard = {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "yellow"
    }
]
let Weapons = [
    rope = {
        name: "rope",
        weight: 10
    },
    knife = {
        name: "knife",
        weight: 8
    },
    candlestick = {
        name: "candlestick",
        weight: 2
    },
    dumbbell = {
        name: "dumbbell",
        weight: 30
    },
    poison = {
        name: "poison",
        weight: 2
    },
    axe = {
        name: "axe",
        weight: 15
    },
    bat = {
        name: "bat",
        weight: 13
    },
    trophy = {
        name: "trophy",
        weight: 25
    },
    pistol = {
        name: "pistol",
        weight: 20
    }
]
let Rooms = ["Dining Room", "Conservatory", "Kitchen", "Study", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio"];

function random() {
    document.getElementById("show-info").innerHTML = "";
    let x = Math.floor(Math.random() * Suspects.length);
    let y = Math.floor(Math.random() * Weapons.length);
    let z = Math.floor(Math.random() * Rooms.length);
    document.getElementById("image").src = Suspects[x].image;
    document.getElementById("show-info").innerHTML += (`Name: ${Suspects[x].firstName} ${Suspects[x].lastName} <br>`);
    document.getElementById("show-info").innerHTML += (`Room: ${Rooms[z]} <br>`);
    document.getElementById("show-info").innerHTML += (`Weapon is: ${Weapons[y].name} <br>`);
}




