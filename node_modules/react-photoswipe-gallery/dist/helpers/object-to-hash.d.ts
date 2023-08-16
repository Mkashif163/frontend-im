export type InputObject = Record<string, string | number | undefined>;
declare function objectToHash(obj: InputObject): string;
export default objectToHash;
