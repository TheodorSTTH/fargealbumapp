import Anchor from "./Anchor"
import ArrowRight from "./ArrowRight"
import H3 from "./H3"

export default function Costs({products=[], title="Kostnader"}) {
    return (<div>
        <H3>{title}</H3>
        <br />
        <div className="overflow-x-auto pb-8">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Kostnad (NOK)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, i) => {
                            return <tr key={i}>
                                <td>{product.name}</td>
                                <td>{product.cost} kr</td>
                            </tr>
                        })
                    }
                </tbody>
                <thead>
                    <tr>
                        <td>Totalt:</td>
                        <td>
                            {products.reduce((accumulator, currentValue) => {
                                return accumulator + currentValue.cost
                            }, 0)} kr</td>
                    </tr>
                </thead>
            </table>
        </div>
    </div>)
}