const supers = [
  "superman",
  "batman",
  "flash",
  "cyclops",
  "wonder-woman",
  "spider-man",
  "hellboy",
  "wolverine",
  "aquaman",
  "rogue",
  "iron-man",
  "hawk-man",
  "rocket-racoon",
  "groot",
  "thor",
  "human-torch"
]

function randomWord() {
  return supers[Math.floor(Math.random() * supers.length)]
}

export default randomWord;