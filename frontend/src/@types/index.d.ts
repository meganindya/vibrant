export type TUser = {
  uname: string;
  fname: string;
  mname: string;
  lname: string;
  role: 'ADMIN' | 'PRIVILEGED' | 'PUBLIC';
};

export type TWorkbooksOwned = {
  uuid: string;
  name: string;
  dateCreate: string;
  dateModify: string;
  shared: string[];
};

export type TWorkbooksShared = {
  uuid: string;
  name: string;
  dateCreate: string;
  dateModify: string;
  owner: string;
};

export type TWorkbooks = {
  owned: TWorkbooksOwned[];
  shared: TWorkbooksShared[];
};

export type TWorkbookDocument = {
  headers: Record<
    string,
    {
      level: number;
      label: string;
    }
  >;
  content: Record<
    string,
    {
      type: string;
      data: Record<string, unknown>;
    }
  >;
};

export type TWorkbookNode = {
  uuid: string;
  deps: {
    content: string[];
    headers: TWorkbookNode;
  };
};

export type TWorkbookNodes = {
  headers: Record<string, boolean>;
  content: Record<string, boolean>;
  tree: TWorkbookNode[];
}[];

export type TWorkbookGraph = {
  nodes: Record<string, [number, number, number]>;
  edges: {
    level1: [string, string][];
    level2: [string, string][];
    level3: [string, string][];
    level4: [string, string][];
  };
}[];

export type TWorkbookNotes = {
  content: string;
}[];
