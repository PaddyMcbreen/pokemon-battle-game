class Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        this.name = name,
        this.hitPoints = hitPoints,
        this.attackDamage = attackDamage
        this.move = move || 'tackle'
    }
}

// const dragonite = new
// console.log(Pokemon)


module.exports = Pokemon