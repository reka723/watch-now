import { LoaderFunction, useLoaderData } from "react-router-dom"
import { customFetch } from "../utils/customFetch"
import { Card, CardContent, CardTitle } from "../components/ui/card"
import { CarouselSize } from "../components/Carousel"
import CardWithPicture from "../components/CardWithPicture"
export const loader: LoaderFunction = async (): Promise<unknown> => {
    const resp = await customFetch('/shows/search/filters')
    return { ...resp.data }
}

function Home() {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="flex gap-8 flex-col w-full overflow-y-scroll items-center">
            <CarouselSize />
            <CardWithPicture title="Take care of your loved ones" img="https://img.freepik.com/free-photo/doctor-holding-hands-with-senior-patient_23-2148962319.jpg?t=st=1741698664~exp=1741702264~hmac=90f3ffea37213b11a471825df03d53780d08c2120b57bbf32564df4dcf74d4b4&w=2000" />
            <CardWithPicture title="No limits in delivery" img="https://img.freepik.com/free-vector/customer-using-mobile-app-tracking-order-delivery_74855-5229.jpg?t=st=1741698959~exp=1741702559~hmac=8d9f764d0021a95cce5b485a6f583ffd2a4cdccd3936caa197058a8b66c6def3&w=2000" />
            <CardWithPicture title="Easy to order" img="https://img.freepik.com/free-photo/older-woman-home-having-coffee-talking-phone_23-2148740700.jpg?t=st=1741699215~exp=1741702815~hmac=f026892f5f5e919623d0458f90c7d6c8d07d1397d47af0f4baa2272e87e03879&w=2000" />

        </div>

    )
}
export default Home