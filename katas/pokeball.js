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


class Trainer {
    constructor(){
        this.pokebelt = []
    }
    

    catch (pokemon, pokeball){
        if (this.pokebelt.length >= 6){
            return 'Pokebelt is full!'
        }
        else {
            pokeball.throwPokeball(pokemon)
        this.pokebelt.push(pokeball)
        }
    }

    getPokemon (pokemon, pokeball){
        for (let i = 0; i < this.pokebelt.length; i++){
            const chosenPokemon = this.pokebelt[i]
            if (chosenPokemon === pokemon){
                pokeball.throwPokeball(pokemon)
                console.log(`${pokemon.name} has been chosen`)
            }
        }
    }
}






module.exports = {Pokeball, Trainer}
