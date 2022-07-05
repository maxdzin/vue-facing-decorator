import { TSX, Prop, Component, Vue } from 'vue-facing-decorator'

interface Props {
    propString: string
}

@Component
export default class MyComponent extends TSX<Props>()(Vue) {
    @Prop({
        required: true
    })
    propString!: string
}

//Typescript will check component attributes in tsx.
function render() {
    return <MyComponent propString='foobar'></MyComponent>
}