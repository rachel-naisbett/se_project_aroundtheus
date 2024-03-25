export default class Section {
  constructor({ items, renderer }, wrapper) {
    this._items = items;
    this._renderer = renderer;
    this._wrapper = wrapper;
  }

  renderItems = () => {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem = (cardElement) => {
    this._wrapper.prepend(cardElement);
  };
}
