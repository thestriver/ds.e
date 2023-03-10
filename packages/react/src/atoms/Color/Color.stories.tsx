import React from 'react'
import Color from './Color'
import { text, select } from '@storybook/addon-knobs'

import { Spacing } from '@infovore.ds.e/foundation'

// css
import '@infovore.ds.e/scss/lib/Utilities.css'

export default {
    title: 'Atoms|Color'
}

export const Common = () => <Color hexCode={text('HexCode', 'pink')} />

export const CustomDimensions = () => <Color
hexCode={text('HexCode', 'pink')}
width={select('Width', Object.values(Spacing), 'xxl')}
height={select('Height', Object.values(Spacing), 'xxl')}  />


// import React from 'react';
// import { ComponentStory, ComponentMeta } from '@storybook/react';
// import Color, { ColorProps } from './Color';
// import { Spacing } from '@infovore.ds.e/foundation'

// // css
// import '@ds.e/scss/lib/Utilities.css'
 

// export default {
//     title: 'Atoms|Color',
//     component: Color,
//     argTypes: {
//       width: {control: 'select', description: 'The width of the square'},
//       height: { control: 'select', description: 'The height of the square'}
//     }
//   } as ComponentMeta<typeof Color>;
  
//   const Template: ComponentStory<typeof Color> = (args: ColorProps) => <Color {...args}/>;

// export const CustomColor = Template.bind({});
//   CustomColor.args = {
//   };

// export const CustomColorWithCustomDimensions = Template.bind({});
//   CustomColorWithCustomDimensions.args = {
//     width: Spacing.xl,
//     height: Spacing.xl
// };
