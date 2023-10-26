const Pokemon = require("./pokemon-properties")

describe("PokemonProperties", function(){
    test("Returns a typeof class", function(){
        expect(typeof Pokemon).toBe('function')
    })

    test("Uses a constructor", function(){
        expect(typeof constructor).toBe('function')
    })

    test("is passed a name", function(){
        //arrange
        const pikachu = new Pokemon('Pikachu')
        //assert
        expect(pikachu.name).toBe('Pikachu')
    })

    test("is passed a hitPoints property", function(){
        //arrange
        const pikachu = new Pokemon('Pikachu', 200)
        //assert
        expect(pikachu.hitPoints).toBe(200)
    })

    test("is passed a attackDamage property", function(){
        //arrange
        const pikachu = new Pokemon('Pikachu', 200, 1000)
        //assert
        expect(pikachu.attackDamage).toBe(1000)
    })

    test("is passed a move property", function(){
        //arrange
        const pikachu = new Pokemon('Pikachu', 200, 1000, 'thundershock')
        //assert
        expect(pikachu.move).toBe('thundershock')
    })

    test("is no move property is passed, default 'tackle'", function(){
        //arrange
        const pikachu = new Pokemon('Pikachu', 200, 1000)
        //assert
        expect(pikachu.move).toBe('tackle')
    })
    
    test("all the arguments work together", function(){
        //arrange
        const dragonite = new Pokemon('dragonite', 500, 500, 'dragon rage')   
      //assert
        expect(dragonite.name).toBe('dragonite')
        expect(dragonite.hitPoints).toBe(500)
        expect(dragonite.attackDamage).toBe(500)
        expect(dragonite.move).toBe('dragon rage')
    })
    
    
    
})




// A Pokemon will need to have the following properties:
// Uses a constructor
// name: the name its given
// hitPoints: the amount of health the Pokemon has, represented as a number
// attackDamage: the amount of damage a Pokemon can inflict (should be a number)
// move: This is the move the Pokemon does when battling, this should default to "tackle"


// -- TESTS -- //
// returns a typeof class
// returns a name
// returns a hitPoints
// returns a attackDamage
// returns a move (tackle)
// returns everything

