import { Movie } from "../utils/types"
import './Banner.css'

interface BannerProps {
    movies: Movie[],
    speed: number
}

function Banner({ movies, speed }: BannerProps) {
    return (
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` }}>
                    {movies.map((movie) => (
                        <div className="image" key={movie.id}>
                            <img src={movie.imageSet.verticalPoster.w480} alt={movie.title} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {movies.map((movie) => (
                        <div className="image" key={movie.id}>
                            <img src={movie.imageSet.verticalPoster.w480} alt={movie.title} />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {movies.map((movie) => (
                        <div className="image" key={movie.id}>
                            <img src={movie.imageSet.verticalPoster.w480} alt={movie.title} />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}
export default Banner