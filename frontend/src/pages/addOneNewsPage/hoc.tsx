import React from 'react';
import AddOneNewsPage from './index';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {mainPagePath, noMatchPagePath} from '../../paths';
import {createOneNews} from '../../store/oneNews/actions';
import fetchProcess from '../../types/fetching';

interface AddOneNewsPageHOCProps {
    error?: string
    status?: fetchProcess
    user?: any
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
        redirect: (path: string) => void,
    }) => void,
    history: any
}

const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> =
    ({user, save, history, status, error}) =>
        user ?
            <AddOneNewsPage
                error={error}
                status={status}
                save={(oneNews: {
                    img: File
                    tag: string
                    title: string
                    text: string
                }) =>
                    save({
                        ...oneNews,
                        redirect: history.push
                    })
                }
                cancel={() => history.push(mainPagePath())}
            /> :
            <Redirect to={noMatchPagePath()}/>;


const mapStateToProps = ({user, oneNews}: any, ownProps: any) => ({
    user: user.value,
    status: oneNews.creatingStatus,
    error: oneNews.creatingError,
    history: ownProps.history
});

const mapDispatchToProps = {save: createOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);