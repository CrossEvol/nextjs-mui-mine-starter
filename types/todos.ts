export interface Todo {
    id: number;
    title: string;
    score: number;
    status: 'todo' | 'inprogress' | 'done';
    createdAt: Date;
    updatedAt: Date;
    deadline: Date;
    priority: 'low' | 'medium' | 'high';
    tags: string;
    content: string;
    creator: string;
    assignee: string; 
  }