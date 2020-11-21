import React, {useEffect} from 'react';
import EditOneNewsPage from './index';
import {loadOneNews, updateOneNews} from '../../store/oneNews/actions';
import {Redirect} from 'react-router-dom';
import {noMatchPagePath, oneNewsPagePath} from '../../paths';
import {connect} from 'react-redux';
import Loader from '../../components/loader';
import fetchProcess from "../../types/fetching";

interface EditOneNewsPageHOCProps {
    username?: string
    id: string
    loadOneNews: (id: string) => void
    status?: fetchProcess
    error?: string
    oneNews?: {
        id: string
        imgSrc: string
        tag: string
        title: string
        text: string
        authorId: string
    }
    save: (oneNews: {
        id: string
        img: File
        tag: string
        title: string
        text: string
        authorUsername: string
    }) => void,
    history: any
}

const EditOneNewsPageHOC: React.FC<EditOneNewsPageHOCProps> =
    ({
         username,
         id,
         oneNews,
         loadOneNews,
         save,
         history,
         status,
         error,
     }) => {
        useEffect(() => loadOneNews(id), [id, loadOneNews]);

        if (!username)
            return <Redirect to={noMatchPagePath()}/>;

        if (!oneNews)
            return (<Loader size={300}/>);

        if (oneNews.authorId !== username)
            return <Redirect to={noMatchPagePath()}/>;

        return (<EditOneNewsPage
            oneNews={oneNews}
            status={status}
            error={error}
            save={
                (n: {
                    img: File
                    tag: string
                    title: string
                    text: string
                }) => {
                    save({
                        ...n,
                        id: oneNews.id,
                        authorUsername: oneNews?.authorId
                    });
                    history.push(oneNewsPagePath(oneNews.id))
                }
            }
            cancel={() => history.push(oneNewsPagePath(oneNews.id))}
        />);
    }

const mapStateToProps = ({user, oneNews}: any, ownProps: any) =>
    ({
        id: ownProps.match?.params?.id,
        username: user.value?.username,
        oneNews: oneNews.value,
        history: ownProps.history,
        status: oneNews.updatingStatus,
        error: oneNews.updatingError,
    });

const mapDispatchToProps = {loadOneNews, save: updateOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(EditOneNewsPageHOC);