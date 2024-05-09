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
    this._wrapper.prepend(cardElement);
  };
}
