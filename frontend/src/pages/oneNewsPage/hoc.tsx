import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {cleanOneNewsStatus, loadOneNews, setIdOfOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
    id: string
    oldId?: string
    loadOneNews: (id: string) => void
    setId: (id: string) => void
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> =
    ({setId, id, oldId, loadOneNews, cleanStatus}) => {

        useEffect(() => {
            if (oldId !== id) setId(id);
        }, [setId, id, oldId]);

        useEffect(() => loadOneNews(id),
            [id, loadOneNews]);

        return <OneNewsPage cleanStatus={cleanStatus}/>;
    }


const mapStateToProps = ({oneNews}: any, ownProps: any) =>
    ({
        id: ownProps.match.params.id,
        oldId: oneNews.id,
    });


const mapDispatchToProps = {
    loadOneNews,
    setId: setIdOfOneNews,
    clanStatus: cleanOneNewsStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)