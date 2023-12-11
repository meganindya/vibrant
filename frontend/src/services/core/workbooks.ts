import type { TWorkbooks } from '@/@types';

import dataWorkbooks from '../mock/workbooks.json';

const workbooks = { ...dataWorkbooks };

export async function workbookList() {
  const data: TWorkbooks = workbooks;
  let error: string;

  return new Promise((resolve) => {
    resolve({
      data,
      error,
    });
  });
}

export async function workbookCreate({ name }: { name: string }) {
  if (workbooks.owned.findIndex(({ name: n }) => n === name) !== -1) return;

  workbooks.owned.push({
    uuid: Math.random().toString(),
    name,
    dateCreate: new Date().toISOString().split('T')[0],
    dateModify: new Date().toISOString().split('T')[0],
    shared: [],
  });
}

export async function workbookCopy({ name, list: _ }: { name: string; list: 'owned' | 'shared' }) {
  workbookCreate({ name: `${name} Copy` });
}

export async function workbookShare({
  workbook,
  username,
}: {
  workbook: string;
  username: string;
}) {
  workbooks.owned
    .find(({ name }) => name === workbook)
    ?.shared.push(
      {
        drudman: 'David Rudman',
        gburdell: 'George Burdell',
      }[username as 'drudman' | 'gburdell'],
    );
}

export async function workbookDelete({ name }: { name: string }) {
  workbooks.owned.splice(
    workbooks.owned.findIndex(({ name: n }) => n === name),
    1,
  );
}
