import { StoreUtil, DATA_STATE, NgrxObject} from 'ngrx-helpers';
import { APP_ACTIONS } from '../app-actions';

export interface AppState {
  readonly surveyData: NgrxObject<any>;
  readonly retailData: NgrxObject<any>;
  readonly activityData: NgrxObject<any>;
}

export const defaultAppState: AppState = {
  surveyData: {
    data: {},
    state: DATA_STATE.INITIAL,
  },
  retailData: {
    data: {},
    state: DATA_STATE.INITIAL
  },
  activityData: {
    data: {},
    state: DATA_STATE.INITIAL
  }
};

export function appDataReducer(state = defaultAppState, action) {
  switch (action.type) {
    case APP_ACTIONS.FETCH_BOOKS_DATA_RESOLVING:
      return StoreUtil.setResolving(state, 'surveyData', {});

    case APP_ACTIONS.FETCH_BOOKS_DATA_RESOLVED:
      return StoreUtil.setResolved(state, 'surveyData', action.payload.data);

    case APP_ACTIONS.FETCH_BOOKS_DATA_ERROR:
      return StoreUtil.setError(state, 'surveyData', action.payload.data.status);
    
    case APP_ACTIONS.UPDATE_BOOK_DATA_RESOLVING: {
      return StoreUtil.setResolving(state, 'surveyData', {})
    }
    case APP_ACTIONS.UPDATE_BOOK_DATA_RESOLVED:
      const dt = state.surveyData.data.map((item, index) => {
        if (item.id !== action.payload.id) {
        return item
        }
        return {
        ...item,
        ...action.payload
        }
        });
      return StoreUtil.setResolved(state, 'surveyData', dt);

    case APP_ACTIONS.UPDATE_BOOK_DATA_ERROR:
      return StoreUtil.setError(state, 'surveyData', action.payload.data.status);

    case APP_ACTIONS.ADD_BOOK_RESOLVING: {
        return StoreUtil.setResolving(state, 'surveyData', {})
      }
    case APP_ACTIONS.ADD_BOOK_RESOLVED:
        const id = state.surveyData.data.length + 1;
        let newBook = {...action.payload,id}
        const book = [...state.surveyData.data,newBook]
        return StoreUtil.setResolved(state, 'surveyData', book);
  
      case APP_ACTIONS.ADD_BOOK_ERROR:
        return StoreUtil.setError(state, 'surveyData', action.payload.data.status);
    
    default:
      return state;
  }
}
