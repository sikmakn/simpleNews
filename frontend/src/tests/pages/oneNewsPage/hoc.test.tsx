import React from 'react';
import '../../../setupTests';
import {mount, ReactWrapper} from 'enzyme';
import {mapStateToProps, OneNewsPageHOC} from '../../../pages/oneNewsPage/hoc';
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

    it('--mapStateToProps check', () => {
        const oneNewsId = 'oneNewsId';
        const historyId =  'historyId';
        const oneNewsState = {id: oneNewsId};
        const history = {match: {params: {id:historyId}}};
        const result = mapStateToProps({oneNews:oneNewsState}, history)
        expect(result.id).toEqual(historyId);
        expect(result.oldId).toEqual(oneNewsId);
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
