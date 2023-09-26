export default function Tag({ label }) {

    return <>
        <div className="p-1 border border-pink-300 rounded w-fit">
            <p className="text-xs text-pink-300 font-bold">{label}</p>
        </div>
    </>
}