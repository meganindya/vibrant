type TTreeNodeInfo = {
  type: 'l1' | 'l2' | 'l3' | 'content';
  parent: string | null;
};

type TTreeNode = {
  id: string;
  prev: TTreeNode[] | null;
  next: TTreeNode[] | null;
  info: TTreeNodeInfo;
  width: number;
};

type TTreeData = {
  nodes: Record<string, TTreeNodeInfo>;
  roots: string[];
  leafs: string[];
  dag: Record<string, string[]>;
};

// -----------------------------------------------------------------------------

function _calculateNodeWidth(node: TTreeNode): number {
  if (node.next === null) return 1;

  node.width = node.next
    .map((nodeNext) => _calculateNodeWidth(nodeNext))
    .reduce((a, b) => a + b, 0);

  return node.width;
}

// -----------------------------------------------------------------------------

export function generateTree({ nodes, roots, dag }: TTreeData): TTreeNode[] {
  const mapNode: Record<string, TTreeNode> = Object.fromEntries(
    Object.keys(dag).map((nodeId) => [
      nodeId,
      {
        id: nodeId,
        prev: null,
        next: null,
        info: nodes[nodeId],
        width: 0,
      },
    ]),
  );

  Object.keys(dag).forEach((nodeIdCurr) => {
    // if (dag[nodeIdCurr] === null) {
    //   mapNode[nodeIdCurr].next = null;
    // } else {
    //   if (dag[nodeIdCurr].length === 1) {
    //     let nodeIdNexts = dag[nodeIdCurr];
    //     do {
    //       nodeIdNexts = dag[nodeIdNexts[0]];
    //       if (nodeIdNexts === null) break;
    //     } while (nodes[nodeIdNexts[0]].type === 'content');

    //     mapNode[nodeIdCurr].next =
    //       nodeIdNexts === null ? null : nodeIdNexts.map((nodeIdNext) => mapNode[nodeIdNext]);
    //   } else {
    //     mapNode[nodeIdCurr].next = dag[nodeIdCurr].map((nodeIdNext) => mapNode[nodeIdNext]);
    //   }
    // }

    mapNode[nodeIdCurr].next =
      dag[nodeIdCurr] === null ? null : dag[nodeIdCurr].map((nodeIdNext) => mapNode[nodeIdNext]);

    dag[nodeIdCurr]?.forEach((nodeIdNext) => {
      if (mapNode[nodeIdNext].prev === null) mapNode[nodeIdNext].prev = [];
      mapNode[nodeIdNext].prev?.push(mapNode[nodeIdCurr]);
    });
  });

  const nodeRoots = roots.map((nodeId) => mapNode[nodeId]);

  nodeRoots.forEach((nodeRoot) => _calculateNodeWidth(nodeRoot));

  Object.entries(mapNode).forEach(([nodeId, node]) => console.log(nodeId, node.width));

  return nodeRoots;
}
