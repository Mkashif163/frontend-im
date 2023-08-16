function objectToHash(obj) {
  return Object.entries(obj).map(([key, value]) => value ? `${key}=${value}` : key).join('&');
}
export default objectToHash;