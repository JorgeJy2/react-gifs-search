import React from 'react';
import { shallow } from "enzyme";
import { GiftGridItem} from "../../components/GiftGridItem";

describe('GiftGridItem', () => {
    test('should view component', () => {
        const wrapper = shallow( < GiftGridItem / > );
        expect(wrapper).toMatchSnapshot();
    });
});