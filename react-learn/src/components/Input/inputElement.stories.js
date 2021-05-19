import InputElement from './inputElement'

export default {
    title:"form/InputElement",
    component:InputElement
}

export const LargeInputElement = ()=><InputElement variant="large">Insert name</InputElement>
export const MediumInputElement = ()=><InputElement variant="medium">Insert name</InputElement>
export const SmallInputElement = ()=><InputElement variant="small">Insert name</InputElement>