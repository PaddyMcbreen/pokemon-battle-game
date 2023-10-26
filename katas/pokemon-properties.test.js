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

describe("PokemonMethods", function(){
    test("returns a takeDamage method and shows the name, damage taken and health remaining", function(){
        // hitPoints - attackDamage = remaining health
        const dragonite = new Pokemon('dragonite', 1000, 500, 'dragon rage')
        const pikachu = new Pokemon('pikachu', 100, 50, 'thundershock')
        const result = pikachu.takeDamage(5)
        expect(result).toBe(95)
    })
})

    describe("PokemonHasFainted", function(){
    test("returns hasFainted (false) when health is zero", function(){
        const dragonite = new Pokemon('dragonite', 700, 1600, 'dragon rage')
        const pikachu = new Pokemon('pikachu', 1000, 500, 'thundershock')
        const result = pikachu.hasFainted(dragonite)
        expect(result).toBe(false)
    })

    test("returns hasFainted (false) when health is zero", function(){
        const dragonite = new Pokemon('dragonite', 100, 30, 'dragon rage')
        const pikachu = new Pokemon('pikachu', 30, 50, 'thundershock')
        const result = pikachu.hasFainted(dragonite)
        expect(result).toBe(true)
    })
})

