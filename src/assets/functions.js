/**
 * Generates a unique ID based on the current timestamp and a random number.
 *
 * @returns {string} A unique ID string in the format "timestamp-randomNumber".
 *
 * @example
 * const id = generateUniqueId();
 * console.log(id);  // "1631458967435-456"
 */
export default function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000);

  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}
