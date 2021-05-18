import { useQuery,gql } from "@apollo/client";

const query=gql`
    query GetRates {
        rates(currency: "USD") {
        currency
        rate
        }
    }    
`
const DataContainer=()=>{
    const {loading,error,data}=useQuery(query)
    if(loading) return <>Loading....</>
    if(error) return <>{error}</>
    return data.rates.map(({currency,rate})=>
        <div key={currency}>
            <p>{currency}:{rate}</p>
        </div>
    )
}

export default DataContainer;