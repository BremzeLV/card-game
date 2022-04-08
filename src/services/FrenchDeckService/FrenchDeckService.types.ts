/* eslint-disable no-unused-vars */

export enum DeckType {
    SHORT = 'SHORT',
    FULL = 'FULL',
}

export type Suit = 'S' | 'C' |'D' | 'H'
export type Value = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'

export type SuitsMap = {
    [key in Suit as string]: string
}

export type ValuesMap = {
    [key in Suit as string]: string
}

export type Card = {
  value: string,
  suit: string,
  code: string,
}

export interface DrawCard {
    head: Card[],
    tail: Card[],
}
