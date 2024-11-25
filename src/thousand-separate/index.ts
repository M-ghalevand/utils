/**
 * Removes all occurrences of a substring from a given string.
 *
 * @param {string} string - The input string from which to remove occurrences of the substring.
 * @param {string} [find] - The substring to remove from the input string. If not provided, the original string is returned.
 * @returns {string} A new string with all occurrences of the substring removed. If the input string is empty, an empty string is returned.
 */
const removeAllOccurrences = (string:  number, find?: string):string => {
    if (!string) {
        return '';
    }
    if (!find) {
        return string.toString();
    }

    return string.toString().split(find).join('');
};

/**
 * Formats the given number by inserting thousand separators.
 *
 * @param {number} [number] - The number to be formatted. If the number is not provided or is 0, the function returns "0".
 * @returns {string} The formatted number with thousand separators.
 */
export const thousandSeparate = (number?: number):string => {
    if (!number || number === 0) {
        return "0";
    } else {
        return removeAllOccurrences(number).replace(/\B(?=(\d{3})+(?!\d))/g, '٫');
    }
};
