import React from 'react';
import './loader.scss';

export interface LoaderProps {
    size: number
}

const Loader: React.FC<LoaderProps> = ({size}) => {
    const divs = [];
    for (let i = 1; i <= 12; i++)
        divs.push(<div key={i} className={`sk-circle-${i} sk-child`}/>);

    return (
        <section style={{width:size, height:size}}>
            <div style={{width:size, height:size}} className="sk-circle-bounce">
                {divs}
            </div>
        </section>
    );
}

export default Loader;