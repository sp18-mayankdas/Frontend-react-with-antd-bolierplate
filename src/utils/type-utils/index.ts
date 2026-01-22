/**
 * Returns whether a value is null.
 *
 * @param {*} val - The value to check.
 * @returns {boolean} True if the value is null, otherwise false.
 */
export function isNull(val: any): boolean {
  return val === null;
}

/**
 * Returns whether a value is defined.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isDefined(val: any) {
  return val !== undefined;
}

/**
 * Returns whether a value is undefined.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isUndefined(val: any) {
  return val === undefined;
}

/**
 * Returns whether a value is an object.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isObject(val: any) {
  return typeof val === 'object' && val !== null;
}

/**
 * Returns whether a value is a function.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isFunction(val: any) {
  return typeof val === 'function';
}

/**
 * Returns whether a value is a number.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isNumber(val: any) {
  return typeof val === 'number';
}

/**
 * Returns whether a value is a string.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isString(val: any) {
  return typeof val === 'string';
}

/**
 * Returns whether a value is an empty string.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isEmptyString(val: any) {
  return isString(val) && val.length === 0;
}

/**
 * Returns whether a value is a non-empty string.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isNonEmptyString(val: any) {
  return isString(val) && val.length !== 0;
}

/**
 * Returns whether a value is an array.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isArray(val: any) {
  return Object.prototype.toString.call(val) === '[object Array]';
}

/**
 * Returns whether a value is not empty array.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isNotEmptyArray(val: any) {
  return isArray(val) && val.length !== 0;
}

/**
 * Returns whether a value is contains atleat one field.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isNotEmptyObject(val: any) {
  return isObject(val) && isNotEmptyArray(Object.keys(val));
}

/**
 * Returns whether a string is JSON or not.
 *
 * @param  {*} val
 * @return {Boolean}
 */
export function isJsonString(val: any) {
  try {
    JSON.parse(val);
  } catch (err) {
    return false;
  }
  return true;
}
