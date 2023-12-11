import WorkbookDocumentList from './WorkbookDocumentList.vue';

import dataDocument from '@/mock/document.json';
import dataNodes from '@/mock/nodes.json';

export default {
  component: WorkbookDocumentList,
  title: 'Pages/Workbook Document/List',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    WorkbookDocumentList,
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
    <div style="width: 800px">
      <WorkbookDocumentList
        :edit="args.edit"
        :data="data"
      />
    </div>
  `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};

export const Editing = Template.bind({});
Editing.args = {
  edit: true,
};
