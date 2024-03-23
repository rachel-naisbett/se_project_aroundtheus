export default class Section {
  constructor({ items, renderer }, Wrapper) {
    this._items = items;
    this._renderer = renderer;
    this._Wrapper = Wrapper;
  }

  renderItems = () => {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem = (cardElement) => {
    this._Wrapper.prepend(cardElement);
  };
}
