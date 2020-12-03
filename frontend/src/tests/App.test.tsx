import React from 'react';
import '../setupTests';
import {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';

import App from '../App';
import {PAGE_PATHS} from '../paths';
import MainPageHOCMocked from '../pages/mainPage/hoc';
import OneNewsPageHOCMocked from '../pages/oneNewsPage/hoc';
import NoMatchPageMocked from '../pages/noMatchPage';
import AddOneNewsPageHOCMocked from '../pages/addOneNewsPage/hoc';
import EditOneNewsPageHOCMocked from '../pages/editOneNewsPages/hoc';
import UserPageHOCMocked from '../pages/userPage/hoc';

const mockedPagesValues = {
    mainPage: 'DummyMainPage',
    oneNewsPage: 'DummyOneNewsPage',
    noMatchPage: 'DummyNoMatchPage',
    addOneNewsPage: 'DummyAddOneNewsPage',
    editOneNewsPage: 'DummyEditOneNewsPage',
    userPage: 'DummyUserPage',
}

jest.mock('../pages/mainPage/hoc', () =>
    function DummyMain() {
        return mockedPagesValues.mainPage;
    });

jest.mock('../pages/oneNewsPage/hoc', () =>
    function DummyOneNewsPage() {
        return mockedPagesValues.oneNewsPage;
    });

jest.mock('../pages/noMatchPage', () =>
    function DummyNoMatchPage() {
        return mockedPagesValues.noMatchPage;
    });

jest.mock('../pages/addOneNewsPage/hoc', () =>
    function DummyAddOneNewsPage() {
        return mockedPagesValues.addOneNewsPage;
    });

jest.mock('../pages/editOneNewsPages/hoc', () =>
    function DummyEditOneNewsPage() {
        return mockedPagesValues.editOneNewsPage;
    });

jest.mock('../pages/userPage/hoc', () =>
    function DummyUserPageHOC() {
        return mockedPagesValues.userPage;
    });

describe('APP: CHECK ROUTER LINKS', () => {
    let ComponentToWrap: any;
    beforeEach(() => {
        ComponentToWrap = (path: string) => (
            <MemoryRouter initialEntries={[path]}>
                <App/>
            </MemoryRouter>
        );
    });

    it('user path exist', () => {
        const wrapper = mount(ComponentToWrap(PAGE_PATHS.USER));
        expect(wrapper.text()).toEqual(mockedPagesValues.userPage);
    });

    it('* path return noMatchPage', () => {
        const wrapper = mount(ComponentToWrap('/randomNotMatchPath'));
        expect(wrapper.text()).toEqual(mockedPagesValues.noMatchPage);
    });

    it('mainPage path exist', () => {
        const wrapper = mount(ComponentToWrap(PAGE_PATHS.MAIN));
        expect(wrapper.text()).toEqual(mockedPagesValues.mainPage);
    });

    it('oneNews path exist', () => {
        const wrapper = mount(ComponentToWrap(PAGE_PATHS.ONE_NEWS));
        expect(wrapper.text()).toEqual(mockedPagesValues.oneNewsPage);
    });

    it('addOneNewsPage path exist', () => {
        const wrapper = mount(ComponentToWrap(PAGE_PATHS.ADD_ONE_NEWS));
        expect(wrapper.text()).toEqual(mockedPagesValues.addOneNewsPage);
    });

    it('editOneNewsPage path exist', () => {
        const wrapper = mount(ComponentToWrap(PAGE_PATHS.EDIT_ONE_NEWS));
        expect(wrapper.text()).toEqual(mockedPagesValues.editOneNewsPage);
    });

});
