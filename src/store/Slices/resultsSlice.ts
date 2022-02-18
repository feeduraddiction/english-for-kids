import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../'


interface resultsState {
    results: {
        answer: string,
        item: string,
        image?: string,
    }[]
}

const initialState: resultsState = {
    results: []
}

const resultsSlice = createSlice({
    name: 'results',
    initialState,
    reducers: {
        addResults(state,
                   action: PayloadAction<{
                       answer: string,
                       image: string,
                       item: string,
                   }>) {
            state.results.push(action.payload);
        },
        refreshResults(state){
            state.results = [];
        }
    }
})

export const addResultsAction = resultsSlice.actions.addResults;
export const refreshResultsAction = resultsSlice.actions.refreshResults;
export const selectResults = (state: RootState) => state.addResults.results;

export default resultsSlice.reducer;