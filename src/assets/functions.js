// this file is used to save function as utils

export default function generateUniqueId() {
  const timestamp = new Date().getTime();
  const randomNum = Math.floor(Math.random() * 1000);

  const uniqueId = `${timestamp}-${randomNum}`;
  return uniqueId;
}
