import WorkbookDocument from './WorkbookDocument.vue';
import { Navbar } from '@/components';

import dataDocument from '@/mock/document.json';
import dataNodes from '@/mock/nodes.json';
import dataNotes from '@/mock/notes.json';

export default {
  component: WorkbookDocument,
  title: 'Pages/Workbook Document',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    WorkbookDocument,
    Navbar,
  },
  setup() {
    return {
      args,

      data: {
        document: dataDocument,
        nodes: dataNodes,
        notes: dataNotes,
      },
    };
  },
  template: `
    <WorkbookDocument
      :data="data"
    />
  `,
});

// -----------------------------------------------------------------------------

export const Page = Template.bind({});
Page.args = {};
