import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import OneNewsPage, {OneNewsPageProps} from './index';
import {loadOneNews} from '../../store/oneNews/actions';

interface OneNewsPageHOCProps extends OneNewsPageProps {
    id: string
    loadOneNews: (id: string) => void
}

const OneNewsPageHOC: React.FC<OneNewsPageHOCProps> =
    ({id, loadOneNews, ...props}) => {
        useEffect(() => loadOneNews(id), [id, loadOneNews]);
        return <OneNewsPage {...props}/>;
    }

const mapStateToProps = ({oneNews, lastNews}: any, ownProps: any) =>
    ({id: ownProps.match.params.id});


const mapDispatchToProps = {loadOneNews};

export default connect(mapStateToProps, mapDispatchToProps)(OneNewsPageHOC)