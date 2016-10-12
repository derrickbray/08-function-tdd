import aliveNeighbors from './alive-neighbors';
const alive = 0;
export default function shouldStayAlive(neighbors) {
    for (let i = 0; i < aliveNeighbors.length; i++) {
        if (aliveNeighbors[i] > 3) {
            return false;
        }
        if (aliveNeighbors[i] < 2) {
            return false;
        } else {
            return true;
        }

    }
}

return aliveNeighbors;
}
