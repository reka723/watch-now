import { LoaderFunction, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils/customFetch"
import { Card } from "../components/ui/card"
import { Carousel } from "../components/ui/carousel"
import { CarouselSize } from "../components/Carousel"
export const loader: LoaderFunction = async (): Promise<unknown> => {
    const resp = await customFetch('/shows/search/filters')
    return { ...resp.data }
}

function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="flex flex-col w-full overflow-y-scroll items-center">
            <Card className="h-96 w-2/3">
                Pariatur et cupidatat cillum et sit occaecat commodo tempor aute eu irure nulla ex. Nulla sunt esse Lorem esse. Eiusmod in sunt sit exercitation qui incididunt deserunt tempor sunt sint fugiat. Aliqua minim cillum nostrud deserunt eiusmod do do non duis ullamco nisi nulla magna. Duis mollit anim consequat reprehenderit nisi ullamco reprehenderit in do in deserunt.
            </Card>
            <Card className="h-96 w-2/3">
            </Card>
            <Card className="h-96 w-2/3">
            </Card>
            <Card className="h-96 w-2/3">
            </Card>
            <Card className="h-96 w-2/3">


            </Card>

            <CarouselSize />
        </div>

    )
}
export default Home