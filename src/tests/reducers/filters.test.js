import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import { start } from 'live-server';


test (`checking Default Filter values `, () => {
    const state = filtersReducer (undefined , {type : '@@INNIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test (`checking SORT_BY_AMOUNT Switch Case` , () => {
    const state = filtersReducer (undefined , {type : 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toEqual('amount');

});

test (`checking SORT_BY_DATE Switch Case` , () => {
    const currentState = {
        text : '',
        startDate : undefined,
        endDate : undefined,
        sortBy : 'amount'
    };
    const action =  {type : 'SORT_BY_DATE'}; 
    const state = filtersReducer (currentState , action );
    expect (state.sortBy).toEqual ('date');
});

test (`checking SET TEXT FILTER Switch Case ` , () => {
    const text = 'this is my text filter';
    const action = {
        type : 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer (undefined , action);
    expect(state.text).toBe (text);

});

test (`checking SET START DATE Switch Case ` , () => {
    const startDate = moment ();
    const action = {
        type : 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer (undefined , action);
    expect(state.startDate).toEqual (startDate);
});

test (`checking SET END DATE Switch Case ` , () => {
    const endDate = moment ();
    const action = {
        type : 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer (undefined , action);
    expect(state.endDate).toEqual(endDate);
});
