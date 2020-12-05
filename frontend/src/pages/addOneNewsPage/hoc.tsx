import React from 'react';
import CommonEditPage from '../../components/commonEditPage';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {mainPagePath, noMatchPagePath} from '../../paths';
import {cleanOneNewsStatus, createOneNews} from '../../store/oneNews/actions';
import fetchProcess from '../../types/fetching';

interface AddOneNewsPageHOCProps {
    oneNewsId?: string
    user?: any
    history: any
    cancel: () => void,
    error?: string
    status?: fetchProcess
    cleanStatus: () => void
    save: (oneNews: {
        img: File
        tag: string
        title: string
        text: string
    }) => void,
}

export const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> =
    ({user, history, ...props}) => {
        if (!user) return <Redirect to={noMatchPagePath()}/>;
        return <CommonEditPage
            {...props}
            cancel={() => history.push(mainPagePath())}
        />;
    }

export const mapStateToProps = ({user, oneNews}: any, ownProps: any) => ({
    oneNewsId: oneNews.id,
    user: user.value,
    status: oneNews.creatingStatus,
    error: oneNews.creatingError,
    history: ownProps.history
});

export const mapDispatchToProps = {save: createOneNews, cleanStatus: cleanOneNewsStatus};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);