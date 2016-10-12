import aliveNeighbors from './alive-neighbors';
let alive = 0;
export default function shouldStayAlive(neighbors) {
  if (aliveNeighbors[neighbors] >= 3) {
    return true;
  }

  return alive;
}
