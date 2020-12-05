import React from 'react';
import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import {MainPageHOC, mapStateToProps} from '../../../pages/mainPage/hoc';

jest.mock('../../../pages/mainPage/index', () => () => 'DummyMainPage');
describe('MAIN PAGE HOC: -- check', () => {

    it('--snapshot', () => {
        const container = renderer.create(<MainPageHOC setTag={() => {
        }}/>);
        expect(container).toMatchSnapshot();
    });

    it('-- mapStateToProps takes tag from path', () => {
        const search = {location: {search: '?tag=tagValue'}};
        expect(mapStateToProps({}, search).tag).toEqual('tagValue');
    });

    describe('-- setTag check', () => {
        const tagToCheck = 'tag1';
        let setTagMocked: any;
        let container: any;

        beforeEach(() => {
            setTagMocked = jest.fn();
            container = mount(<MainPageHOC setTag={setTagMocked} tag={tagToCheck}/>);
        });

        it('-- setTag called after first mount', () => {
            expect(setTagMocked).toHaveBeenCalledTimes(1);
        })

        it('-- setTag not called if tag not changed', () => {
            container.setProps({setTag: setTagMocked, tag: tagToCheck});
            expect(setTagMocked).toHaveBeenCalledTimes(1);
        });

        it('-- setTag called if tag was changed', () => {
            expect(setTagMocked).toHaveBeenCalledTimes(1);
            container.setProps({setTag: setTagMocked, tag: 'anotherTag'});
            expect(setTagMocked).toHaveBeenCalledTimes(2);
        });

        it('-- setTag gets a tag from props', () => {
            expect(setTagMocked.mock.calls[0][0]).toEqual(tagToCheck);
        });
    });

});