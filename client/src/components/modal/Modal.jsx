
export default function Modal({ error , show, hide }) {
    return (
        <div className=' absolute top-0 left-0 h-screen w-screen flex justify-center items-center bg-black opacity-70'>
            <div className=' text-center '>
                <h1 className=' text-4xl text-red-600 mb-8'>{error}</h1>
                <button className=' primary '>OK</button>
            </div>
        </div>
    )
}
