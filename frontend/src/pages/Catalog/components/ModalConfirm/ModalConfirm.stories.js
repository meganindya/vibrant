import ModalConfirm from './ModalConfirm.vue';

export default {
  component: ModalConfirm,
  title: 'Pages/Catalog/ModalConfirm',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    ModalConfirm,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <ModalConfirm
      
    />
  `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
