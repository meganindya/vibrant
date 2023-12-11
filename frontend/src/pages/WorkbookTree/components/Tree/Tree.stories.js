import Tree from './Tree.vue';
import dataDocument from '../../mock/document.json';
import dataNodes from '../../mock/nodes.json';
import dataGraph from '../../mock/graph.json';

export default {
  component: Tree,
  title: 'Pages/Workbook Tree/Tree',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    Tree,
  },
  setup() {
    return {
      args,

      data: {
        document: dataDocument,
        nodes: dataNodes,
        graph: dataGraph,
      },
    };
  },
  template: `
    <Tree
      :data="data"
    />
    `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
