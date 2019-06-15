let playerName = 'Herbert';
let healthStatus = document.querySelector("#health");
let hitStatus = document.querySelector("#hits");

let target = {
  playerHealth: 100,
  numberOfHits: 0,
  attacks: {
    slap: 1,
    punch: 5,
    kick: 10
  },
  items: []
}

let items = {
  shield: { name: 'Shield', modifier: .2, description: 'It protects!' },
  bat: { name: 'Bat', modifier: 2, description: 'Bonk!' },
  fire: { name: 'Fire', modifier: 3, description: 'IT BURNS!' }
}

function slap() {
  target.playerHealth -= Math.trunc(1 * addMods())
  target.numberOfHits++
  update()
  return;
}

function punch() {
  target.playerHealth -= Math.trunc(5 * addMods())
  target.numberOfHits++
  update()
  return;
}

function kick() {
  target.playerHealth -= Math.trunc(10 * addMods())
  target.numberOfHits++
  update()
  return;
}

// function giveItem(item) {

// }

function giveShield() {
  target.items.push(items.shield)
  return;
}

function giveBat() {
  target.items.push(items.bat)
  return;
}

function giveFire() {
  target.items.push(items.fire)
  return;
}

function addMods() {
  let modifier = 0;
  for (let i = 0; i < target.items.length; i++) {
    if (target.items[i].name == 'Fire') {
      modifier += target.items[i].modifier;
    }
    if (target.items[i].name == 'Bat') {
      modifier += target.items[i].modifier;
    }
    if (modifier == 0) {
      ++modifier;
    }
    if (target.items[i].name == 'Shield') {
      modifier *= 0.2;
    }
  }
  debugger
  return modifier;
}

function update() {
  healthStatus.innerHTML = target.playerHealth.toString()
  hitStatus.innerHTML = target.numberOfHits.toString()
  return;
}

update()