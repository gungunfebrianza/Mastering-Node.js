// A string is always a string so this one is easy.Except if called with new (new String) typeof will instead return "object".So to also include those strings instanceof can be used.

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

// From typeof more things than just an ordinary number will return "number" like NaN and Infinity.To know if a value really is a number the function isFinite is also required.

function isNumber(value) {
  return typeof value === 'number' && isFinite(value);
}

// In javascript arrays are not true arrays like in java and in other languages.They're actually objects so typeof will return "object" for them. To know if something's really an array its constructor can be compared to Array.

function isArray(value) {
  return value && typeof value === 'object' && value.constructor === Array;
}

Array.isArray(value);

// Functions are functions so here just typeof is enough.

function isFunction(value) {
  return typeof value === 'function';
}

/* 
Many things are objects in javascript. To know if a value is an object that can have properties and be looped through, its constructor can be compared to Object. It doesn't work for objects created from classes, then the instanceof operator can be used instead. */

// Returns if a value is an object
function isObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

/* Most times you don't need to check explicitly for null and undefined since they're both falsy values.However to do it below functions does the trick. */

function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

// For booleans typeof is enough since it returns "boolean" for both true and false.

function isBoolean(value) {
  return typeof value === 'boolean';
}

/* Date isn't really a data type in javascript. But to know if something's a Date object it can be checked with instanceof. */

function isDate(value) {
  return value instanceof Date;
}

/* In ES6 the new datatype Symbol was added.Nicely enough typeof returns "symbol" for it so no more logic is required. */

function isSymbol(value) {
  return typeof value === 'symbol';
}