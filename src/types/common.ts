export type RootAction = {
    type: string,
    data?: any
}

export type RootState = {
    data: Purchases[]
}

export type Purchases = {
    id: number,
    name: string,
    store: string,
    price: string,
    added: string
}