
export default function card({title, desc}){
    return (
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className="card-desc">{desc}</p>
            <div className="likes">
            </div>
        </div>
    )
}
