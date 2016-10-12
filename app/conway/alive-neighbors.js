export default function aliveNeighbors(neighbors) {
  let alive = 0;

  for (let i = 0; i < neighbors.length; i++) {
    if (neighbors[i] == true) {
      alive = alive + 1;
    } else {
      alive = alive + 0;
    }
    return alive;
  }
}
