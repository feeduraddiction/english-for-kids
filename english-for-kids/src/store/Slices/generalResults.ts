import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../'


interface generalResultsState {
    generalResults: {}[]
}

const initialState: generalResultsState = {
    generalResults: []
}

const generalResultsSlice = createSlice({
    name: 'generalResults',
    initialState,
    reducers: {
        addResults(state, action: PayloadAction<{}>) {
            state.generalResults.push(action.payload);

        },
    }
})

export const generalResultsAction = generalResultsSlice.actions.addResults;
export const selectGeneralResults = (state: RootState) => state.addGeneralResults.generalResults;

export default generalResultsSlice.reducer;