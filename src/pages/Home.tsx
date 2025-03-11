import { LoaderFunction, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils/customFetch"
import { Card, CardContent, CardTitle } from "../components/ui/card"
import { CarouselSize } from "../components/Carousel"
export const loader: LoaderFunction = async (): Promise<unknown> => {
    const resp = await customFetch('/shows/search/filters')
    return { ...resp.data }
}

function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="flex gap-12 flex-col w-full overflow-y-scroll items-center">
            <CarouselSize />
            <Card className="h-90 w-2/3 flex items-center">
                <CardContent className="p-6 flex gap-12">
                    <div className="flex gap-12 items-center flex-col">
                        <CardTitle>Take care of your loved ones</CardTitle>
                        Pariatur et cupidatat cillum et sit occaecat commodo tempor aute eu irure nulla ex. Nulla sunt esse Lorem esse. Eiusmod in sunt sit exercitation qui incididunt deserunt tempor sunt sint fugiat. Aliqua minim cillum nostrud deserunt eiusmod do do non duis ullamco nisi nulla magna. Duis mollit anim consequat reprehenderit nisi ullamco reprehenderit in do in deserunt.
                    </div>
                    <img className="object-fill overflow-hidden rounded-sm max-h-svh" src="https://img.freepik.com/free-photo/doctor-holding-hands-with-senior-patient_23-2148962319.jpg?t=st=1741698664~exp=1741702264~hmac=90f3ffea37213b11a471825df03d53780d08c2120b57bbf32564df4dcf74d4b4&w=2000" />
                </CardContent>
            </Card>
            <Card className="h-90 w-2/3 flex items-center">
                <CardContent className="p-6 flex gap-12 flex-row-reverse">
                    <div className="flex gap-12 items-center flex-col">
                        <CardTitle>No limits in delivery </CardTitle>
                        Pariatur et cupidatat cillum et sit occaecat commodo tempor aute eu irure nulla ex. Nulla sunt esse Lorem esse. Eiusmod in sunt sit exercitation qui incididunt deserunt tempor sunt sint fugiat. Aliqua minim cillum nostrud deserunt eiusmod do do non duis ullamco nisi nulla magna. Duis mollit anim consequat reprehenderit nisi ullamco reprehenderit in do in deserunt.
                    </div>
                    <img className="object-fill overflow-hidden rounded-sm max-h-svh" src="https://img.freepik.com/free-vector/customer-using-mobile-app-tracking-order-delivery_74855-5229.jpg?t=st=1741698959~exp=1741702559~hmac=8d9f764d0021a95cce5b485a6f583ffd2a4cdccd3936caa197058a8b66c6def3&w=2000" />
                </CardContent>
            </Card>
            <Card className="h-90 w-2/3 flex items-center">
                <CardContent className="p-6 flex gap-12">
                    <div className="flex gap-12 items-center flex-col">
                        <CardTitle>Easy to order</CardTitle>
                        Pariatur et cupidatat cillum et sit occaecat commodo tempor aute eu irure nulla ex. Nulla sunt esse Lorem esse. Eiusmod in sunt sit exercitation qui incididunt deserunt tempor sunt sint fugiat. Aliqua minim cillum nostrud deserunt eiusmod do do non duis ullamco nisi nulla magna. Duis mollit anim consequat reprehenderit nisi ullamco reprehenderit in do in deserunt.
                    </div>
                    <img className="object-fill overflow-hidden rounded-sm max-h-svh" src="https://img.freepik.com/free-photo/older-woman-home-having-coffee-talking-phone_23-2148740700.jpg?t=st=1741699215~exp=1741702815~hmac=f026892f5f5e919623d0458f90c7d6c8d07d1397d47af0f4baa2272e87e03879&w=2000" />
                </CardContent>
            </Card>

        </div>

    )
}
export default Home