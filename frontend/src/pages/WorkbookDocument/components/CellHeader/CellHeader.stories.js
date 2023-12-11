import CellHeader from './CellHeader.vue';

export default {
  component: CellHeader,
  title: 'Pages/Workbook Document/CellHeader',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    CellHeader,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div style="
      width: 800px;
    ">
      <CellHeader
        :edit="args.edit"
        :text="args.text"
        :type="args.type"
      />
    </div>
  `,
});

// -----------------------------------------------------------------------------

export const Level1 = Template.bind({});
Level1.args = {
  text: 'Top Level Heading',
  type: 'l1',
};

export const Level2 = Template.bind({});
Level2.args = {
  text: 'Section Heading',
  type: 'l2',
};

export const Level3 = Template.bind({});
Level3.args = {
  text: 'Sub-section Heading',
  type: 'l3',
};

export const Level1Edit = Template.bind({});
Level1Edit.args = {
  edit: true,
  text: 'Top Level Heading',
  type: 'l1',
};

export const Level2Edit = Template.bind({});
Level2Edit.args = {
  edit: true,
  text: 'Section Heading',
  type: 'l2',
};

export const Level3Edit = Template.bind({});
Level3Edit.args = {
  edit: true,
  text: 'Sub-section Heading',
  type: 'l3',
};
