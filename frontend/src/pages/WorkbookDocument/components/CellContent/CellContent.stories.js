import CellContent from './CellContent.vue';

export default {
  component: CellContent,
  title: 'Pages/Workbook Document/Cell Content',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    CellContent,
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
      <CellContent
        :edit="args.edit"
        :mark="args.mark"
        :type="args.type"
        :data="args.data"
      />
    </div>
    `,
});

// -----------------------------------------------------------------------------

export const DefaultUnmarked = Template.bind({});
DefaultUnmarked.args = {
  mark: false,
};

export const DefaultMarked = Template.bind({});
DefaultMarked.args = {
  mark: true,
};

export const Editing = Template.bind({});
Editing.args = {
  edit: true,
};

export const ContentText = Template.bind({});
ContentText.args = {
  type: 'text',
  data: {
    md: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec cursus dui nec purus auctor, vitae accumsan orci eleifend. **Vivamus condimentum libero eget est pharetra posuere. Aenean id pharetra elit, a feugiat nisl**. _In ligula sem, cursus vitae venenatis nec, convallis eu augue_. Quisque molestie ac **nisl vitae scelerisque**. Cras eu vehicula enim, vel consequat odio. _Ut a dui quam_. Pellentesque facilisis lacus id felis molestie hendrerit.',
  },
};

export const ContentBullets = Template.bind({});
ContentBullets.args = {
  type: 'text',
  data: {
    md: '- Integer sit **amet** vehicula urna.\n- Aliquam sollicitudin, nunc non pellentesque consequat, neque massa vehicula sem, ullamcorper volutpat justo justo venenatis nulla.\n- Duis id gravida libero.',
  },
};

export const ContentTable = Template.bind({});
ContentTable.args = {
  type: 'text',
  data: {
    md: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus libero at.',
      '',
      '| Writer | Nationality | Genre | Most Famous Book |',
      '| :----: | :---------: | :---: | :--------------: |',
      '| Franz Kafka | Austrian | Literature & Fiction, Philosophy, Short Stories | The Metamorphosis |',
      '| Leo Tolstoy | Russian | Literature & Fiction, Philosophy | War & Peace |',
      '| F. Scott Fitzgerald | American | Literature & Fiction, Short Stories | The Great Gatsby |',
      '| H.G. Wells | British | Science Fiction | War of the Worlds |',
    ].join('\n'),
  },
};

export const ContentTrivia = Template.bind({});
ContentTrivia.args = {
  type: 'trivia',
  data: {
    md: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus, odio eget elementum tempus, lectus libero convallis arcu, a eleifend est urna vel felis. Aenean.',
    ].join('\n'),
  },
};

export const ContentImage = Template.bind({});
ContentImage.args = {
  type: 'image',
  data: {
    url: 'https://picsum.photos/id/16/800/600',
  },
};

export const ContentImageText = Template.bind({});
ContentImageText.args = {
  type: 'image-text',
  data: {
    md: '- Integer sit **amet** vehicula urna.\n- Aliquam sollicitudin, nunc non pellentesque consequat, neque massa vehicula sem, ullamcorper volutpat justo justo venenatis nulla.\n- Duis id gravida libero.',
    url: 'https://picsum.photos/id/16/800/600',
  },
};
