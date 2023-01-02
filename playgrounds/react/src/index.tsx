import React from 'react';
import ReactDOM from 'react-dom';


import { Text, Margin, Select }  from '@infovore.ds.e/react'

import '@infovore.ds.e/scss/lib/Text.css'
import '@infovore.ds.e/scss/lib/Margin.css'
import '@infovore.ds.e/scss/lib/Select.css'
import '@infovore.ds.e/scss/lib/Utilities.css'
import '@infovore.ds.e/scss/lib/global.css'

const options = [{
    label: 'Strict Black',
    value: 'strict-black'
}, {
    label: 'Heavenly Green',
    value: 'heavenly-green'
}, {
    label: 'Sweet Pink',
    value: 'pink'
}];


ReactDOM.render(
    <div style={{ padding: '40px' }}>
         <Margin space='xl'>
            <Text size='xl'>
                This is some text
            </Text>
        </Margin>
        <Select options={options} />
    </div>,
    document.querySelector('#root')
)