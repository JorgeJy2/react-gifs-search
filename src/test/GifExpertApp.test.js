import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('GifExpertApp', ()=> {
    test('wraper', () => {
        const wraper = shallow(<GifExpertApp />);
        expect(wraper).toMatchSnapshot();
    });

    test('should view list categories ', ()=> {
        const categories = ['cats', 'programing'];
        const wraper = shallow(<GifExpertApp defaultCategories= {categories} />);
        expect(wraper).toMatchSnapshot();
        expect(wraper.find('GiftGrid').length).toBe(categories.length);
    });
});