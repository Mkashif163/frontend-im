function hashToObject(hash) {
  return hash.split('&').reduce((acc, keyValue) => {
    const [key, value] = keyValue.split('=');
    if (key) {
      acc[key] = value;
    }
    return acc;
  }, {});
}
export default hashToObject;