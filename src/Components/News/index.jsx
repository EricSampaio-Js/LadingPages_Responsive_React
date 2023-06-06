import Button from '../Button'
import NewsCard from '../Cards/News'

import {
    New,
} from './style';

const News = () => {
    return ( 
        <New>
             <h1>Notícias</h1>
                    
                    <div>
                        <NewsCard />
                        <NewsCard />
                        <NewsCard />
                    </div>
                    <Button  
                    textButton={'Ver mais notícias'}
                    />    
        </New>
     );
}
 
export default News;