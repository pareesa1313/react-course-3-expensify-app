import {setStartDate , setEndDate, sortByAmount, sortByDate , setTextFilter} from '../../actions/filters';
import moment from 'moment';


test ('Action generator Set Start Date' , () => {
    const action = setStartDate (moment(0));
    expect(action).toEqual({
        type : 'SET_START_DATE',
        startDate : moment(0)
    });

});

test ('Action generator Set End Date' , () => {
    const action = setEndDate (moment(0));
    expect(action).toEqual({
        type : 'SET_END_DATE',
        endDate : moment(0)
    });

});

test (`Action generator SORT BY AMOUNT ` , () => {
    const action  = sortByAmount ();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test (`Action generator SORT BY DATE ` , () => {
    const action  = sortByDate ();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test (`Action generator SET TEXT FILTER 1ST OUT OF 2` , () => {
    const action  = setTextFilter ();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : ''
    });
});

test (`Action generator SET TEXT FILTER 2nd OUT OF 2` , () => {
    const action  = setTextFilter ('something to add');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'something to add'
    });
});