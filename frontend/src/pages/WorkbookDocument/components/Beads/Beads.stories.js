import Beads from './Beads.vue';
import dataDocument from '@/mock/document.json';
import dataNodes from '@/mock/nodes.json';

export default {
  component: Beads,
  title: 'Pages/Workbook Document/Beads',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    Beads,
  },
  setup() {
    return {
      args,

      data: {
        document: dataDocument,
        nodes: dataNodes,
      },
    };
  },
  template: `
    <Beads
      :data="data"
    />
    `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
