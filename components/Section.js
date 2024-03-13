export default class Section {
  constructor({ items, renderer }, cardWrapper) {
    this._items = items;
    this._renderer = renderer;
    this._cardWrapper = cardWrapper;
  }

  renderItems = () => {
    this._items.forEach((item) => {
      this._renderer();
    });
  };

  addItem = (cardView) => {
    this._cardWrapper.prepend(cardView);
  };
}
