const {Pokeball, Trainer} = require("./pokeball")
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


describe('Trainer', () => {
  test('should check the typeof class is a function', () => {
    expect(typeof Trainer).toBe('function')
})

test('Tests the constuctor type', () => {
    expect(typeof constructor).toBe('function')
})

test('Checks the instanceof trainer', () => {
  const trainer = new Trainer()
  expect(trainer).toBeInstanceOf(Trainer)
})
  
})


describe('Pokebelt', () => {
  test('Functionality of pokebelt', () => {
    
    expect().toBe()
  })
  
})


describe('Catch Method', () => {
  test('should check that the catch method works on one pokemon', () => {
    const charmander = new FirePokemon('charmander', 100, 50)
    const trainer = new Trainer()
    const pokeball = new Pokeball()

    trainer.catch(charmander, pokeball)

    console.log(trainer.pokebelt)

    expect(trainer.pokebelt[0]).toEqual(new Pokeball(charmander))
  })
  
  test('should check that the catch method works on multiple pokemon', () => {
    const charmander1 = new FirePokemon('charmander', 100, 50)
    const charmander2 = new FirePokemon('charmander', 100, 50)
    const charmander3 = new FirePokemon('charmander', 100, 50)

    const trainer = new Trainer()
    const pokeball1 = new Pokeball()
    const pokeball2 = new Pokeball()
    const pokeball3 = new Pokeball()


    trainer.catch(charmander1, pokeball1)
    trainer.catch(charmander2, pokeball2)
    trainer.catch(charmander3, pokeball3)

    console.log(trainer.pokebelt)

    expect(trainer.pokebelt[0]).toEqual(new Pokeball(charmander1))
    expect(trainer.pokebelt[1]).toEqual(new Pokeball(charmander2))
    expect(trainer.pokebelt[2]).toEqual(new Pokeball(charmander3))
  })

  test('should check that the catch method is limited to 6 pokeballs', () => {
    const charmander1 = new FirePokemon('charmander', 100, 50)
    const charmander2 = new FirePokemon('charmander', 100, 50)
    const charmander3 = new FirePokemon('charmander', 100, 50)
    const charmander4 = new FirePokemon('charmander', 100, 50)
    const charmander5 = new FirePokemon('charmander', 100, 50)
    const charmander6 = new FirePokemon('charmander', 100, 50)
    const charmander7 = new FirePokemon('charmander', 100, 50)

    const trainer = new Trainer()
    const pokeball1 = new Pokeball()
    const pokeball2 = new Pokeball()
    const pokeball3 = new Pokeball()
    const pokeball4 = new Pokeball()
    const pokeball5 = new Pokeball()
    const pokeball6 = new Pokeball()
    const pokeball7 = new Pokeball()


    trainer.catch(charmander1, pokeball1)
    trainer.catch(charmander2, pokeball2)
    trainer.catch(charmander3, pokeball3)
    trainer.catch(charmander4, pokeball4)
    trainer.catch(charmander5, pokeball5)
    trainer.catch(charmander6, pokeball6)
    // trainer.catch(charmander7, pokeball7)

    console.log(trainer.pokebelt)

    expect(trainer.pokebelt[0]).toEqual(new Pokeball(charmander1))
    expect(trainer.pokebelt[1]).toEqual(new Pokeball(charmander2))
    expect(trainer.pokebelt[2]).toEqual(new Pokeball(charmander3))
    expect(trainer.pokebelt[3]).toEqual(new Pokeball(charmander4))
    expect(trainer.pokebelt[4]).toEqual(new Pokeball(charmander5))
    expect(trainer.pokebelt[5]).toEqual(new Pokeball(charmander6))
    expect(trainer.catch(charmander7, pokeball7)).toBe('Pokebelt is full!')
  })
  
})

describe('getPokemon Method', () => {
  test('should ...', () => {
    
    expect().toBe()
  })
  
})





