import React, {useEffect} from 'react';
import EditOneNewsPage, {EditOneNewsPageProps} from './index';
import {loadOneNews} from '../../store/oneNews/actions';
import {Redirect} from 'react-router-dom';
import {noMatchPagePath} from '../../paths';
import {connect} from 'react-redux';
import Loader from '../../components/loader';

interface OneNewsPagePropsWithAuthor extends EditOneNewsPageProps {
    authorUsername: string
}

interface EditOneNewsPageHOCProps {
    username?: string
    id: string
    loadOneNews: (id: string) => void
    oneNews: OneNewsPagePropsWithAuthor
}

const EditOneNewsPageHOC: React.FC<EditOneNewsPageHOCProps> =
    ({username, id, oneNews, loadOneNews}) => {
        useEffect(() => loadOneNews(id), [id, loadOneNews]);

        if (!username)
            return <Redirect to={noMatchPagePath()}/>;

        if (!oneNews)
            return (<Loader size={300}/>);

        if (oneNews.authorUsername !== username)
            return <Redirect to={noMatchPagePath()}/>;

        return (<EditOneNewsPage {...oneNews}/>);
    }

const mapStateToProps = ({user, oneNews}: any, ownProps: any) =>
    ({
        id: ownProps.match?.params?.id,
        username: user.value?.username,
        oneNews: oneNews.value,
    });

const mapDispatchToProps = {loadOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(EditOneNewsPageHOC);