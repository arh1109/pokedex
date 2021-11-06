const icon = document.getElementsByClassName('far')[0];
//const cursorDiv = document.getElementsByClassName('cursor')[0];
// pokemon array
const pokemon = document.getElementsByClassName('sprite');
const currentPkmn = document.getElementById('pokeleft');
const hpRow = document.getElementById('hp-row');
const atkRow = document.getElementById('atk-row');
const defRow = document.getElementById('def-row');
const spcAtkRow = document.getElementById('spcatk-row');
const spcDefRow = document.getElementById('spcdef-row');
const spdRow = document.getElementById('spd-row');
const pokeName = document.getElementById('poke-name')
const pokeArray = [];




const data = [
    {
        name: "Squirtle",
        nationalNum: 7,
        type1: "water",
        Hp: 44,
        Attack: 48,
        Defense: 65,
        SpecialAttack: 50,
        SpecialDefense: 64,
        Speed: 43
    },
    {
        name: "Gengar",
        nationalNum: 94,
        type1: "Ghost",
        type2: "Poison",
        Hp: 60,
        Attack: 65,
        Defense: 60,
        SpecialAttack: 130,
        SpecialDefense: 75,
        Speed: 110
    },
    {
        name: "Celebii",
        nationalNum: 251,
        type1: "Grass",
        type2: "Psychic",
        Hp: 100,
        Attack: 100,
        Defense: 100,
        SpecialAttack: 100,
        SpecialDefense: 100,
        Speed: 100
    },{
        name: "Pikachu",
        nationalNum: 25,
        type1: "Electric",
        Hp: 35,
        Attack: 55,
        Defense: 40,
        SpecialAttack: 50,
        SpecialDefense: 50,
        Speed: 90
    }, {
        name: "Snorlax",
        nationalNum: 143,
        type1: "Normal",
        Hp: 160,
        Attack: 110,
        Defense: 65,
        SpecialAttack: 65,
        SpecialDefense: 110,
        Speed: 30
    }, {
        name: "Kabutops",
        nationalNum: 141,
        type1: "Rock",
        type2: "Water",
        Hp: 60,
        Attack: 115,
        Defense: 105,
        SpecialAttack: 65,
        SpecialDefense: 70,
        Speed: 80
    }, {
        name: "Heracross",
        nationalNum: 214,
        type1: "Bug",
        type2: "Fighting",
        Hp: 80,
        Attack: 125,
        Defense: 75,
        SpecialAttack: 40,
        SpecialDefense: 95,
        Speed: 85
    }, {
        name: "Magmar",
        nationalNum: 126,
        type1: "Fire",
        Hp: 65,
        Attack: 95,
        Defense: 57,
        SpecialAttack: 100,
        SpecialDefense: 85,
        Speed: 93
    }, {
        name: "Charmander",
        nationalNum: 4,
        type1: "Fire",
        Hp: 39,
        Attack: 52,
        Defense: 43,
        SpecialAttack: 60,
        SpecialDefense: 50,
        Speed: 65
    }, {
        name: "Golem",
        nationalNum: 76,
        type1: "Rock",
        type2: "Ground",
        Hp: 80,
        Attack: 120,
        Defense: 130,
        SpecialAttack: 55,
        SpecialDefense: 65,
        Speed: 45
    }, {
        name: "Eevee",
        nationalNum: 133,
        type1: "Normal",
        Hp: 55,
        Attack: 55,
        Defense: 50,
        SpecialAttack: 45,
        SpecialDefense: 65,
        Speed: 55
    }, {
        name: "Tyranitar",
        nationalNum: 248,
        type1: "Rock",
        type2: "Dark",
        Hp: 100,
        Attack: 134,
        Defense: 110,
        SpecialAttack: 95,
        SpecialDefense: 100,
        Speed: 61
    }, {
        name: "Mr. Mime",
        nationalNum: 122,
        type1: "Psychic",
        Hp: 40,
        Attack: 45,
        Defense: 65,
        SpecialAttack: 100,
        SpecialDefense: 120,
        Speed: 90
    }, {
        name: "Dratini",
        nationalNum: 147,
        type1: "Dragon",
        Hp: 41,
        Attack: 64,
        Defense: 45,
        SpecialAttack: 50,
        SpecialDefense: 50,
        Speed: 50
    }, {
        name: "Lugia",
        nationalNum: 249,
        type1: "Psychic",
        type2: "Flying",
        Hp: 106,
        Attack: 90,
        Defense: 130,
        SpecialAttack: 90,
        SpecialDefense: 154,
        Speed: 110
    }, {
        name: "Ivysaur",
        nationalNum: 2,
        type1: "Grass",
        type2: "Poison",
        Hp: 60,
        Attack: 62,
        Defense: 63,
        SpecialAttack: 80,
        SpecialDefense: 80,
        Speed: 60
    }
]
function changeStats(index) {
    pokeName.textContent = `${data[index].name} #${data[index].nationalNum}`
    hpRow.style.width = `${data[index].Hp*1.5}px`;
    hpRow.textContent = `${data[index].Hp}`;
    atkRow.style.width = `${data[index].Attack*1.5}px`;
    atkRow.textContent = `${data[index].Attack}`;
    atkRow.style.textAlign = 'center';
    defRow.style.width = `${data[index].Defense*1.5}px`;
    defRow.textContent = `${data[index].Defense}`;
    spcAtkRow.style.width = `${data[index].SpecialAttack*1.5}px`;
    spcAtkRow.textContent = `${data[index].SpecialAttack}`;
    spcDefRow.style.width = `${data[index].SpecialDefense*1.5}px`;
    spcDefRow.textContent = `${data[index].SpecialDefense}`;
    spdRow.style.width = `${data[index].Speed*1.5}px`;
    spdRow.textContent = `${data[index].Speed}`;
}

