import React from 'react';
import Header from './index';
import {connect} from 'react-redux';

interface HeaderHOCProps {
    user?: {
        username: string
        imgSrc?: string
    }
}

const HeaderHOC: React.FC<HeaderHOCProps> =
    ({user}) => (<Header user={user}/>);

const mapStateToProps = ({user}: any) => ({user: Object.keys(user).length && user});


export default connect(mapStateToProps)(HeaderHOC);