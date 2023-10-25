export type BoardProps = {
    children: React.ReactNode;
};

export type Todo = {
    id: number,
    todo: string,
    type: string,
    status: boolean
};