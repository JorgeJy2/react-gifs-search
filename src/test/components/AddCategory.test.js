import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('test add category', ()=> {
    
    const setCategories = jest.fn();
    let wraper = shallow(<AddCategory setCategories={setCategories} />);    

    beforeEach(()=> {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should view', () => {

        expect(wraper).toMatchSnapshot();
    })

    test('should change input', () => {
        const input = wraper.find('input');
        const value = 'hola mundo';
        input.simulate('change', {
             target: {value   }
        }); 
    });

    test('should not clean text', ()=> {
        wraper.find('form').simulate('submit', {
            preventDefault(){}
        });
        expect(setCategories).not.toBeCalled();
    });
    
    test('should call setCategories and clean input', () =>{
        const input = wraper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target:  { value } });
        
        wraper.find('form').simulate('submit', { preventDefault(){} });
        
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function))    
        
        // console.log(wraper.find('input').prop('value'));

        expect( wraper.find('input').prop('value')).toBe('');

    });

});