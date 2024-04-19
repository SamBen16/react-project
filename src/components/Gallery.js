import React from 'react';
import { dataList } from '../data/data'

function Gallery() {
    return (
        <div className="thumb-container">
            {dataList.map(item => (
                <div className="thumb" style={{ background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.45)), url(${item.cover})`, backgroundSize: 'cover' }}>
                    <p>{item.title}</p>
                </div>
            ))}
        </div>
    );
}

export default Gallery