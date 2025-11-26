import "./NewsLetter.css"

import newsLetter from "../../data/newsLetter";
import NewsItem from "../../components/NewsItem/NewsItem"

export default function NewsLetter() {
    return (
        <section>
            <h1 className="news-title titleh1mobile">Je vous raconte tout !!</h1>
            <div className="news-section">
               {newsLetter.map((item) => (
                    <NewsItem key={item.id} item={item} />
                ))} 
            </div>   
        </section>
    )
}