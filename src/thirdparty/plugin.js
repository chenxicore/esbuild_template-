
const pluginBase = require('../plugin-base');


class Plugin extends pluginBase {

  constructor() {
    super();
    this.uuid = "57bbbb16-98a2-4fe7-86cc-d1bdg67df168";
    this.name = "example";
    this.description = "example";
  }

  async process() {

    if (this.option == null) {
      throw new Error("[plugin input] Option is null " + this.uuid);
    }


  }
}

module.exports = Plugin;
