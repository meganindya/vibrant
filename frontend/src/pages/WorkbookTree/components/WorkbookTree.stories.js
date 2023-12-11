import WorkbookTree from './WorkbookTree.vue';
import { Navbar } from '@/components';

export default {
  component: WorkbookTree,
  title: 'Pages/Workbook Tree',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    WorkbookTree,
    Navbar,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <WorkbookTree

    />
    `,
});

// -----------------------------------------------------------------------------

export const Page = Template.bind({});
Page.args = {};
