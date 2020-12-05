import {mount} from 'enzyme';
import React from 'react';
import {MemoryRouter, Route} from 'react-router-dom';
import {EditOneNewsPageHOC, mapStateToProps} from '../../../pages/editOneNewsPages/hoc';
import {noMatchPagePath} from '../../../paths';

jest.mock('../../../components/commonEditPage', () => () => 'DummyCommonEditPage');
jest.mock('../../../components/loader', () => () => 'DummyLoader');

describe('EDIT ONE NEWS PAGE: checks', () => {
    const cleanStatus = jest.fn();
    const save = jest.fn();
    const loadOneNews = jest.fn();
    const history = {};
    const oneNewsId = '';

    it('--redirect to noMatchPage if not have user', () => {
        let pathName = '';
        mount(
            <MemoryRouter>
                <EditOneNewsPageHOC
                    cleanStatus={cleanStatus}
                    save={save}
                    oneNewsId={oneNewsId}
                    loadOneNews={loadOneNews}
                    history={history}
                />
                <Route
                    path={'*'}
                    render={({location}) => {
                        pathName = location.pathname;
                        return null;
                    }}/>
            </MemoryRouter>
        );
        expect(pathName).toEqual(noMatchPagePath());
    });

    it('-- redirect if authorId not equal username', () => {
        let pathName = '';
        mount(
            <MemoryRouter>
                <EditOneNewsPageHOC
                    username={'username'}
                    oneNews={{authorId: 'anotherUsername', id: '', imgSrc: '', tag: '', text: '', title: ''}}
                    cleanStatus={cleanStatus}
                    save={save}
                    oneNewsId={oneNewsId}
                    loadOneNews={loadOneNews}
                    history={history}
                />
                <Route path={'*'} render={({location}) => {
                    pathName = location.pathname;
                    return null;
                }}/>
            </MemoryRouter>
        );
        expect(pathName).toEqual(noMatchPagePath());
    });

    it('-- return loader if not have oneNews', () => {
        const container = mount(<EditOneNewsPageHOC
            username={'username'}
            cleanStatus={cleanStatus}
            save={save}
            oneNewsId={oneNewsId}
            loadOneNews={loadOneNews}
            history={history}
        />);
        expect(container.text()).toEqual('DummyLoader');
    });

    it('-- return commonEdit if all ok', () => {
        const container = mount(<EditOneNewsPageHOC
            username={'username'}
            oneNews={{authorId: 'username', id: '', imgSrc: '', tag: '', text: '', title: ''}}
            cleanStatus={cleanStatus}
            save={save}
            oneNewsId={oneNewsId}
            loadOneNews={loadOneNews}
            history={history}
        />);
        expect(container.text()).toEqual('DummyCommonEditPage');
    });

    it('--if errorLoading return error message', () => {
        const container = mount(<EditOneNewsPageHOC
            username={'username'}
            loadingError={'error message'}
            cleanStatus={cleanStatus}
            save={save}
            oneNewsId={oneNewsId}
            loadOneNews={loadOneNews}
            history={history}
        />);
        expect(container.text()).toEqual('error message');
    });

    it('--mapStateToProps', () => {
        const user = {value: {username: 'username'}};
        const oneNewsValue = {value: 'oneNewsValue'};
        const oneNews = {
            loadingError: 'loadingError',
            value: oneNewsValue,
            updatingError: 'updatingError',
            updatingStatus: 'updatingStatus',
        };
        const match = {params: {id: 'id'}};
        const history = {};
        const result = mapStateToProps({user, oneNews}, {match, history});
        expect(result.oneNewsId).toEqual('id');
        expect(result.username).toEqual('username');
        expect(result.history).toEqual(history);
        expect(result.loadingError).toEqual('loadingError');
        expect(result.status).toEqual('updatingStatus');
        expect(result.error).toEqual('updatingError');
        expect(result.oneNews).toEqual(oneNewsValue);
    });

    describe('-- loadOneNews', () => {
        let loadOneNews: any;
        let container: any;
        const oneNews = {authorId: 'username', id: '', imgSrc: '', tag: '', text: '', title: ''};
        const username = 'username';
        beforeEach(() => {
            loadOneNews = jest.fn();
            container = mount(<EditOneNewsPageHOC
                cleanStatus={cleanStatus}
                save={save}
                oneNewsId={oneNewsId}
                oneNews={oneNews}
                username={username}
                loadOneNews={loadOneNews}
                history={history}
            />);
        });

        it('-- called by firstMount', () => {
            expect(loadOneNews).toHaveBeenCalledTimes(1);
        });

        it('-- not called twice if not change oneNewsId', () => {
            expect(loadOneNews).toHaveBeenCalledTimes(1);
            container.setProps({oneNewsId});
            expect(loadOneNews).toHaveBeenCalledTimes(1);
        });

        it('-- called twice if oneNewsId changed', () => {
            expect(loadOneNews).toHaveBeenCalledTimes(1);
            container.setProps({oneNewsId: 'anotherId'});
            expect(loadOneNews).toHaveBeenCalledTimes(2);
        });

    });

});