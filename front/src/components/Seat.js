import React from 'react';
import palette from '../styles/pallete';

{/* <Seat occupied="true" big="true" showNum="true" num="12"/> */}

function Seat(props) {
    if (props.big) {
        return (
            <div style={{position: 'relative', width: 40, height: 40, textAlign: 'center'}}>
                <div style={{
                    width: 40, height: 40, borderRadius: 8, position: 'absolute',
                    border: '1px solid ' + (props.occupied ? palette.sub_purple : palette.gray_2),
                    backgroundColor: (props.occupied ? palette.main_purple : palette.gray_4)
                }}></div>
                <div style={{
                    width: 40, height: 16, borderRadius: 8, position: 'absolute',
                    top: props.inverted ? 24 : 0,
                    border: '1px solid ' + (props.occupied ? palette.sub_purple : palette.gray_2),
                    backgroundColor: (props.occupied ? palette.main_purple : palette.gray_4)
                }}></div>
                <div style={{width: '100%', textAlign: 'center', position: 'absolute', top: props.inverted ? 6 : 18}}>
                    <div style={{display: 'inline-block', color: props.occupied ? palette.white : palette.gray_1}}>{props.num}</div>
                </div>
            </div>
        )
    }
    return (
        <div style={{
            width: 14, height: 14, borderRadius: 3,
            backgroundColor: (props.occupied ? palette.main_purple : palette.gray_4)
        }}></div>
    )
}

export default Seat;