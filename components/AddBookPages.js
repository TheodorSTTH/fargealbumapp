export default function AddBookPages({ className }) {
    return (
        <div className={className}>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">24 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-grey-500" checked />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">36 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                </label>
            </div>
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text">48 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked />
                </label>
            </div>
        </div>
    )
}