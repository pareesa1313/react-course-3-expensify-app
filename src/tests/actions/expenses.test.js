import { addExpense , editExpense , removeExpense } from "../../actions/expenses";

test (`remove Expense action generator test` , () => {
    const action = removeExpense ({id : '123abc'});
    expect (action).toEqual({
        id : '123abc',
        type : 'REMOVE_EXPENSE'

    });
});

test (`Edit Expense action generator test ` , () => {
    const action = editExpense ('123abcd' , {note : 'somestring'});
    expect(action).toEqual({
        id : '123abcd',
        type : 'EDIT_EXPENSE',
        updates : {
            note : 'somestring'
        }
    });
});

test (`Add Expense action generator with values provided` , () => {
    const expenseData = {
        description : 'some description it is',
        note : 'note value',
        amount : 2003 ,
        createdAt : 2000
    };
    const action = addExpense (expenseData);
    expect (action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            ...expenseData,
            id : expect.any(String)
        }
    });
});

test (`Add Expense action generator without values`, () => {
    const action = addExpense ();
    expect (action).toEqual({
        type : 'ADD_EXPENSE',
        expense : { 
            id : expect.any(String),
            description : '',
            note : '',
            amount : 0,
            createdAt : 0
        }
    });
});


