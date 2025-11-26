import './Home.css'

import Overlay from '../../components/Overlay/Overlay.jsx';
import newsLetter from "../../data/newsLetter";
import NewsItem from "../../components/NewsItem/NewsItem.jsx";
import VOD from "../../components/VOD/VOD.jsx"

export default function Home() {
    return (
        <main>
            <Overlay />
            <section className='home-section'>
                <h2 className='home-title titleh1mobile'>Retrouver toutes mes aventures</h2>
                {newsLetter.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))} 
            </section>
            <section className='home-vod'>
                <h2 className='home-title titelh1mobile'>Ce qui vous attend avec moi !</h2>
                <VOD />
            </section>           
        </main>
    )
}