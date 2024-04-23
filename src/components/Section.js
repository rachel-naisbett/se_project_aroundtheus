export default class Section {
  constructor({ renderer }, wrapper) {
    this._renderer = renderer;
    this._wrapper = wrapper;
  }

  renderItems = (items) => {
    items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem = (cardElement) => {
    // console.log(2);
    // console.log(this._wrapper);
    this._wrapper.prepend(cardElement);
  };
}
