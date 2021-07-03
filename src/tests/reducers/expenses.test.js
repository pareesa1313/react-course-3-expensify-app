import expensesReducer from "../../reducers/expenses";
import expenses from '../fixtures/expenses';

test (`Checking Default empty Arrary ` , () => {
    const state = expensesReducer (undefined , '@@INNIT');
    expect(state).toEqual([]);
});

test (`Checking Switch Case remove expense By ID ` , () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses [1].id
    };
    const state = expensesReducer (expenses , action);
    expect(state).toEqual ([expenses[0], expenses[2]]);
});

test (`Checking Switch Case NOT remove expense By ID if ID NOT FOUND ` , () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    };
    const state = expensesReducer (expenses , action);
    expect(state).toEqual (expenses);
});

test (`checking Switch Case ADD_EXPENSE ` , () => {
    const expense = {
        id :'109',
        description : 'Laptop',
        note : '',
        amount : 29500,
        createdAt: 20000
    };
    const action = {
        type : 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer (expenses , action);
    expect(state).toEqual([...expenses , expense]);
});

test (`Checking Switch Case EDIT_EXPENSE`, () => {
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount
        }
    };
    const state = expensesReducer (expenses , action);
    expect(state[1].amount).toBe(amount);
});

test (`Checking Switch Case EDIT_EXPENSE SHOULD NOT EDIT EXPENSE IF ID NOT FOUND`, () => {
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : '-1',
        updates : {
            amount
        }
    };
    const state = expensesReducer (expenses , action);
    expect(state).toEqual(expenses);
});