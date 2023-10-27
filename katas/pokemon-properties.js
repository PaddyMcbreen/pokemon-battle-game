class Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        this.name = name
        this.hitPoints = hitPoints
        this.attackDamage = attackDamage
        this.move = move || 'tackle'
    }

    takeDamage(damage) {
        if (damage > 0) {
            const health = this.hitPoints - damage;
            if (health < 0) {
                this.hitPoints = 0;
            } else {
                this.hitPoints = health;
            }
        }
        return this.hitPoints;
    }

    useMove(){
        const moveStr = `${this.name} used his special move ${this.move}`
        console.log(moveStr)
        return this.attackDamage
    }

    hasFainted(){
        return this.hitPoints <= 0
    }
}

class Fire extends Pokemon{
    constructor(name, hisPoints, attackDamage, move){
        super(name, hisPoints, attackDamage, move)
        this.type = 'fire'
    }
    isEffectiveAgainst(input){
        return (input.type === 'grass') ? true : false
    }
    isWeakTo(input){
        return (input.type === 'water') ? true : false
    }
}
class Water extends Pokemon{
    constructor(name, hisPoints, attackDamage, move){
        super(name, hisPoints, attackDamage, move)
        this.type = 'water'
    }
    isEffectiveAgainst(input){
        return (input.type === 'fire') ? true : false
    }
    isWeakTo(input){
        return (input.type === 'grass') ? true : false
    }

}
class Grass extends Pokemon{
    constructor(name, hisPoints, attackDamage, move){
        super(name, hisPoints, attackDamage, move)
        this.type = 'grass'
    }
    isEffectiveAgainst(input){
        return (input.type === 'water') ? true : false
    }
    isWeakTo(input){
        return (input.type === 'fire') ? true : false
    }
    
}
class Normal extends Pokemon{
    constructor(name, hisPoints, attackDamage, move){
        super(name, hisPoints, attackDamage, move)
        this.type = 'normal'
    }
    isEffectiveAgainst(input){
        return (input.type === 'grass' || input.type === 'fire'  || input.type === 'water' ) ? false : true


    }
    isWeakTo(input){
        return (input.type === 'grass' || input.type === 'fire'  || input.type === 'water' ) ? false : true
    }
    
}

class FirePokemon extends Fire{  
    constructor(name, hisPoints, attackDamage){
        super(name, hisPoints, attackDamage)
        this.move = 'ember'
    }
}
class WaterPokemon extends Water{  
    constructor(name, hisPoints, attackDamage){
        super(name, hisPoints, attackDamage)
        this.move = 'water gun'
    }
}
class GrassPokemon extends Grass{
    constructor(name, hisPoints, attackDamage){
        super(name, hisPoints, attackDamage)
        this.move = 'vine whip'
    }
}

class NormalPokemon extends Normal{
    constructor(name, hisPoints, attackDamage, move){
        super(name, hisPoints, attackDamage, move)
    }
}


module.exports = {Pokemon, Fire, Water, Grass, Normal, FirePokemon, WaterPokemon, GrassPokemon, NormalPokemon}
