import Notes from './Notes.vue';
import dataNotes from '@/mock/notes.json';

export default {
  component: Notes,
  title: 'Pages/Workbook Document/Notes',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    Notes,
  },
  setup() {
    return {
      args,

      data: {
        notes: dataNotes,
      },
    };
  },
  template: `
    <Notes
      :items="data"
    />
    `,
});

// -----------------------------------------------------------------------------

export const Default = Template.bind({});
Default.args = {};
