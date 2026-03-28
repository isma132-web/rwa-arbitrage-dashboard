// src/utils/helpers.ts

/**
 * Validation and Error Handling Utilities
 */

/**
 * Validates if the given value is a number.
 * @param value - The value to validate.
 * @returns boolean - Returns true if the value is a number; otherwise false.
 */
export function isNumber(value: any): boolean {
    return typeof value === 'number' && !isNaN(value);
}

/**
 * Validates if the given value is a string.
 * @param value - The value to validate.
 * @returns boolean - Returns true if the value is a string; otherwise false.
 */
export function isString(value: any): boolean {
    return typeof value === 'string';
}

/**
 * Throws an error with a custom message.
 * @param message - The error message.
 */
export function throwError(message: string): void {
    throw new Error(message);
}

/**
 * Validates if the given array is not empty.
 * @param array - The array to validate.
 * @returns boolean - Returns true if the array is not empty; otherwise false.
 */
export function isArrayNotEmpty(array: any[]): boolean {
    return Array.isArray(array) && array.length > 0;
}