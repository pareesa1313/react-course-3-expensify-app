import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test (`Checking Expense List on its own without live version with fixture expenses` , () => {
    const wrapper = shallow (<ExpenseList expenses = {expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test (`Checking Expense List on its own without live version with empty expenses` , () => {
    const wrapper = shallow (<ExpenseList expenses = {[]} />);
    expect(wrapper).toMatchSnapshot();
});
