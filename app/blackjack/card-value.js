export default function (cardName) {
  if (cardName === 'ace') {
    return 11;
  }
  if (cardName === 'king') {
    return 10;
  }
  if (cardName === 'queen') {
    return 10;
  }
  if (cardName === 'jack') {
    return 10;
  }
  else {
    return parseInt(cardName);
  }
}
