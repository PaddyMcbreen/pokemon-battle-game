class Pokeball {
    constructor (pokemon){
    this.contents = pokemon
    }
    
    throwPokeball(pokemon){
    if (!this.contents){
    this.contents = pokemon
    console.log(`${pokemon.name} has been caught!`)
    } 

    else if (!this.contents && pokemon === undefined){
    console.log(`there is no pokemon stored inside`)
    } 

    else if (this.contents != undefined && pokemon != undefined){
    console.log(`this pokeball already contains a pokemon`)
    }

    else if (pokemon === undefined){
        console.log(`${this.contents.name}, come to battle!`)
        return this.contents
    }

    }
    
    
    isEmpty() {
    if (!this.contents){
    return true
    }
    return false
    }
    

    contains() {
    if (!this.contents){
    console.log("empty...")
    return 'empty'
    }
    console.log(this.contents.name)
    return this.contents.name
    }
}






module.exports = {Pokeball}
