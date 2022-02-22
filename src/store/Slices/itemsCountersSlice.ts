import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';
import categories from "@assets/Categories";


interface tappedItemsState {
    items: {
        name: string,
        taps: number,
        correct: number,
        incorrect: number,
    }[]
}

const initialState: tappedItemsState = {
    items: categories
        .map(element => element.info)
        .flat()
        .map(element => {
            return {
                name: element.word,
                taps: 0,
                correct: 0,
                incorrect: 0,
            }
        }),
}


const itemsCountersSlice = createSlice({
    name: 'tapCounter',
    initialState,
    reducers: {
        addTappedItem(state, action: PayloadAction<string>) {
           state.items.map((item: {name: string, taps: number}) => {
               return item.name === action.payload ? item.taps++ : item;
           })
        },
        addCorrectItem(state, action: PayloadAction<string>) {
            state.items.map((item: {name: string, correct: number}) => {
                return `sounds/${item.name}.mp3` === action.payload ? item.correct++ : item;
            })
        },
        addIncorrectItem(state, action: PayloadAction<string>) {
            state.items.map((item: {name: string, incorrect: number}) => {
                return `sounds/${item.name}.mp3`  === action.payload ? item.incorrect++ : item;
            })
        },
    }
})

export const tapCounterAction = itemsCountersSlice.actions.addTappedItem;
export const correctItemAction = itemsCountersSlice.actions.addCorrectItem;
export const incorrectItemAction = itemsCountersSlice.actions.addIncorrectItem;

export const selectTappedItems = (state: RootState) => state.tapCounter.items;

export default itemsCountersSlice.reducer;