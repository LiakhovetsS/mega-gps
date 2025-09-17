import {IParserCSV, parseData, ParseList} from '../types/interfaces.js';

/**
 * @class Parser
 * @description Клас для парсингу даних з CSV формату
 * @description Використовується для парсингу даних з API Mega GPS
 * @param {string} CSV_DELIMITER - Роздільник CSV формату
 *
 * */
export class Parser implements IParserCSV {
    private readonly CSV_DELIMITER = ';';

    /**
     * @description - Парсинг даних з CSV формату
     * @param {string} rawData - Сирі дані з API Mega GPS
     * @returns {object[]} - Масив об'єктів з даними трекера
     * */
    parse<T extends parseData>(rawData: string): ParseList<T> {
        const nonEmptyLines: string[] = this.splitIntoLines(rawData);
        if (nonEmptyLines.length === 0) {
            return [];
        }

        const headers: string[] = this.parseHeaders(nonEmptyLines[0]);
        const rows: string[][] = this.parseRows(nonEmptyLines.slice(1));

        return this.combineHeadersWithRows<T>(headers, rows);
    }

    /**
     * @description - Розділення сирих даних на рядки
     * @param {string} rawData - Сирі дані з API Mega GPS
     * @returns {string[]} - Масив рядків
     * */
    private splitIntoLines(rawData: string): string[] {
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
    private parseHeaders(headerLine: string): string[] {
        return headerLine.split(this.CSV_DELIMITER);
    }

    /**
     * @description - Парсинг рядків з даними
     * @param {string[]} dataLines - Масив рядків з даними
     * @returns {string[][]} - Масив масивів рядків з даними
     * */
    private parseRows(dataLines: string[]): string[][] {
        return dataLines.map(line =>
            line.split(this.CSV_DELIMITER)
        );
    }

    /**
     * @description - Комбінування заголовків з рядками
     * @param {string[]} headers - Масив заголовків
     * @param {string[][]} rows - Масив рядків з даними
     * @returns {object[]} - Масив об'єктів з даними трекера
     *
     * */
    private combineHeadersWithRows<T extends parseData>(headers: string[], rows: string[][]): T[] {
        return rows.map(row => {
            const record: parseData = {} as T;
            headers.forEach((header: string | number, index) => {
                record[header] = row[index];
            });
            return record as T;
        });
    }
}
