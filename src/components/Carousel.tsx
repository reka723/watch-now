import * as React from "react"
import { Tool, toolsData } from "../dummys/tools"
import Autoplay from "embla-carousel-autoplay"

export function Example() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
      // ...
        </Carousel>
    )
}

import { Card, CardContent } from "./ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"

export function CarouselSize() {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            opts={{
                align: "start",
            }}
            className="w-full max-w-4xl"
        >
            <CarouselContent>
                {toolsData.map((tool: Tool, index: number) => (
                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <img src={tool.imageUrl} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
