import ModalShare from './ModalShare.vue';

export default {
  component: ModalShare,
  title: 'Pages/Catalog/ModalShare',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    ModalShare,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <ModalShare
      
    />
  `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
