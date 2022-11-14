import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Make',
        model: 'Model',
        engine: 'Engine',
        year: 'Year',
        color: 'Color',
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseEngine: (state, action) => { state.engine = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseMake, chooseModel, chooseEngine, chooseYear, chooseColor } = rootSlice.actions;