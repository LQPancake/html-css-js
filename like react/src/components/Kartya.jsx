export default function Kartya({title, description}){
    return (
    <div className="card">
        <h2>{title}</h2>
        <p>{description}</p>
        <button>button</button>
    </div>
    )
}