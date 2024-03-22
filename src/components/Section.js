export default class Section {
  constructor({ items, renderer }, cardsWrapper) {
    this._items = items;
    this._renderer = renderer;
    this._cardsWrapper = cardsWrapper;
  }

  renderItems = () => {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  };

  addItem = (cardElement) => {
    this._cardsWrapper.prepend(cardElement);
  };
}
