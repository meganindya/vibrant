<!-- == SCRIPT ============================================================= -->

<script setup>
import { ref, toRefs } from 'vue';

import { IconCopy, IconShare, IconTrash } from '@/icons';
import { Navbar } from '@/components';
import ModalConfirm from './ModalConfirm/ModalConfirm.vue';
import ModalCreate from './ModalCreate/ModalCreate.vue';
import ModalShare from './ModalShare/ModalShare.vue';

const props = defineProps({
  items: {
    type: Object,
    default: () => ({
      owned: [],
      shared: [],
    }),
  },
});
const { items } = toRefs(props);

const emit = defineEmits(['open', 'copy', 'share', 'delete', 'create']);

// -----------------------------------------------------------------------------

const tabActive = ref(0);

function generateInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

// -----------------------------------------------------------------------------

const modal = ref(null);
const modalContext = ref(null);

function handlerModalAction(action, context) {
  if (action === 'submit') {
    if (modal.value === 'create') {
      emit('create', context);
    } else if (modal.value === 'delete') {
      emit('delete', modalContext.value.index);
    } else if (modal.value === 'share') {
      emit('share', modalContext.value.index, context);
    } else if (modal.value === 'copy') {
      emit('copy', modalContext.value.index, modalContext.value.list);
    }
  }

  modal.value = null;
  modalContext.value = null;
}
</script>

<!-- == TEMPLATE =========================================================== -->

<template>
  <div class="page">
    <div class="navbar-wrapper">
      <Navbar />
    </div>

    <template v-if="modal">
      <Teleport to=".page">
        <div class="modal-wrapper">
          <template v-if="modal === 'copy' || modal === 'delete'">
            <ModalConfirm @action="handlerModalAction" />
          </template>

          <template v-if="modal === 'create'">
            <ModalCreate @action="handlerModalAction" />
          </template>

          <template v-if="modal === 'share'">
            <ModalShare @action="handlerModalAction" />
          </template>
        </div>
      </Teleport>
    </template>

    <div class="content-wrapper">
      <div class="tabs">
        <button :class="['tab', tabActive === 0 && 'tab-active']" @click="() => (tabActive = 0)">
          {{ 'My Documents' }}
        </button>
        <button :class="['tab', tabActive === 1 && 'tab-active']" @click="() => (tabActive = 1)">
          {{ 'Shared With Me' }}
        </button>
      </div>

      <div class="content">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Created</th>
              <th>Modified</th>
              <th>Action</th>
              <th>{{ tabActive === 0 ? 'Shared' : 'Owner' }}</th>
            </tr>
          </thead>

          <tbody>
            <template v-if="tabActive === 0">
              <template
                v-for="({ name, dateCreate, dateModify, shared }, i) in items.owned"
                :key="i"
              >
                <tr>
                  <td @click="() => emit('open', i, 'owned')">
                    {{ name }}
                  </td>
                  <td>
                    {{ dateCreate }}
                  </td>
                  <td>
                    {{ dateModify }}
                  </td>
                  <td>
                    <button
                      class="btn-action"
                      @click="
                        () => {
                          modal = 'copy';
                          modalContext = {
                            index: i,
                            list: 'owned',
                          };
                        }
                      "
                    >
                      <IconCopy />
                    </button>
                    <button
                      class="btn-action"
                      @click="
                        () => {
                          modal = 'share';
                          modalContext = {
                            index: i,
                          };
                        }
                      "
                    >
                      <IconShare />
                    </button>
                    <button
                      class="btn-action"
                      @click="
                        () => {
                          modal = 'delete';
                          modalContext = {
                            index: i,
                          };
                        }
                      "
                    >
                      <IconTrash />
                    </button>
                  </td>
                  <td>
                    <div class="users">
                      <template v-for="(name, i) in shared" :key="i">
                        <div class="user">
                          <p class="user-initials">
                            {{ generateInitials(name) }}
                          </p>
                        </div>
                      </template>
                    </div>
                  </td>
                </tr>
              </template>
            </template>

            <template v-else>
              <template
                v-for="({ name, dateCreate, dateModify, owner }, i) in items.shared"
                :key="i"
              >
                <tr>
                  <td @click="() => emit('open', i, 'shared')">
                    {{ name }}
                  </td>
                  <td>
                    {{ dateCreate }}
                  </td>
                  <td>
                    {{ dateModify }}
                  </td>
                  <td>
                    <button
                      class="btn-action"
                      @click="
                        () => {
                          modal = 'copy';
                          modalContext = {
                            index: i,
                            list: 'shared',
                          };
                        }
                      "
                    >
                      <IconCopy />
                    </button>
                  </td>
                  <td>
                    <div class="users">
                      <div class="user">
                        <p class="user-initials">
                          {{ generateInitials(owner) }}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </template>
          </tbody>
        </table>

        <button
          v-if="tabActive === 0"
          class="btn-create"
          @click="
            () => {
              modal = 'create';
            }
          "
        >
          {{ 'Create New Workbook' }}
        </button>
      </div>
    </div>
  </div>
