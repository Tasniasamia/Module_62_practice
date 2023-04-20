import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Left_side = () => {
    const[datas,setData]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:3000/catagory')
        .then(res=>res.json())
        .then(data=>setData(data));
    },[])
    console.log(datas);
    return (
        <div>
            
            <h4>All Catagories</h4>
           {
            datas.map(index=><p key={index.id}>
                <Link className='text-decoration-none'>{index.name}</Link>
            </p>)
           }
        </div>
    );
};

export default Left_side;