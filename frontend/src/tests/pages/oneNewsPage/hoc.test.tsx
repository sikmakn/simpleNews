import React from 'react';
import '../../../setupTests';
import {mount, ReactWrapper} from 'enzyme';
import {OneNewsPageHOC} from '../../../pages/oneNewsPage/hoc';
import {act} from 'react-dom/test-utils';
import renderer from 'react-test-renderer';

jest.mock('../../../pages/oneNewsPage', () => () => 'DummyOneNewsPage');
describe('OneNewsPageHOC: CHECK COMPONENT', () => {

    it('-- snapshot', () => {
        const rendererValue = renderer.create(
            <OneNewsPageHOC
                cleanStatus={() => {
                }}
                id={'id'}
                setId={() => {
                }}
                loadOneNews={() => {
                }}
                oldId={'id'}
            />).toJSON();
        expect(rendererValue).toMatchSnapshot();
    });

    describe('-- inner-- props functions calling --', () => {
        let mockedCleanStatus: any;
        let mockedLoadOneNews: any;
        let mockedSetId: any;
        let container: ReactWrapper;
        const defaultId = 'id';
        const defaultOldId = 'id';
        beforeEach(() => {
            mockedCleanStatus = jest.fn();
            mockedLoadOneNews = jest.fn();
            mockedSetId = jest.fn();
            container = mount(<OneNewsPageHOC
                cleanStatus={mockedCleanStatus}
                loadOneNews={mockedLoadOneNews}
                setId={mockedSetId}
                id={defaultId}
                oldId={defaultOldId}
            />);
        });

        it('-- cleanStatus notCalled in hoc', () => {
            act(() => {
                container.unmount();
            })
            expect(mockedCleanStatus).toHaveBeenCalledTimes(0);
        });

        it('-- setId called only if state OneNews id and routeId not equal', () => {
            expect(mockedSetId).toHaveBeenCalledTimes(0);
            container.setProps({
                cleanStatus: mockedCleanStatus,
                loadOneNews: mockedLoadOneNews,
                setId: mockedSetId,
                id: defaultId,
                oldId: 'anotherId',
            });
            expect(mockedSetId).toHaveBeenCalledTimes(1);
        });

        it('-- loadOneNews called oneTimes on load', () => {
            expect(mockedLoadOneNews).toHaveBeenCalledTimes(1);
        });

    });

});
