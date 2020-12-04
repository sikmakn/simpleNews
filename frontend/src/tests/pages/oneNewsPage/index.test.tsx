import {mount} from 'enzyme';
import React from 'react';
import {act} from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import OneNewsPage from '../../../pages/oneNewsPage';

jest.mock('../../../components/header/hoc',
    () => () => 'DummyHeader');
jest.mock('../../../components/lastNewsLayout/hoc',
    () => () => 'DummyLastNewsLayout');
jest.mock('../../../components/fullNews/hoc',
    () => () => 'DummyFullNews');
jest.mock('../../../components/verticalStatistic/hoc',
    () => () => 'DummyVerticalStatistic');
jest.mock('../../../components/oneNewsCommentsContainer/hoc',
    () => () => 'DummyOneNewsCommentsContainer');

describe('OneNewsPage: Check', () => {
    it('-- capturing snapshot', () => {
        const rendererValue = renderer.create(<OneNewsPage cleanStatus={() => {
        }}/>).toJSON();
        expect(rendererValue).toMatchSnapshot();
    });
    it('-- cleanStatus on unmount', () => {
        const cleanStatus = jest.fn();
        const wrapper = mount(<OneNewsPage cleanStatus={cleanStatus}/>);
        expect(cleanStatus).not.toHaveBeenCalled();
        act(() => {
            wrapper.unmount();
        });
        expect(cleanStatus).toHaveBeenCalledTimes(1);
    });
});
