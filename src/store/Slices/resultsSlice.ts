import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../'


interface resultsState {
    results: {
        item: string,
        result: string,
    }[]
}

const initialState: resultsState = {
    results: []
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        addResults(state,action: PayloadAction<{item: string, result: string}>) {
            state.results.push(action.payload);
        },
        refreshResults(state){
            state.results = [];
        },
    }
})

export const addResultsAction = resultsSlice.actions.addResults;
export const refreshResultsAction = resultsSlice.actions.refreshResults;
export const selectResults = (state: RootState) => state.addResults.results;

export default resultsSlice.reducer;