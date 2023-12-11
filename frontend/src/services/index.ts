import { init as initCore } from './utils';

// -----------------------------------------------------------------------------

export function init(url: string) {
  initCore(url);
}

export { login } from './core/user';
export {
  workbookList,
  workbookCreate,
  workbookCopy,
  workbookShare,
  workbookDelete,
} from './core/workbooks';
export {
  workbookGetDocument,
  workbookGetNodes,
  workbookGetGraph,
  workbookGetNotes,
  workbookNoteAdd,
  workbookNoteSave,
  workbookNoteRemove,
  workbookContentMark,
  workbookContentRemove,
  workbookHeaderRemove,
} from './core/workbook';
