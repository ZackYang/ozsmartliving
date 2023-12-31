export default class Base {
  include: any;
  constructor() {
    this.include = {};
  }
  serialize(data: any) {
    return data;
  }
}