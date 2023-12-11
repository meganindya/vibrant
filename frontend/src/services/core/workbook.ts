import type { TWorkbookDocument, TWorkbookNotes } from '@/@types';

import dataDocument from '../mock/document.json';
import dataNodes from '../mock/nodes.json';
import dataGraph from '../mock/graph.json';
import dataNotes from '../mock/notes.json';

import { reset as resetDag } from '../utils/dag';

const document = { ...dataDocument };
const nodes = { ...dataNodes };
const graph = { ...dataGraph };
const notes = [...dataNotes];

resetDag({ nodes });

// -----------------------------------------------------------------------------

export async function workbookGetDocument() {
  const data: TWorkbookDocument = document;
  let error: string;

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}

export async function workbookGetNodes() {
  const data = nodes;
  let error: string;

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}

export async function workbookGetGraph() {
  const data = graph;
  let error: string;

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}

export async function workbookGetNotes() {
  const data: TWorkbookNotes = notes;
  let error: string;

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}

// -----------------------------------------------------------------------------

export async function workbookNoteAdd() {
  notes.push({
    content: '',
  });
}

export async function workbookNoteSave(i: number, note: string) {
  notes[i].content = note;
}

export async function workbookNoteRemove(i: number) {
  notes.splice(i, 1);
}

// -----------------------------------------------------------------------------

export async function workbookContentMark(uuid: string) {
  // @ts-ignore
  nodes.content[uuid] = !nodes.content[uuid];
}

export async function workbookContentRemove(uuid: string) {
  try {
    // @ts-ignore
    delete document.content[uuid];
    // @ts-ignore
    delete nodes.content[uuid];

    resetDag({ nodes });
  } catch (e) {
    //
  }
}

export async function workbookHeaderRemove(uuid: string) {
  try {
    // @ts-ignore
    delete document.headers[uuid];
    // @ts-ignore
    delete nodes.headers[uuid];

    resetDag({ nodes });
  } catch (e) {
    //
  }
}
