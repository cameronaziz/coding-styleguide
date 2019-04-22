# How Tos and Gotchas 🕵️

An example overview of how to write a full react feature, and a place to put common gotchas. For the example, we'll be adding the feature to search for contacts

## Parts

The parts that can make up a new feature are:

`ActionCreators`, `ActionThunks`, `Reducers`, `State`, `Selectors`, and `Pages/Components. For details on the function of each of these pieces, see the [stack overview](./stack.md).

### Actions

We do not need to define action type constants. We use typescript to handle all action checking.

For async operations, we know that we'll need at least three action types: request, success, and fail. We're also going to keep track of a query field and the loading state of this operation. So we create five action types for this feature.

Two reducers should not listen to the same action type. Dispatch a second action if this is needed.

- The interface matches reducer/ACTION_TYPE
- Union thunk actions and create a ReducerThunkResult type
- Union ThunkActions and all other actions to create ReducerActionTypes
`types/search/action-creators.ts`
```typescript
import { ThunkActionDispatch } from 'redux-thunk'
import { setIsLoading, requestSearch } from '../../actions/search'

export interface SearchSetIsLoading {
  type: 'search/SET_IS_LOADING'
  status: boolean
}

export interface SearchReceiveResults {
  type: 'search/RECE)VE_SEARCH_RESULTS'
  results: SearchResult[]
}

// Don't forget to handle errors
export interface SearchReceiveError {
  type: 'search/RECE)VE_ERROR'
  error: Error
}

// Union Action Types with the type ReducerType
type ThunkActions = SearchReceiveResults | SearchReceiveError
export type SearchThunkResult<R> = ThunkAction<R, ReduxState, undefined, Actions>
export type SearchActionTypes = SearchSetIsLoading | ThunkActions
export interface SearchActionDispatch {
  requestSearch: ThunkActionDispatch<typeof requestSearch>;
  setIsLoading: typeof setIsLoading;
}
```

- Import all our action types into a declaration file at `index` of the same folder
- Define all function parameters for action creators and thunks.
- Define the state of the reducer
`types/search/index.d.ts`
```typescript
export * from './action-creators'

interface SearchRequest {
  term: string
}

interface SearchResult {
  text: string
}

interface SearchState {
  isLoading: boolean
  results: SearchResult[]
  error?: Error
}

