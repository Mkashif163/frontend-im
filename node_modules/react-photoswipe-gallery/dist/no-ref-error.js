export class NoRefError extends Error {
  constructor() {
    super(...arguments);
    /* istanbul ignore next */
    this.message = `No valid \`ref\` provided.
You should use \`ref\` from render prop of Item component.
Example:
<Item>{({ ref }) => <div ref={ref}></div>}</Item>\n`;
  }
}