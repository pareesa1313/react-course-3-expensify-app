import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense , removeExpense , history , wrapper;
beforeEach (() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense = {editExpense} 
        removeExpense = {removeExpense}
        history = {history}
        expense = {expenses[2]}
        />
        );
}); 

test (`Checking if Edit Expense Page renders Correctly`, () => {
    expect(wrapper).toMatchSnapshot();
});

test (`checking if edit expense gets handled`, () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);

});

test (`checking if remove expense gets handled`, () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id : expenses[2].id
    });

});

