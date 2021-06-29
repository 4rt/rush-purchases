export type RootAction = {
    type: string,
    data?: any
}

export type RootState = {
    history: Purchases[],
    purchases: Purchases[],
}

export type Purchases = {
    id: number,
    name: string,
    shopName: string,
    shopLink: string,
    added: string
}