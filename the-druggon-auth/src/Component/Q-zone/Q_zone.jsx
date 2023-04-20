import React from 'react';
import q1 from '../../assets/qZone1.png';
import q2 from '../../assets/qZone2.png';
import q3 from '../../assets/qZone3.png';

const Q_zone = () => {
    return (
        <div className='bg-secondary my-4 pb-4'>
            
            <h5 className='p-3'>Q-Zone</h5>
            <div className='d-flex justify-content-center'>
            <div>
            <div>
                <img src={q1} alt="q-zone" />
            </div>
            <div>
                <img src={q2} alt="q-zone" />
            </div>
            <div>
                <img src={q3} alt="q-zone" />
            </div>
            </div></div>
           
        </div>
    );
};

export default Q_zone;