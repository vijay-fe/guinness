export default function Spacer({space, direction= "y"}){
    const style = {
        x: {
            width: `${space}px`
        },
        y: {
            height: `${space}px`
        }
    }
    return (
        <div className="spacer" style={style[direction]}></div>
    )
}