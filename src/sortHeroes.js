// sortHeroes.js

/**
 * Функция для сортировки героев по уровню здоровья в порядке убывания.
 * @param {Array} heroes - Массив объектов с информацией о героях.
 * @returns {Array} - Отсортированный массив.
 */
function sortHeroes(heroes) {
    return heroes.sort((a, b) => b.health - a.health);
  }
  
  module.exports = sortHeroes;
  