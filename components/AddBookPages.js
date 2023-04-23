import { useState } from "react"

export default function AddBookPages({ className, pagesSelected }) {
    const [selectedOption, setSelectedOption] = useState(0)
    function select(option, pages) {
        setSelectedOption(option)
        pagesSelected(pages)
    }
    return (
        <div className={className}>
            <div className="form-control" onClick={() => select(0, 24)}>
                <label className="label cursor-pointer">
                    <span className="label-text">24 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-gray-500" checked={selectedOption === 0} />
                </label>
            </div>
            <div className="form-control" onClick={() => select(1, 36)}>
                <label className="label cursor-pointer">
                    <span className="label-text">36 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={selectedOption === 1} />
                </label>
            </div>
            <div className="form-control" onClick={() => select(2, 48)}>
                <label className="label cursor-pointer">
                    <span className="label-text">48 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={selectedOption === 2} />
                </label>
            </div>
            <div className="form-control" onClick={() => select(3, 60)}>
                <label className="label cursor-pointer">
                    <span className="label-text">60 sider</span> 
                    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" checked={selectedOption === 3} />
                </label>
            </div>
        </div>
    )
}