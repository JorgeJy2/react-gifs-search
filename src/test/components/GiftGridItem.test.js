import React from 'react';
import { shallow } from "enzyme";
import { GiftGridItem} from "../../components/GiftGridItem";

describe('GiftGridItem', () => {

    const title = 'Title';
    const url = 'http://localhost';
    
    const wrapper = shallow( < GiftGridItem title={title}  url = {url} / > );

    test('should view component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should have p with title', ()=> {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);    
    });


    test('should have url and alt in img', ()=> {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);  
    });


    test('should have animate css class', ()=> {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeInDown')).toBe(true);
    });
});