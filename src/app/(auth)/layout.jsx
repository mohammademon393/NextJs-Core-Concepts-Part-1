import React from 'react';

const AuthLayout = ({ children }) => {
    return (
      <div className="flex min-h-screen gap-5 ">
        <div className="flex-2">{children}</div>
        <div className="flex-1 bg-gray-800 text-white p-5 flex justify-center items-center rounded">
          <h2 className="text-lg font-semibold"> Welcome to authentication</h2>
        </div>
      </div>
    );
};

export default AuthLayout;