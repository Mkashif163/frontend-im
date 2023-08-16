import hashToObject from "./hash-to-object.js";
const hashIncludesNavigationQueryParams = hash => {
  const hashParts = hashToObject(hash);
  return Boolean(hashParts.gid) && Boolean(hashParts.pid);
};
export default hashIncludesNavigationQueryParams;