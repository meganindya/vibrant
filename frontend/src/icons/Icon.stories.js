import IconBulb from './Bulb.vue';
import IconCheck from './Check.vue';
import IconCopy from './Copy.vue';
import IconDocument from './Document.vue';
import IconGraph from './Graph.vue';
import IconList from './List.vue';
import IconLogo from './Logo.vue';
import IconPlus from './Plus.vue';
import IconShare from './Share.vue';
import IconTimes from './Times.vue';
import IconTrash from './Trash.vue';

export default {
  title: 'Icons',
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => ({
  components: {
    IconBulb,
    IconCheck,
    IconCopy,
    IconDocument,
    IconGraph,
    IconList,
    IconLogo,
    IconPlus,
    IconShare,
    IconTimes,
    IconTrash,
  },
  setup() {
    return {
      args,
      getName(pascalCase) {
        const words = [];
        let a = 0;
        let b = 0;
        for (let i = 0; i < pascalCase.length; i++) {
          if (
            (pascalCase[i].toUpperCase() === pascalCase[i] &&
              i !== 0 &&
              pascalCase[i - 1].toUpperCase() !== pascalCase[i - 1]) ||
            (pascalCase[i] >= '0' &&
              pascalCase[i] <= '9' &&
              i !== 0 &&
              !(pascalCase[i] >= '0' && pascalCase[i] <= '9'))
          ) {
            words.push(pascalCase.substring(a, b));
            a = i;
          }
          b++;
        }
        words.push(pascalCase.substring(a, b));

        return words.join(' ');
      },
    };
  },
  template: `
    <template v-if="args.names">
      <ul style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 16px;
        list-style: none;
        margin: 0;
        padding: 16px;
      ">
        <template v-for="(name, i) in args.names" :key="\`icon-\${i}\`">
          <li style="
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
            width: 48px;
          ">
            <div style="width: 48px; height: 48px; border: 1px solid red; fill: navy;">
              <component :is="name" />
            </div>
            <p style="margin: 0; font-size: 0.85rem; text-wrap: wrap; text-align: center;">
              {{ getName(name.substring(4)) }}
            </p>
          </li>
        </template>
      </ul>
    </template>
    <template v-else>
      <div style="width: 48px; height: 48px; border: 1px solid red; fill: navy;">
        <component :is="args.name" />
      </div>
    </template>
  `,
});

// -----------------------------------------------------------------------------

export const All = Template.bind({});
All.args = {
  names: [
    //
    'IconBulb',
    'IconCheck',
    'IconCopy',
    'IconDocument',
    'IconGraph',
    'IconList',
    'IconLogo',
    'IconPlus',
    'IconShare',
    'IconTimes',
    'IconTrash',
  ],
};

export const Bulb = Template.bind({});
Bulb.args = { name: 'IconBulb' };

export const Check = Template.bind({});
Check.args = { name: 'IconCheck' };

export const Copy = Template.bind({});
Copy.args = { name: 'IconCopy' };

export const Document = Template.bind({});
Document.args = { name: 'IconDocument' };

export const Graph = Template.bind({});
Graph.args = { name: 'IconGraph' };

export const List = Template.bind({});
List.args = { name: 'IconList' };

export const Logo = Template.bind({});
Logo.args = { name: 'IconLogo' };

export const Plus = Template.bind({});
Plus.args = { name: 'IconPlus' };

export const Share = Template.bind({});
Share.args = { name: 'IconShare' };

export const Times = Template.bind({});
Times.args = { name: 'IconTimes' };

export const Trash = Template.bind({});
Trash.args = { name: 'IconTrash' };
