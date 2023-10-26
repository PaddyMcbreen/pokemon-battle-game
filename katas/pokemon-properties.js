class Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        this.name = name,
        this.hitPoints = hitPoints,
        this.attackDamage = attackDamage
        this.move = move || 'tackle'
    }

    takeDamage(damage){
        const health = this.hitPoints - damage

        if (damage > 0){
            return health
        } 
        if (this.hitPoint < 0){
            this.hitPoint = 0
        } 
    }

    useMove(){
        console.log(`${this.name} used his special move ${move}`)
    }

    hasFainted(){
        return this.hitPoints <= 0
    }
}

// class Fainted extends Pokemon {
//     constructor(name, hitPoints, attackDamage){
//         super(name, hitPoints, attackDamage)

//         const hasFainted = true
//         const hasNotFainted = false

//      if (this.health <= 0){
//         return hasFainted
//     } else{
//         return hasNotFainted
//     }}
// }


module.exports = Pokemon