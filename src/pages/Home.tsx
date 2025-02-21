import { LoaderFunction, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils/customFetch"
import Banner from "../components/Banner"

export const loader: LoaderFunction = async (): Promise<unknown> => {
    const resp = await customFetch('/shows/search/filters')
    return { ...resp.data }
}

function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="w-2/3">
            <Banner movies={data.shows} speed={50000} />
        </div>

    )
}
export default Home