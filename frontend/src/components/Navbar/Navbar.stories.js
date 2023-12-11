import Navbar from './Navbar.vue';

export default {
  component: Navbar,
  title: 'Components/Navbar',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    Navbar,
  },
  setup() {
    return {
      args,
    };
  },
  template: `
    <div style="
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: red;
    ">
      <div style="
        flex-shrink: 0;
        flex-grow: 0;

        display: grid;
        place-items: center;
      ">
        <Navbar
          :show-btns="args.showBtns"
        />
      </div>
      <div style="
        flex-shrink: 1;
        flex-grow: 0;

        display: grid;
        place-items: center;
        width: 100%;
        background-color: #eee;
      ">
        CONTENT
      </div>
    </div>
  `,
});

// -----------------------------------------------------------------------------

export const NoBtns = Template.bind({});
NoBtns.args = {};

export const WithBtns = Template.bind({});
WithBtns.args = {
  showBtns: true,
};
