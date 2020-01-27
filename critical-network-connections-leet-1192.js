/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function (n, connections) {
    let g = [];

    // generate graph
    for ([from, to] of connections) {
        if (!g[from]) g[from] = [];
        if (!g[to]) g[to] = [];
        g[from].push(to);
        g[to].push(from);
    }

    let id = 0;
    let ids = new Array(n).fill(0);
    let low = new Array(n).fill(0);
    let visited = new Array(n).fill(false);
    let bridges = [];

    const dfs = function (at, parent) {
        visited[at] = true;
        id++
        low[at] = ids[at] = id;

        for (let to of g[at]) {
            if(to == parent) continue; // avoid rework or circulation at node. shouldn't be an issue with the problem constraints

            if(!visited[to]) {
                dfs(to, at);

                // backtracking portion. will check to update the low-link
                low[at] = Math.min(low[at], low[to]);
                if(ids[at] < low[to]) {
                    bridges.push([at, to]);
                }
            } else {
                // when the "to" node is already visited, it may have a lower id than the current node's low-link
                low[at] = Math.min(low[at], ids[to]);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i, -1);
        }
    }

    return bridges;
};

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]))