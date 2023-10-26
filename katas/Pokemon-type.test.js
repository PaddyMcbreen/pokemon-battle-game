const { Pokemon, Fire, Normal, Water, Grass } = require('./pokemon-properties')

describe('FirePokemon', () => {
    test('should check instance of class', () => {
        const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
        expect(firePokemon instanceof Pokemon).toBe(true)
    })
    test('should check type of pokemon', () => {
        const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
        expect(firePokemon.type).toBe('fire')

    })
    describe('isEffectiveAgainst', () => {
        test('Should check effectiveness against other pokemon types ', () => {
            const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
            const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
            const result = firePokemon.isEffectiveAgainst(grassPokemon)
            expect(result).toBe(true)
        })
    })
    describe('isWeakTo', () => {
        test('should check the type of pokemon is weak to', () => {
            const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
            const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
            const result = firePokemon.isWeakTo(waterPokemon)
            expect(result).toBe(true)
        })
    })
})
describe('GrassPokemon', () => {
    test('should check instance of class', () => {
        const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
        expect(grassPokemon instanceof Pokemon).toBe(true)
    })
    test('should check type of pokemon', () => {
        const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
        expect(grassPokemon.type).toBe('grass')

    })
    describe('isEffectiveAgainst', () => {
        test('Should check effectiveness against other pokemon types ', () => {
            const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
            const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
            const result = grassPokemon.isEffectiveAgainst(waterPokemon)
            expect(result).toBe(true)
        })
    })
    describe('isWeakTo', () => {
        test('should check the type of pokemon is weak to', () => {
            const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
            const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
            const result = grassPokemon.isWeakTo(firePokemon)
            expect(result).toBe(true)
        })
    })
})
describe('waterPokemon', () => {
    test('should check instance of class', () => {
        const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
        expect(waterPokemon instanceof Pokemon).toBe(true)
    })
    test('should check type of pokemon', () => {
        const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
        expect(waterPokemon.type).toBe('water')

    })
    describe('isEffectiveAgainst', () => {
        test('Should check effectiveness against other pokemon types ', () => {
            const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
            const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
            const result = waterPokemon.isEffectiveAgainst(firePokemon)
            expect(result).toBe(true)
        })
    })
    describe('isWeakTo', () => {
        test('should check the type of pokemon is weak to', () => {
            const waterPokemon = new Water('Squirtle', 110, 40, 'water blast')
            const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
            const result = waterPokemon.isWeakTo(grassPokemon)
            expect(result).toBe(true)
        })
    })
})
describe('waterPokemon', () => {
    test('should check instance of class', () => {
        const normalPokemon = new Normal('Machamp', 110, 60, 'Fury fist')
        expect(normalPokemon instanceof Pokemon).toBe(true)
    })
    test('should check type of pokemon', () => {
        const normalPokemon = new Normal('Machamp', 110, 60, 'Fury fist')
        expect(normalPokemon.type).toBe('normal')

    })
    describe('isEffectiveAgainst', () => {
        test('Should check effectiveness against other pokemon types ', () => {
            const normalPokemon = new Normal('Machamp', 110, 60, 'Fury fist')
            const grassPokemon = new Grass('Gloom', 110, 40, 'Poison leaves')
            const result = normalPokemon.isEffectiveAgainst(grassPokemon)
            expect(result).toBe(true)
        })
    })
    describe('isWeakTo', () => {
        test('should check the type of pokemon is weak to', () => {
            const normalPokemon = new Normal('Machamp', 110, 60, 'Fury fist')
            const firePokemon = new Fire('Charizard', 100, 50, 'Dragon Roar!')
            const result = normalPokemon.isWeakTo(firePokemon)
            expect(result).toBe(true)
        })
    })
})
