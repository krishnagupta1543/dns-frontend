export function Button(props:any) {
    return <button onClick={props.onClick} type="button" className="  text-black bg-green-300 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-3 py-1 me-2 ">{props.label}</button>
}