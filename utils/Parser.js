'use strict';

/**
 * @class Parser
 * @description Клас для парсингу даних з CSV формату
 * @description Використовується для парсингу даних з API Mega GPS
 * @param {string} CSV_DELIMITER - Роздільник CSV формату
 *
 * */
class Parser {
  #CSV_DELIMITER = ';';

  /**
   * @description - Парсинг даних з CSV формату
   * @param {string} rawData - Сирі дані з API Mega GPS
   * @returns {object[]} - Масив об'єктів з даними трекера
   * */
  parse(rawData) {
    const nonEmptyLines = this.#splitIntoLines(rawData);
    if (nonEmptyLines.length === 0) {
      return [];
    }

    const headers = this.#parseHeaders(nonEmptyLines[0]);
    const rows = this.#parseRows(nonEmptyLines.slice(1));

    return this.#combineHeadersWithRows(headers, rows);
  }

  /**
   * @description - Розділення сирих даних на рядки
   * @param {string} rawData - Сирі дані з API Mega GPS
   * @returns {string[]} - Масив рядків
   * */
  #splitIntoLines(rawData) {
    return rawData.split('\n')
      .map(line => line.trim())
      .filter(line => line !== '');
  }

  /**
   * @description - Парсинг заголовків з першого рядка
   * @param {string} headerLine - Перший рядок з даними
   * @returns {string[]} - Масив заголовків
   *
   * */
  #parseHeaders(headerLine) {
    return headerLine.split(this.#CSV_DELIMITER);
  }

  /**
   * @description - Парсинг рядків з даними
   * @param {string[]} dataLines - Масив рядків з даними
   * @returns {string[][]} - Масив масивів рядків з даними
   * */
  #parseRows(dataLines) {
    return dataLines.map(line =>
      line.split(this.#CSV_DELIMITER)
    );
  }

  /**
   * @description - Комбінування заголовків з рядками
   * @param {string[]} headers - Масив заголовків
   * @param {string[][]} rows - Масив рядків з даними
   * @returns {object[]} - Масив об'єктів з даними трекера
   *
   * */
  #combineHeadersWithRows(headers, rows) {
    return rows.map(row => {
      const record = {};
      headers.forEach((header, index) => {
        record[header] = row[index];
      });
      return record;
    });
  }

}

module.exports = Parser;