</template>

<!-- == STYLE ============================================================== -->

<style lang="scss" scoped>
@import '@/theme/colors';

.page {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  width: 100%;
  height: 100vh;
  font-family: 'Inter', sans-serif;

  .navbar-wrapper {
    flex-shrink: 0;
    flex-grow: 0;
  }

  .modal-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;
    background-color: rgba(#000, 0.25);
  }

  .content-wrapper {
    flex-shrink: 1;
    flex-grow: 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    width: 960px;
    margin: 0 auto;
    padding: 16px;

    .tabs {
      display: flex;
      flex-direction: row;
      align-items: center;

      .tab {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: unset;

        width: 50%;
        padding: 16px 8px;
        border: 1px solid #eee;
        border-radius: 4px 4px 0 0;
        text-align: center;
        cursor: pointer;

        &.tab-active {
          background-color: #eee;
          cursor: unset;
        }
      }
    }

    .content {
      padding: 8px;
      background-color: #eee;

      table {
        width: 100%;
        border-spacing: 1px 4px;

        tr {
          th,
          td {
            padding: 16px;
          }

          th {
            text-align: left;
            padding-top: 4px;

            &:not(:nth-child(1)) {
              text-align: center;
            }
          }

          td {
            border-radius: 8px;
            background-color: white;

            font-size: 14px;
            line-height: 16px;

            &:nth-child(1) {
              width: 45%;
              cursor: pointer;

              &:hover {
                background-color: $--c-bg-pale;
              }
            }

            &:nth-child(2),
            &:nth-child(3) {
              width: 15%;
              text-align: center;
            }

            &:nth-child(4) {
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 16px;

              text-align: center;
            }

            &:nth-child(5) {
              padding: 8px 16px;
            }

            .btn-action {
              margin: 0;
              padding: 0;
              border: none;
              outline: none;
              background-color: unset;

              cursor: pointer;

              :deep(svg) {
                path {
                  fill: #ccc;
                  transition: fill 0.25s ease;
                }
              }

              &:hover {
                :deep(svg) {
                  path {
                    fill: #0652dd;
                  }
                }
              }
            }

            .users {
              display: flex;
              flex-direction: row;
              align-items: center;
              gap: 4px;

              width: max-content;
              margin: 0 auto;

              .user {
                display: grid;
                place-items: center;

                width: 24px;
                height: 24px;
                border-radius: 50%;
                background-color: #0652dd;

                .user-initials {
                  margin: 0;
                  font-size: 8px;
                  color: white;
                }
              }
            }
          }
        }
      }

      .btn-create {
        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        background-color: unset;

        width: 100%;
        margin-top: 16px;
        padding: 8px;
        border: 2px dashed white;
        border-radius: 8px;
        cursor: pointer;

        transition: all 0.25s ease;

        &:hover {
          background-color: white;
        }
      }
    }
  }
}
</style>
