import React from 'react';
import LastNewsLayout, {LastNewsLayoutProps} from './index';
import {connect} from 'react-redux';
import {loadLastNews} from "../../store/lastNews/actions";

interface LastNewsLayoutHOCProps extends LastNewsLayoutProps {
}

const LastNewsLayoutHOC: React.FC<LastNewsLayoutHOCProps> =
    (props) => <LastNewsLayout {...props}/>;

const mapStateToProps = ({lastNews}: any) =>
    ({lastNews: lastNews.value});

const dispatchStateToProps = {loadLastNews};

export default connect(mapStateToProps, dispatchStateToProps)(LastNewsLayoutHOC);
