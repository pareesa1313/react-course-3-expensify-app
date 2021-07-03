import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test (`Checking Expense Form render correctly` , () => {
    const wrapper = shallow (<ExpenseForm /> );
    expect (wrapper).toMatchSnapshot();
});

test (`Checking Expense Form render correctly with Data from Expenses/Fixture` , () => {
    const wrapper = shallow (<ExpenseForm expenses= {expenses[1]}/> );
    expect (wrapper).toMatchSnapshot();
});

test (`checking if Error renders for invalid form submission` , () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate ('submit' , { preventDefault: () => {} } );
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();

});

test (` checkig Description on input does it change ??` , () => {
    const value = 'New description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change' , {target : {value} 
});
expect(wrapper.state('description')).toBe(value);
});

test (` checkig Text Area on Note Change ??` , () => {
    const value = 'New Note Value';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change' , {target : {value} 
});
expect(wrapper.state('note')).toBe(value);
});


test (` checkig onAmount Change with valid input data ??` , () => {
    const value = '23.50' ;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {target : {value} 
});
expect(wrapper.state('amount')).toBe(value);
});


test (`  checkig onAmount Change with invalid input data ??` , () => {
    const value = '123.234';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change' , {target : {value} 
});
expect(wrapper.state('amount')).toBe('');
});


test (`checking call onsubmit prop for valid form subsmission`, () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit = {onSubmitSpy} />); 
    wrapper.find('form').simulate('submit' , { preventDefault: () => {} } );

    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt
    });
});

test (`checking Set New Date on Date Change`, () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test (`checking Set calendar Focus  on Change`, () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
