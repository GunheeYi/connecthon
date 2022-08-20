import React from 'react';
import palette from '../styles/pallete';
import Station from './Station';

{/* <Seat occupied="true" big="true" showNum="true" num="12"/> */}

function Train(props) {
    return (
        <div style={{
            height: "72px",
            width: "334px",
            position: "relative",
            borderRadius: "16px",
            backgroundColor: palette.gray_5,
            margin: "5px 0",
        }}>
            <div style={{
                marginLeft: 16,
                position: 'absolute',
                top: '50%',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)',
                color: palette.white,
            }}>
                <Station name={props.name} description={props.description}/>
            </div>
        </div>
    )
}

export default Train;