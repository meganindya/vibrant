import Login from './Login.vue';

export default {
  component: Login,
  title: 'Pages/Login',
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  components: {
    Login,
  },
  setup() {
    return {
      args,

      handlerLogin(username, password) {
        console.log('login', username, password);
      },
    };
  },
  template: `
    <Login
      :error="args.error"
      @submit="handlerLogin"
    />
  `,
});

// -----------------------------------------------------------------------------

export const PageDefault = Template.bind({});
PageDefault.args = {};
PageDefault.storyName = 'Page';

export const PageError = Template.bind({});
PageError.args = {
  error: true,
};
PageError.storyName = 'Page - error';
