export default function Tag({ label }) {

    return <>
        <div className="p-1 border border-pink-500 rounded w-fit">
            <p className="text-xs text-pink-500 font-bold">{label}</p>
        </div>
    </>
}