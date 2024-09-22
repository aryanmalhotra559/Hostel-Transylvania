import React from 'react';
import Navsecond from '../../components/NavSecond';

const StaffLayout = ({ children }) => {
  return (
    <>
      <Navsecond />
      <main>{children}</main>
    </>
  );
}

export default StaffLayout;
