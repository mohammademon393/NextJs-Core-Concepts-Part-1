import { LoaderCircle } from 'lucide-react';
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-5xl font-bold">
           <h2 className= "flex">L <span className='animate-spin'><LoaderCircle /></span></h2> 
           <h2>ading...</h2>
        </div>
    );
};

export default Loading;