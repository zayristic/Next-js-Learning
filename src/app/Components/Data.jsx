import React from 'react';
import { wait } from '../lib/api';

const Data = async () => {
  await wait(5000);
  return <div>data</div>;
};

export default Data;
