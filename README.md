# Pokemon Battle Game

For this sprint, head to Northcoder's L2C app:

https://l2c.northcoders.com/courses/fun/pokemon-battler




class Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        this.name = name,
        this.hitPoints = hitPoints,
        this.attackDamage = attackDamage
        this.move = move || 'tackle'
    }
}
