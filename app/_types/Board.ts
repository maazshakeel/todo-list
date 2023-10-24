export type BoardProps = {
    children: React.ReactNode;
};

export type Todos = Array<{
    id: number,
    todo: string,
    type: string,
    status: boolean
}>;