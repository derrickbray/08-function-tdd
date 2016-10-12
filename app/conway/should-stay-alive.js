import aliveNeighbors from './alive-neighbors';

export default function shouldStayAlive(neighbors) {
  for (let i = 0; i < neighbors.length; i++)
    if (neighbors[i] >= 2)
      return true;
}
