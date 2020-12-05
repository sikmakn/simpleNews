import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from '../../../pages/mainPage';

jest.mock('../../../components/mainLayout', () => () => 'DummyMain');
jest.mock('../../../components/header/hoc', () => () => 'DummyHeader');
jest.mock('../../../components/lastNewsLayout/hoc', () => () => 'DummyLastNewsLayout');
jest.mock('../../../components/hotNewsLayout/hoc', () => () => 'DummyHotNewsLayout');
jest.mock('../../../components/bigNewsLayout/hoc', () => () => 'DummyBigNewsLayout');

describe('MAIN PAGE: -- index ', () => {
    it('-- snapshot', () => {
        const rendererValue = renderer.create(<MainPage/>).toJSON();
        expect(rendererValue).toMatchSnapshot();
    });
});