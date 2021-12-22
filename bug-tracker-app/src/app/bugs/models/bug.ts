export interface Bug{
  id: number;
  name: string;
  description? :  string;
  isClosed: boolean;
  createdAt : Date;
}

/* Implement toggle, removeClosed & displaying stats use cases */