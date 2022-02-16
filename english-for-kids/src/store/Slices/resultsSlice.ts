import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../'


interface resultsState {
    results: {
        answer: string,
        image: string,
        item: string,
    }[]
}

const initialState: resultsState = {
    results: []
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        addImage(state, action: PayloadAction<string>) {
            state.results = [...state.results, {
                answer: action.payload === 'img/right_answer.png' ? 'correct' : 'wrong',
                image: action.payload,
                item: 'item'
            }
            ]
        },
        addItem(state, action: PayloadAction<string>) {
            state.results = [...state.results, {
                answer: 'answer',
                image: 'image',
                item: action.payload
            }
            ]
        },

    }
})

export const resultsImageAction = resultsSlice.actions.addImage;
export const resultsItemsAction = resultsSlice.actions.addItem;
export const selectResults = (state: RootState) => state.addResults.results;

export default resultsSlice.reducer;