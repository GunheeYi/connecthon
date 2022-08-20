import React from 'react';
import palette from '../styles/pallete';
import Seat from './Seat';

{/* <Seat occupied="true" big="true" showNum="true" num="12"/> */}

function SeatGroup(props) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, flexDirection: 'column'}}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30}}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6}}>
            {
              Array.from({length: 3}, (_, i) => i + 1).map(i => (
                <Seat
                  occupied={false} 
                  big={true} 
                  inverted={false} 
                  num={i}
                />
              ))
            }
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6}}>
            {
              Array.from({length: 3}, (_, i) => i + 4).map(i => (
                <Seat
                  occupied={false} 
                  big={true} 
                  inverted={false} 
                  num={i}
                />
              ))
            }
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30}}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6}}>
            {
              Array.from({length: 3}, (_, i) => i + 7).map(i => (
                <Seat
                  occupied={false} 
                  big={true} 
                  inverted={true} 
                  num={i}
                />
              ))
            }
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6}}>
            {
              Array.from({length: 3}, (_, i) => i + 10).map(i => (
                <Seat
                  occupied={false} 
                  big={true} 
                  inverted={true} 
                  num={i}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
}

export default SeatGroup;