import "./Price.css"

import PriceMassage from "../../components/PriceMassage/PriceMassage"
import Discount from "../../components/Discount/Discount"

export default function Price () {
    return (
        <div>
          <Discount />
          <PriceMassage />  
        </div>     
    )
}