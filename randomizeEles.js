/**
 *
 * @param {number} nodeCounts Number of nodes to generate, will automatically generate 10x edges, default is 1000
 * @param {string} labels The values can be Structure
 * @param {string} nodeLabels The values can be class, method, field, interface, enum, annotation
 */
function randomizeEles(
  nodeCounts = 1000,
  nodeLabels = "Structure",
  edgeLabels = "class"
) {
  const edgeCounts = nodeCounts * 10;

  const nodes = [];
  for (let i = 0; i < nodeCounts; i++) {
    const properties = {
      simpleName: i.toString(),
      kind: "class",
      traces: [],
      description: "This is node " + i.toString(),
    };
    nodes.push({ data: { id: i.toString(), labels: nodeLabels, properties } });
  }

  const edges = [];
  for (let i = 0; i < edgeCounts; i++) {
    const source = Math.floor(Math.random() * nodeCounts).toString();
    const target = Math.floor(Math.random() * nodeCounts).toString();
    const properties = {
      weight: 1,
      traces: [],
    };
    edges.push({
      data: { id: "e" + i.toString(), source, target, label: edgeLabels, properties },
    });
  }
  return { elements: { nodes: nodes, edges: edges } };
}
