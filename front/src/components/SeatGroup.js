import React from 'react';
import palette from '../styles/pallete';
import Seat from './Seat';

{/* <Seat occupied="true" big="true" showNum="true" num="12"/> */}

function SeatGroup(props) {
    const seat2seat = props.big ? 6 : 3;
    const side2side = props.big ? 30 : 12;
    const front2front = props.big ? 24 : 10;
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: front2front, flexDirection: 'column'}}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: side2side }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: seat2seat}}>
            {
              Array.from({length: 3}, (_, i) => i + 1).map((i, key)=> (
                props.seat === i ? (<Seat
                  key={key}
                  occupied={true} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />) : (<Seat
                  key={key}
                  occupied={false} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />)
              ))
            }
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: seat2seat}}>
          {
              Array.from({length: 3}, (_, i) => i + 4).map((i, key)=> (
                props.seat === i ? (<Seat
                  key={key}
                  occupied={true} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />) : (<Seat
                  key={key}
                  occupied={false} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />)
              ))
            }
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: side2side }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: seat2seat}}>
          {
              Array.from({length: 3}, (_, i) => i + 7).map((i, key)=> (
                props.seat === i ? (<Seat
                  key={key}
                  occupied={true} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />) : (<Seat
                  key={key}
                  occupied={false} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />)
              ))
            }
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: seat2seat}}>
          {
              Array.from({length: 3}, (_, i) => i + 10).map((i, key)=> (
                props.seat === i ? (<Seat
                  key={key}
                  occupied={true} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />) : (<Seat
                  key={key}
                  occupied={false} 
                  big={props.big} 
                  inverted={false} 
                  num={i}
                />)
              ))
            }
          </div>
        </div>
      </div>
    );
}

export default SeatGroup;