// @flow
import React from 'react';


const Add = (props: Object): React.Element<any> => (
  <svg
    fill="#000000"
    style={{
      display: 'block',
    }}
    viewBox="0 0 24 24"
    width="24"
    {...props}
  >
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);


export default Add;
