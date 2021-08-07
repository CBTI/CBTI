import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


// action type
const SUBMIT_TITLE = "SUBMIT_TITLE";
const BACK_PAGE = "BACK_PAGE";
// action creator
const submitTitle = createAction(SUBMIT_TITLE, (title, tag) => ({title, tag}));
const backPage = createAction(BACK_PAGE, () => ({}))
// initialState
const initialState = { 
    scenario : {},
    page : 1,
}
// reducer
export default handleActions({
    [SUBMIT_TITLE] : (state, action) => produce(state, (draft) => {
        const Object = {
            "title" : action.payload.title,
            "tag" : action.payload.tag ?? '', 
        }
        draft.scenario = {...Object};
        draft.page++;
    }),
    [BACK_PAGE] : (state, action) => produce(state, (draft) => {
        draft.page--;
    }),
}, initialState);

const actionCreators = {
    submitTitle,
    backPage,
}

export { actionCreators };