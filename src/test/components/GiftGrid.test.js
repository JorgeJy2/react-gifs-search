import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GiftGrid } from '../../components/GiftGrid';
import { useFetchGifs } from '../../components/hooks/UseFetchGifs';

jest.mock('../../components/hooks/UseFetchGifs');

describe('test GiftGridI', ()=> {
    const category = 'dogs';
    test('test snapshot', ()=> {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( < GiftGrid category={category} / > );

        expect(wrapper).toMatchSnapshot();
    });

    test('should view items when load data.', ()=> {
        const gifs = [
            {
                id: 'abc12',
                url: 'https://localhost/img',
                title: 'test'
            },
            {
                id: 'abc12',
                url: 'https://localhost/img',
                title: 'test'
            }
        ]
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        const wrapper = shallow( < GiftGrid category={category} / > );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("#message-loading").exists()).toBe( false );
        expect(wrapper.find("GiftGridItem").length).toBe(gifs.length);
    });
});