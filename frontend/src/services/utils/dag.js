let nodes;

let dag = [];

export function reset({ nodes: n }) {
  nodes = n;

  dagGenerate();
}

export function getDag() {
  return dag;
}

// -----------------------------------------------------------------------------

function parse(node) {
  node.deps.content.forEach((uuid) => (dag[uuid] = node.uuid));
  node.deps.headers.forEach((n) => {
    dag[n.uuid] = node.uuid;
    parse(n);
  });
}

export function dagGenerate() {
  nodes.tree.forEach((node) => {
    dag[node.uuid] = null;
    parse(node);
  });
}
