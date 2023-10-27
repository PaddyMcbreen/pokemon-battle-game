const {Pokeball} = require("./pokeball")
const {FirePokemon, WaterPokemon, Pokemon} = require("./pokemon-properties")


describe('Pokeball', () => {
    test('should check the typeof class is a function', () => {
        // const result = new Pokeball ()
        expect(typeof Pokeball).toBe('function')
    })

    test('Tests the constuctor type', () => {
        expect(typeof constructor).toBe('function')
    })
})


describe('throwPokeball Method', () => {
  test('should create a Pokeball with the given Pokémon', () => {
    const pikachu = { name: 'Pikachu' };
    const pokeball = new Pokeball(pikachu);
    const result = pokeball.contains();
    expect(result).toEqual('Pikachu');
  });

  test('should catch a Pokémon when the Pokeball is empty', () => {
    const charmander = new FirePokemon('charmander', 100, 50)
    const pokeball = new Pokeball(charmander);
    const result = pokeball.contents
    expect(result).toEqual(charmander);
  });

  test('should not catch a Pokémon when the Pokeball is not empty', () => {
    const charmander = new FirePokemon('charmander', 100, 50)
    const squirtle = new WaterPokemon('squirtle', 100, 50)
    const pokeball = new Pokeball();
    pokeball.throwPokeball(charmander)
    pokeball.throwPokeball(squirtle)
    expect(pokeball.contents).toBe(charmander);
  });

  test('should handle throwing a Pokeball without specifying a Pokémon when not empty', () => {
    const charmander = new FirePokemon('charmander', 100, 50)
    const pokeball = new Pokeball(charmander);
    const result = pokeball.throwPokeball();
    expect(result).toBe(charmander);
  });
});

describe('isEmpty Method', () => {
      test('should return true for isEmpty() when the Pokeball is empty', () => {
        const pokeball = new Pokeball();
        const result = pokeball.isEmpty();
        expect(result).toBe(true)
      });

      test('should return false for isEmpty() when the Pokeball is not empty', () => {
        const pikachu = { name: 'Pikachu' };
        const pokeball = new Pokeball(pikachu);
        const result = pokeball.isEmpty();
        expect(result).toBe(false);
      });
})

describe('Contains Method', () => {
    test('should return "empty" when the Pokeball is empty', () => {
        const pokeball = new Pokeball();
        const result = pokeball.contains();
        expect(result).toEqual('empty');
      });

      test('should return the pokemons name that is stored', () => {
        const charmander = new FirePokemon('charmander', 100, 50)
        const pokeball = new Pokeball(charmander)
        const result = pokeball.contains()
        expect(result).toBe('charmander')
      })
      
})



