import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// action type
const SUBMIT_ANSWER = "SUBMIT_ANSWER";

// action creator
const submitAnswer = createAction(SUBMIT_ANSWER, (Answer) => ({Answer}));

// initialState
const initialState = { 
    Answer : [],
}
// reducer
export default handleActions({
    [SUBMIT_ANSWER] : (state, action) => produce(state, (draft) => {
        draft.Answer = action.payload.Answer;
    })
}, initialState);

const actionCreators = {
    submitAnswer,
}

export { actionCreators };