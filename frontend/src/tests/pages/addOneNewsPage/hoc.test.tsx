import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import {AddOneNewsPageHOC, mapStateToProps} from '../../../pages/addOneNewsPage/hoc';
import {noMatchPagePath} from '../../../paths';
import fetchProcess from '../../../types/fetching';

jest.mock('../../../components/commonEditPage/index',
    () => () => 'DummyCommonEditPage');

describe('ADD ONE NEWS PAGE HOC: check', () => {

    it('-- mapToStateToProps', () => {
        const idToCheck = 'idToCheck';
        const errorToCheck = 'errorToCheck';
        const user = {value: 'userCheckValue'};
        const oneNews = {
            id: idToCheck,
            creatingStatus: fetchProcess.loading,
            creatingError: errorToCheck,
        };
        const history = {value: 'historyValue'};
        const result = mapStateToProps({user, oneNews}, {history});
        expect(result.oneNewsId).toEqual(idToCheck);
        expect(result.error).toEqual(errorToCheck);
        expect(result.user).toEqual(user.value);
        expect(result.status).toEqual(oneNews.creatingStatus);
        expect(result.history).toEqual(history);
    });

    describe('-- hoc checks', () => {
        let pushHistoryMocked: any;
        let saveMocked: any;
        let cancelMocked: any;
        let cleanStatusMocked: any;
        beforeEach(() => {
            pushHistoryMocked = jest.fn();
            saveMocked = jest.fn();
            cancelMocked = jest.fn();
            cleanStatusMocked = jest.fn();
        })

        it('-- redirect to noMatch if not have user', () => {
            let pathName: string = '';
            mount(
                <MemoryRouter>
                    <AddOneNewsPageHOC
                        history={{push: pushHistoryMocked}}
                        save={saveMocked}
                        cancel={cancelMocked}
                        cleanStatus={cleanStatusMocked}
                    />
                    <Route path={'*'} render={({location}) => {
                        pathName = location.pathname;
                        return null;
                    }}/>
                </MemoryRouter>);
            expect(pathName).toEqual(noMatchPagePath());
        });

        it('-- return commonEdit if have user', () => {
            const container = mount(
                <AddOneNewsPageHOC
                    history={{push: pushHistoryMocked}}
                    save={saveMocked}
                    cancel={cancelMocked}
                    cleanStatus={cleanStatusMocked}
                    user={{}}
                />);
            expect(container.text()).toEqual('DummyCommonEditPage');
        });
    });

});