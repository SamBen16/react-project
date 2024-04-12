import React from 'react';
import { dataList } from '../data/data'

function Gallery() {
    const firstSixItems = dataList.slice(0, 6);
    return (
        <div className="thumb-container">
            
                {firstSixItems.map(item => (
                    <div className="thumb">
                    <p>{item.title}</p>
                    </div>
                ))}
          
        </div>
    );
}

export default Gallery