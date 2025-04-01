import ListTwo from "./listTwo.tsx"
import TableTwo from "./tableTwo.tsx"
import FormTwo from "./formTwo.tsx"
export function hobbyTwo(){
    return(
        <div>
            <h2>Alex's Hobby is Skiing</h2>
            <p>I love to ski it's a very fun sport in the winter and you get to see some beautiful views</p>
            <img src = "/public/download.jpg" alt = "ski image" width = "640"></img>
            <ListTwo></ListTwo>
            <TableTwo></TableTwo>
            <FormTwo></FormTwo>

        </div>
    )
}
export default hobbyTwo;