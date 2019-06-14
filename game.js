let playerName = 'Herbert'
let playerHealth = 100;
let numberOfHits = 0;
let healthStatus = document.querySelector("#health")
let hitsStatus = document.querySelector("#hits")

function slap() {
  playerHealth--
  numberOfHits++
  update()
}

function punch() {
  playerHealth -= 5
  numberOfHits++
  update()
}

function kick() {
  playerHealth -= 10
  numberOfHits++
  update()
}

function update() {
  healthStatus.innerHTML = playerHealth.toString()
  hitsStatus.innerHTML = numberOfHits.toString()
}

update()