import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// action type
const SELECT_QUESTION = "SELECT_QUESTION";
const SUBMIT_ANSWER = "SUBMIT_ANSWER";

// action creator
const selectQuestion = createAction(SELECT_QUESTION, (question_id) => ({question_id}))
const submitAnswer = createAction(SUBMIT_ANSWER, (Answer) => ({Answer}));
// initialState
const initialState = { 
    question_id: '',
    Answer : [],
}
// reducer
export default handleActions({
    [SELECT_QUESTION] : (state, action) => produce(state, (draft) => {
        draft.question_id = action.payload.question_id;
    }),
    [SUBMIT_ANSWER] : (state, action) => produce(state, (draft) => {
        draft.Answer = action.payload.Answer;
    })
}, initialState);

const actionCreators = {
    selectQuestion,
    submitAnswer,
}

export { actionCreators };