import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test (`Checking Expense DASH BOARD PAGE`, () => {
    const wrapper = shallow (<ExpenseDashboardPage /> );
    expect(wrapper).toMatchSnapshot();

});