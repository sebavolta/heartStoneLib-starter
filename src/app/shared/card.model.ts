export interface Card {
    name:string,
    types: string[]
}

export interface CardItem {
    cardId: string,
    cardSet: string,
    collectible: boolean
    dbfId: string,
    faction: string,
    health: number,
    img: string,
    imgGold: string,
    locale: string,
    name: string,
    playerClass: string,
    rarity: string,
    type: string
}