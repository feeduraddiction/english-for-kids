import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../';
import categories from "@assets/Categories";
import {percentOfCorrect} from "@assets/functions";


export interface tappedItemsState {
    items: {
        category: string
        word: string,
        translation: string,
        taps: number,
        correct: number,
        incorrect: number,
        percent: number
    }[]
}

const initialState: tappedItemsState = {
    items: categories.map(category =>
        category.info.map(card => {
            return {
                word: card.word,
                translation: card.translation,
                category: category.name,
                taps: 0,
                correct: 0,
                incorrect: 0,
                percent: 0,
            }
        })).flat(),
}


const itemsCountersSlice = createSlice({
    name: 'tapCounter',
    initialState,
    reducers: {
        addTappedItem(state, action: PayloadAction<string>) {
            const indexToUpdate = state.items.findIndex(item =>
                item.word === action.payload
            );
            state.items[indexToUpdate].taps++;

        },
        addCorrectItem(state, action: PayloadAction<string>) {
            const indexToUpdate = state.items.findIndex(item =>
                `sounds/${item.word}.mp3` === action.payload
            );
            state.items[indexToUpdate].correct++;
            state.items[indexToUpdate].percent = percentOfCorrect(
                state.items[indexToUpdate].correct,
                state.items[indexToUpdate].incorrect
            );
        },
        addIncorrectItem(state, action: PayloadAction<string>) {
            const indexToUpdate = state.items.findIndex(item =>
                `sounds/${item.word}.mp3` === action.payload
            );
            state.items[indexToUpdate].incorrect++;
        },
    }
})

export const tapCounterAction = itemsCountersSlice.actions.addTappedItem;
export const correctItemAction = itemsCountersSlice.actions.addCorrectItem;
export const incorrectItemAction = itemsCountersSlice.actions.addIncorrectItem;

export const selectTappedItems = (state: RootState) => state.tapCounter.items;

export default itemsCountersSlice.reducer;