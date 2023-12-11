import Catalog from './Catalog.vue';
import data from '../mock/data.json';

export default {
  component: Catalog,
  title: 'Pages/Catalog',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    Catalog,
  },
  setup() {
    return {
      args,

      data,
    };
  },
  template: `
    <Catalog
      :items="data"
    />
  `,
});

// -----------------------------------------------------------------------------

export const Page = Template.bind({});
Page.args = {};
