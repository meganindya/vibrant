import ModalCreate from './ModalCreate.vue';

export default {
  component: ModalCreate,
  title: 'Pages/Catalog/ModalCreate',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    ModalCreate,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <ModalCreate
      
    />
  `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
