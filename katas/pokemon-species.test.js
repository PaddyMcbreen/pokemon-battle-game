const {FirePokemon, Fire, WaterPokemon, Water, GrassPokemon, Grass, NormalPokemon, Normal} = require('./pokemon-properties')


describe('FirePokemon', () => {
    test('check if class FirePokemon is an instance of Fire class', () => {
        const firePokemon = new FirePokemon('Charmander', 100, 50) 
        
        expect(firePokemon instanceof Fire).toBe(true)
    })
    test('FirePokemon move is set to "ember"', () => {
        const firePokemon = new FirePokemon('Charmander', 100, 50)

        expect(firePokemon.move).toBe('ember')
    })
    test('FirePokemon class name is set to "Charmnder"', () => {
        const firePokemon = new FirePokemon('Charmander',100, 50)
        expect(firePokemon.name).toBe('Charmander')
    })
    
})

describe('WaterPokemon', () => {
    test('check if class WaterPokemon is an instance of Water class', () => {
        const waterPokemon = new WaterPokemon('Squirtle', 100, 50) 
        expect(waterPokemon instanceof Water).toBe(true)
    })
    test('WaterPokemon move is set to "water gun"', () => {
        const waterPokemon = new WaterPokemon('Squirtle', 100, 50)

        expect(waterPokemon.move).toBe('water gun')
    })
    test('WaterPokemon class name is set to "Squirtle"', () => {
        const waterPokemon = new WaterPokemon('Squirtle', 100, 50)

        expect(waterPokemon.name).toBe('Squirtle')
    })
    
})
describe('GrassPokemon', () => {
    test('check if class GrassPokemon is an instance of Grass class', () => {
        const grassPokemon = new GrassPokemon('Bulbasaur' ,100, 50) 
        
        expect(grassPokemon instanceof Grass).toBe(true)
    })
    test('GrassPokemon move is set to "vine whip"', () => {
        const grassPokemon = new GrassPokemon('Bulbasaur' ,100, 50)

        expect(grassPokemon.move).toBe('vine whip')
    })
    test('GrassPokemon class name is set to "Bulbasaur"', () => {
        const grassPokemon = new GrassPokemon('Bulbasaur' ,100, 50)

        expect(grassPokemon.name).toBe('Bulbasaur')
    })
    
})
describe('NormalPokemon', () => {
    test('check if class NormalPokemon is an instance of Normal class', () => {
        const normalPokemon = new NormalPokemon('Rattata' ,100, 50) 
        expect(normalPokemon instanceof Normal).toBe(true)
    })
    test('NormalPokemon class name is set to "Rattata"', () => {
        const normalPokemon = new NormalPokemon('Rattata' ,100, 50)
        expect(normalPokemon.name).toBe('Rattata')
    })
    
})


describe('Throw method', () => {
    test('should ...', () => {
        
    })
    
})
