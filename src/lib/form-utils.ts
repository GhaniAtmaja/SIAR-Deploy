/**
 * Validation for exact length
 * @param length exact string length
 * @param message error message
 * @returns React Hook Form's validation object
 */
export const exactLength = (length: number, message: string) => ({
  minLength: {
    value: length,
    message,
  },
  maxLength: {
    value: length,
    message,
  },
});

/**
 * Password validation for React Hook Form
 * - Password must be at least 5 characters
 * - Password must contain at least 1 number
 * - Password must contain at least 1 letter
 */
export function validatePassword(value: string) {
  const hasNumber = /[0-9]/;
  const hasLetter = /[a-zA-Z]/;
  const moreThanFive = value.length >= 5;

  const errors = [];
  if (!moreThanFive) {
    errors.push('minimal 5 karakter');
  }
  if (!hasNumber.test(value)) {
    errors.push('minimal 1 angka');
  }
  if (!hasLetter.test(value)) {
    errors.push('minimal 1 huruf');
  }

  const errorMessage = 'Password harus mengandung ' + errors.join(', ');

  return errors.length > 0 ? errorMessage : true;
}
