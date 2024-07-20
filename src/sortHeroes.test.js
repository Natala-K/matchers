// sortHeroes.test.js
const sortHeroes = require('./sortHeroes');

describe('sortHeroes function', () => {
  test('should sort heroes by health in descending order', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];
    
    const sortedHeroes = [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ];
    
    expect(sortHeroes(heroes)).toEqual(sortedHeroes);
  });

  test('should handle an empty array', () => {
    const heroes = [];
    const sortedHeroes = [];
    
    expect(sortHeroes(heroes)).toEqual(sortedHeroes);
  });

  test('should handle an array with one hero', () => {
    const heroes = [{ name: 'маг', health: 100 }];
    const sortedHeroes = [{ name: 'маг', health: 100 }];
    
    expect(sortHeroes(heroes)).toEqual(sortedHeroes);
  });

  test('should not mutate the original array', () => {
    const heroes = [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ];

    const heroesCopy = [...heroes];
    
    sortHeroes(heroes);
    
    expect(heroes).toEqual(heroesCopy);
  });
});
