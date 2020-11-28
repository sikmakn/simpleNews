import React from 'react';
import CommonEditPage, {CommonEditPageProps} from '../../components/commonEditPage';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {mainPagePath, noMatchPagePath} from '../../paths';
import {cleanOneNewsStatus, createOneNews} from '../../store/oneNews/actions';

interface AddOneNewsPageHOCProps extends CommonEditPageProps {
    user?: any
    history: any
}

const AddOneNewsPageHOC: React.FC<AddOneNewsPageHOCProps> =
    ({user, history, ...props}) =>
        user ?
            <CommonEditPage
                {...props}
                cancel={() => history.push(mainPagePath())}
            /> :
            <Redirect to={noMatchPagePath()}/>;

const mapStateToProps = ({user, oneNews}: any, ownProps: any) => ({
    oneNewsId: oneNews.id,
    user: user.value,
    status: oneNews.creatingStatus,
    error: oneNews.creatingError,
    history: ownProps.history
});

const mapDispatchToProps = {save: createOneNews, cleanStatus: cleanOneNewsStatus};

export default connect(mapStateToProps, mapDispatchToProps)(AddOneNewsPageHOC);