// Under Construction
const pokemon1 = document.getElementsByClassName('sprite')[0];
pokemon1.addEventListener('click', () => {
    changeSelected(1);
    changeStats(0);
})
const pokemon2 = document.getElementsByClassName('sprite')[1];
pokemon2.addEventListener('click', () => {
    changeSelected(2);
    changeStats(1);
})
const pokemon3 = document.getElementsByClassName('sprite')[2];
pokemon3.addEventListener('click', () => {
    changeSelected(3);
    changeStats(2);
})
const pokemon4 = document.getElementsByClassName('sprite')[3];
pokemon4.addEventListener('click', () => {
    changeSelected(4);
    changeStats(3);
})
const pokemon5 = document.getElementsByClassName('sprite')[4];
pokemon5.addEventListener('click', () => {
    changeSelected(5);
    changeStats(4);
})
const pokemon6 = document.getElementsByClassName('sprite')[5];
pokemon6.addEventListener('click', () => {
    changeSelected(6);
    changeStats(5);
})
const pokemon7 = document.getElementsByClassName('sprite')[6];
pokemon7.addEventListener('click', () => {
    changeSelected(7);
    changeStats(6);
})
const pokemon8 = document.getElementsByClassName('sprite')[7];
pokemon8.addEventListener('click', () => {
    changeSelected(8);
    changeStats(7);
})
const pokemon9 = document.getElementsByClassName('sprite')[8];
pokemon9.addEventListener('click', () => {
    changeSelected(9);
    changeStats(8);
})
const pokemon10 = document.getElementsByClassName('sprite')[9];
pokemon10.addEventListener('click', () => {
    changeSelected(10);
    changeStats(9);
})
const pokemon11 = document.getElementsByClassName('sprite')[10];
pokemon11.addEventListener('click', () => {
    changeSelected(11);
    changeStats(10);
})
const pokemon12 = document.getElementsByClassName('sprite')[11];
pokemon12.addEventListener('click', () => {
    changeSelected(12);
    changeStats(11);
})
const pokemon13 = document.getElementsByClassName('sprite')[12];
pokemon13.addEventListener('click', () => {
    changeSelected(13);
    changeStats(12);
})
const pokemon14 = document.getElementsByClassName('sprite')[13];
pokemon14.addEventListener('click', () => {
    changeSelected(14);
    changeStats(13);
})
const pokemon15 = document.getElementsByClassName('sprite')[14];
pokemon15.addEventListener('click', () => {
    changeSelected(15);
    changeStats(14);
})
const pokemon16 = document.getElementsByClassName('sprite')[15];
pokemon16.addEventListener('click', () => {
    changeSelected(16);
    changeStats(15);
});

/////////////////////////////////////
function changeSelected(n) {
    imgSrc = '';
    if(n == 1) {currentPkmn.className = 'squirtle'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/squirtle.gif'}
    if(n == 2) {currentPkmn.className = 'gengar'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/gengar.gif'}
    if(n == 3) {currentPkmn.className = 'celebii'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/celebii.gif'}
    if(n == 4) {currentPkmn.className = 'pikachu'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/pikachu.gif'}
    if(n == 5) {currentPkmn.className = 'snorlax'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/snorlax.gif'}
    if(n == 6) {currentPkmn.className = 'kabutops'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/kabutops.gif'}
    if(n == 7) {currentPkmn.className = 'heracross'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/heracross.gif'}
    if(n == 8) {currentPkmn.className = 'magmar'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/magmar.gif'}
    if(n == 9) {currentPkmn.className = 'charmander'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/charmander.gif'}
    if(n == 10) {currentPkmn.className = 'golem'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/golem.gif'}
    if(n == 11) {currentPkmn.className = 'eevee'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/eevee.gif'}
    if(n == 12) {currentPkmn.className = 'tyranitar'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/tyranitar.gif'}
    if(n == 13) {currentPkmn.className = 'mrmime'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/mrmime.gif'}
    if(n == 14) {currentPkmn.className = 'dratini'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/dratini.gif'}
    if(n == 15) {currentPkmn.className = 'lugia'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/lugia.gif'}
    if(n == 16) {currentPkmn.className = 'ivysaur'; currentPkmn.src='https://raw.githubusercontent.com/arh1109/pokedex/master/images/ivysaur.gif'}
}

changeStats(3)
