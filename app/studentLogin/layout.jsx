import React from 'react';
import Navsecond from '../../components/NavSecond';

const StudentLayout = ({ children }) => {
  return (
    <>
      <Navsecond />
      <main>{children}</main>
    </>
  );
}

export default StudentLayout;