```

- A thunk can return a promise. This way the component will know the status of the action thunk.
- A thunk should dispatch loading actions to let the rest of the application know it is working.
`actions/search/thunks.ts`
```typescript
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export const requestSearch = (params: SearchRequest): SearchThunkResult<Promise<boolean>> => {
  return async (dispatch: ThunkDispatch<{}, {}, ReduxActionTypes>): boolean => {
    dispatch(setIsLoading(true))
    let success = true
    try {
      const results = await api(params.term)
      dispatch(receiveResults(results))
    } catch(error) {
      dispatch(receiveError(error))
      success = false
    }
    dispatch(setIsLoading(false))
    return success
  }
```

- Action creators should be simple.
`actions/search/creators.ts`
```typescript
export const setIsLoading = (status: boolean): SearchSetIsLoading => ({
  type: 'search/SET_IS_LOADING',
  status
})

export const receiveResults = (results: SearchResult[]): SearchReceiveResults => ({
  type: 'search/RECEIVE_RESULTS',
  results
})

export const receiveError = (error: Error): SearchReceiveError => ({
  type: 'search/RECEIVE_ERROR',
  error
})
```

- Combine in an index
`actions/search/index.ts`
```typescript
export * from './creators'
export * from './thunks'
```

- Reducer should simply be a switch statement evaluating `action.type`
- Use `_.cloneDeep(state)` over `immutable.fromJS(state)`
- If you do use `immutable`, redux state **should not** be an immutable object. Plain JS only.
`reducers/search/index.ts`
```typescript
const initialState: SearchState = {
  isLoading: false,
  results: [],
}

const searchReducer = (state: SearchState = intialState, action: ActionTypes): SearchState => {
  switch(action.type) {
    case'search/SET_IS_LOADING': {
      const stateCopy = cloneDeep(state)
      stateCopy.isLoading = action.status
      return stateCopy
    }
    case'search/RECEIVE_RESULTS': {
      const stateCopy = cloneDeep(state)
      stateCopy.results = action.results
      return stateCopy
    }
    case'search/RECEIVE_ERROR': {
      const stateCopy = cloneDeep(state)
      stateCopy.error = action.error
      return stateCopy
    }
    default: {
      return state
    }
  }
}

export default searchReducer
```

```typescript
import * as React from 'react'
import * as actions from '../../actions/search'


interface StateProps {
  isLoading: boolean
  results: SearchResult[]
  error?: Error
}

interface DispatchProps {
  requestSearch: typeof actions.requestSearch
  setIsLoading: typeof actoins.setIsLoading
}

interface SearchBarProps extends StateProps, DispatchProps {
  someOtherString: string
}

const SearchBar: React.FunctionComponent<SearchBarProps> = () => {

}

const mapStateToProps = (state: ReduxState) => ({
  isLoading: state.search.isLoading,
  results: state.search.results,
  error: state.search.errror
})

const mapDispatchToProps = (dispatch: SearchActionDispatch) => bindActionCreators({
  requestSearch: actions.requestSearch,
  setIsLoading: actions.setIsLoading,
}, store.dispatch)
```


Next, we use the action type contants to create the matching typescript definitions for our action types. This will define the structure of the specific action type so that the sagas and reducers will know what to expect on the object.

We do this in `src/decalarations/actions/<feature_category>.ts`. Note that we also add the newly created interface into an enum at the bottom.

```typescript
// src/declarations/actions/contacts.d.ts
import { CONTACTS } from '../../store/actions';

declare namespace ActionsTypes {
  interface ICONTACTS_SEARCH {
    type: CONTACTS.SEARCH;
    page: string;
  }

  interface ICONTACTS_SEARCH_SUCCESS {
    type: CONTACTS.SEARCH_SUCCESS;
    list: Array<IContact>;
  }

  interface ICONTACTS_SEARCH_ERROR {
    type: CONTACTS.SEARCH_ERROR;
    error: IError;
  }

  interface ICONTACTS_UPDATE_QUERY_FIELD {
    type: CONTACTS.UPDATE_QUERY_FIELD;
    query: string;
  }

  interface ICONTACTS_UPDATE_LOADING_STATE {
    type: CONTACTS.UPDATE_LOADING_STATE;
    loading: boolean;
  }

  type contactsActions =
    | ICONTACTS_UPDATE_QUERY_FIELD
    | ICONTACTS_START_SEARCH
    | ICONTACTS_SEARCH_SUCCESS
    | ICONTACTS_SEARCH_ERROR
    | ICONTACTS_UPDATE_LOADING_STATE;
}
```

Having defined our action structures, we can now build our Action creators. We do this in `src/actions/<feature_category>.ts`. _If you're creating a brand new feature category, be sure to export all of the action creators from `src/actions/index.ts`_

```typescript
// src/actions/contacts.ts
import { CONTACTS } from './';
import { ActionsTypes } from '../../declarations/actions/contacts';

export const startSearchContact: Function = (
  page?: number
): ActionsTypes.ICONTACTS_START_SEARCH => ({
  type: CONTACTS.SEARCH,
  page
});

export const searchContactSuccess: Function = (
  list: Array<IContact>
): ActionsTypes.ICONTACTS_SEARCH_SUCCESS => ({
  type: CONTACTS.SEARCH_SUCCESS,
  list
});

export const searchContactError: Function = (
  error: IError
): ActionsTypes.ICONTACTS_SEARCH_ERROR => ({
  type: CONTACTS.SEARCH_ERROR,
  error
});

const updateQueryField: Function = (
  query: string
): ActionsTypes.ICONTACTS_UPDATE_QUERY_FIELD => ({
  type: CONTACTS.UPDATE_QUERY_FIELD,
  query
});

export const updateLoadingState: Function = (
  isLoading: boolean
): ActionsTypes.ICONTACTS_UPDATE_LOADING_STATE => ({
  type: CONTACTS.UPDATE_LOADING_STATE,
  loading: isLoading
});
```

### IState, initialState

Before we tell the reducer how to update the state, we add the new keys to the IState definition and default them in the initialState.

```typescript
// src/declarations/state.d.ts

interface IState {
  ...things,
	contacts: {
    list: Array<IContact>;
    error: IError;
    query: string;
    loading: boolean;
	}
}

// src/store/initialState.ts

export default {
    ...things,
    contacts: {
        list: [],
        error: undefined,
        query: '',
        loading: false
    }
}
```

### Reducers

Our actions are now defined and typed with creators for each. We've defined the new pieces of state. We're now ready to tell the reducer how to update the state with our actions. We type our actions using the enum that we created in the actions declaration file.

Reducers live in `src/reducers/<feature_category>.ts`. _If you're creating a brand new reducer, be sure to import it and assign it to a state key in `src/reducers/index.ts`_

```typescript
// src/reducers/contacts.ts

import initialState from '../initialState';
import { ReducersMapObject } from 'react-redux';
import { CONTACTS } from '../actions';
import { ActionsTypes } from '../../declarations/actions/contacts';

const contacts: ReducersMapObject = (
  state = initialState.contacts,
  action: ActionsTypes.contactsActions
) => {
  switch (action.type) {
    case CONTACTS.UPDATE_LOADING_STATE:
      return {
        ...state,
        loading: action.loading
      };
    case CONTACTS.SEARCH_SUCCESS:
      return {
        ...state,
        list: action.list
      };
    case CONTACTS.SEARCH_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};

export default contacts;
```

### Sagas and APIs

For asynchronous behaviors, we want to control where and when data enters the store. This stepped logic lives in a saga. If your feature has no side-effects, there is no need to write a saga. For querying contacts though, we'll need to add a saga to the root contacts saga. \*For entirely new feature categories, you'll need to import and call the root category saga in `src/sagas/index.ts`

Note that `getContactsQueryField` used below is a selector that takes state and returns the query field. For details, check [styleguide](./styleguide.md).

```typescript
// src/api/contacts.ts
import { api } from './api';

export default class Contacts {
  public static simpleSearch(queryParams: ISearchParams): Promise<Response> {
    return api.get('v3/contacts', queryparams);
  }
}

// src/sagas/contacts.ts
function* searchContact(
  action: ActionsTypes.ICONTACTS_START_SEARCH
): Iterator<SelectEffect | PutEffect<Action> | CallEffect> {
  const query: string = yield select(getContactsQueryField);
  const { page = 1 } = action;

  if (!query.length) {
    // clear the list if the query is empty string (this is done when x is clicked)
    yield put(searchContactSuccess([]));
    return;
  }

  yield put(updateLoadingState(true));
  try {
    // be sure to use the saga call effect instead of manually calling the api.
    const { contacts } = yield call(ContactsAPI.simpleSearch, {
      search: query
    });

    yield put(
      searchContactSuccess(
        contacts.sort(
          (a, b) =>
            a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1
        )
      )
    );
  } catch (err) {
    yield put(searchContactError(err));
  } finally {
    yield put(updateLoadingState(false));
    yield put(updateHasFetched(true));
  }
}

function* rootContactsSaga(): IterableIterator<AllEffect> {
  yield all([takeLatest(CONTACTS.SEARCH, searchContact)]);
}

export default rootContactsSaga;
```

### Containers/Components

We now have all of the logic and data of our feature coded up. We can now write the view layer to display and interact with the data. _Note that you can definitely write your view before your data if you'd prefer._ When deciding where to place your view, consider how much logic it will house:

- Data heavy components that hold multiple other components should live in `containers/`.
- Simpler components can live in `components/`

We'll show the contact list container here, as it's where we map in all of the action creators that we created above. Using `react-redux`'s `connect()` method, we can map action dispatches to a component's props. See below in the `IContactsListProps` definition and in the `mapStateToProps` and `mapDispatchToProps` functions.

```typescript
// src/containers/ContactsListContainer.tsx
...imports imports imports

interface IContactsListProps {
  updateQueryField: (query: string) => void;
  startSearchContact: () => void;
  fetchSuggestedStart: () => void;
  query: string;
  contacts: Array<IContact>;
  loading: boolean;
  user: IUser;
  hasFetched: boolean;
  suggested: Array<IContact>;
  router: angular.ui.IStateService;
  startCall: (contact) => void;
}

class ContactsListContainer extends React.Component<IContactsListProps, null> {
  private handleChange = e => {
    const { value } = e.target;
    const { updateQueryField, startSearchContact } = this.props;

    updateQueryField(value);
    startSearchContact();
  };

  private handleClose = () => {
    const { updateQueryField, startSearchContact } = this.props;

    updateQueryField('');
    startSearchContact();
  };

  private callContact = contact => this.props.startCall(contact);

  render() {
    const { query, contacts, loading, user, router } = this.props;

    return (
      <div className="contacts_list">
        <Header
          left={<UserPictureAvatar user={user} onClick={() => router.go('app.layout.settings')} />}
          title="Contacts"
          right={
            <IconButton
              icon="./ui/general/add.svg"
              onClick={() => router.go('app.layout.contacts.new_contact')}
            />
          }
        />

        <div className="contacts_list-search_container">
          <SearchBox
            placeholder="Search by name, company or number"
            value={query}
            onChange={this.handleChange}
            onRemove={this.handleClose}
          />
        </div>

        <div className="contacts_list-results_container">
          {loading ? (
            <LoadingIndicator absolute />
          ) : (
            <ContactsList callContact={this.callContact} routerGo={router.go} contacts={contacts} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  query: getContactsQueryField(store),
  contacts: getContactsList(store),
  loading: getContactsLoading(store),
  hasFetched: getContactsHasFetched(store),
  suggested: getContactsSuggested(store),
  user: store.user
});

const mapDispatchToProps = dispatch => ({
  updateQueryField: query => {
    dispatch(updateQueryField(query));
  },
  startSearchContact: debounce(() => {
    dispatch(startSearchContact());
  }, 250),
  fetchSuggestedStart: () => {
    dispatch(fetchSuggestedStart());
  },
  startCall: debounce(
    contact => {
      dispatch(startCallFromContact(contact));
    },
    1000,
    { leading: true, trailing: false }
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListContainer);
```

#### Once all pieces are written and wired up, be sure to test everyting. See [testing](./testing.md) for details.
