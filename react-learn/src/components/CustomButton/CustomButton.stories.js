import React from 'react'
import Center from '../Center/Center';
import CustomButton from './CustomButton'

export default {
    title:"form/CustomButton",
    component:CustomButton,
    decorators:[story=><Center>{story()}</Center>]
}

export const Primary = ()=><CustomButton variant="primary">Primary</CustomButton>;
export const Secondary = ()=><CustomButton variant="secondary">Secondary</CustomButton>;
export const Success = ()=><CustomButton variant="success">Sucess</CustomButton>;
export const Danger = ()=><CustomButton variant="danger">Danger</CustomButton>;

const Template= args=><CustomButton {...args} />

export const PrimaryWithArgs = Template.bind({})
export const SecondaryWithArgs = Template.bind({})

PrimaryWithArgs.args={
    variant:"primary",
    children:"Primary button"
}

SecondaryWithArgs.args={
    variant:"secondary",
    children:"Secondary Button"
}
