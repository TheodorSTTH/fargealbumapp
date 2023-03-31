export default function Collapse({title, body}) {
    return <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
    <div className="collapse-title text-xl font-medium">
        {title}
    </div>
    <div className="collapse-content"> 
        <p>{body}</p>
    </div>
  </div>
}