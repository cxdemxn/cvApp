export default function ({
    type='button',
    classname,
    name,
    clickEvent
}) {

    return (
        <button
            type={type}
            className={classname}
            onClick={clickEvent}
        >
            {name}
        </button>
    )
}