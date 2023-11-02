class pluginBase {
  constructor() {
    this.uuid = "padding";
    this.name = "padding";
    this.description = "padding";
    this.severity = "padding"; // 严重性
    this.payload = "padding"; // 问题参数
    this.ref_validation = "padding"; // 参考(验证)

    // 插件当前状态
    this.status = "idle";
  }

  // 外部启动插件的时候传入参数
  init(option) {
    // Plugin Initialize
    this.option = option || null;
  }

  // 启动插件前要检测的内容，可自定义
  precheck() {
    return true;
  }

  // 插件执行后要检测内容，可自定义
  postcheck() {
    return true;
  }

  // 插件执行前要做的事情，可自定义
  // 可以操作options里面内容，比如修改headers，cookie等，或加解密http body
  preOperate(data) {
    // todo
  }

  // 插件执行后要做的事情，可自定义
  // 可以操作options里面内容，比如修改headers，cookie等，或加解密http body
  postOperate(data) {
    // todo
  }

  // 发现异常，调用外部告警
  async pluginAlert(data) {
    
    let id = this.option.id
    let parentId = this.option.parentId
    console.log(data);
    await window.pluginAlert(data);
  }

  async start() {
    if (this.precheck() == false) {
      return false;
    }

    this.preOperate();

    await this.process();

    this.postOperate();

    if (this.postcheck() == false) {
      return false;
    }
  }

  async process() {
    throw new Error("Not Implemented");
  }
}

module.exports = pluginBase;
