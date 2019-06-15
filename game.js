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
  stick: { name: 'Stick', modifier: 1, description: 'It pokes!' },
  bat: { name: 'Bat', modifier: 3, description: 'Bonk!' },
  fire: { name: 'Fire', modifier: 5, description: 'IT BURNS!' }
}

function slap() {
  target.playerHealth -= 1 + addMods()
  target.numberOfHits++
  update()
  return;
}

function punch() {
  target.playerHealth -= 5 + addMods()
  target.numberOfHits++
  update()
  return;
}

function kick() {
  target.playerHealth -= 10 + addMods()
  target.numberOfHits++
  update()
  return;
}

// function giveItem(item) {

// }

function giveStick() {
  target.items.push(items.stick)
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
    modifier += target.items[i].modifier
  }
  return modifier;
}

function update() {
  healthStatus.innerHTML = target.playerHealth.toString()
  hitStatus.innerHTML = target.numberOfHits.toString()
  return;
}

update()