export const startsWithAlphanumericRegex = /^[A-Za-z0-9]/;

export const PASSWORD_MIN_LENGTH = 8;

export const PASSWORD_UPPERCASE_REGEX = /[A-Z]/;
export const PASSWORD_NUMBER_REGEX = /[0-9]/;
// Treat any non-alphanumeric, non-whitespace ASCII char as special
export const PASSWORD_SPECIAL_CHAR_REGEX = /[^a-zA-Z0-9\s]/;

export const PASSWORD_CRITERIA_MESSAGE = "Password doesn't satisfy the criteria";

// Email validation regex
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// URL validation regex
export const URL_REGEX = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

// Phone number validation regex (supports international formats)
export const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;

// Pincode/ZIP code validation regex (supports various formats)
export const PINCODE_REGEX = /^[0-9]{4,10}$/;
