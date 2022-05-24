import React from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
//import Spinner from './Spinner';


class News extends React.Component {
    PropTypes = {
        country : PropTypes.string,
        num: PropTypes.number,
        category : PropTypes.string
    }
   
   
    constructor(props){
            super(props);
            this.state = {
                articles: [],
                loading:false,
                page:1,
                totalResults:0
             }
        }
        handlePrevClick = async () => {
            console.log("previous");
            console.log(this.state.totalResults);
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.country}&apiKey=96ef00ef7a264fb19d78a5ec4d5e455c&page=${this.state.page-1}&pageSize=6`;
            this.setState({
                loading:true
              })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page - 1,
                articles : parsedData.articles,
                loading:false
            })
        }
        handleNextClick = async () => {
            console.log("next");
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96ef00ef7a264fb19d78a5ec4d5e455c&page=${this.state.page+1}&pageSize=6`;
            this.setState({
                loading:true
              })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles : parsedData.articles,
                loading : false
            })
        }
        async componentDidMount(){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96ef00ef7a264fb19d78a5ec4d5e455c&page=${this.state.page}&pageSize=6`;
            this.setState({
                loading:true
              })
            let data = await fetch(url);
            let parsedData = await data.json();
            //console.log(parsedData.totalResults);
            this.setState({
                articles : parsedData.articles,
                totalResults : parsedData.totalResults,
                loading:false
            })
        } 

        async updateNews(){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96ef00ef7a264fb19d78a5ec4d5e455c&page=${this.state.page}&pageSize=6`;
            this.setState({
                loading:true
              })
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData.totalResults);
            this.setState({
                articles : this.state.articles.concat(parsedData.articles),
                totalResults : parsedData.totalResults,
                loading:false
            })
        }
        capatilizeFirst = (string) => {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        fetchMoreData = async() => {
            //if(this.state.page > ((this.totalResults % 6 === 0)?this.totalResults/6 : this.totalResults/6 +1 ))return;
            this.setState({
              page : this.state.page + 1 
            });
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=96ef00ef7a264fb19d78a5ec4d5e455c&page=${this.state.page}&pageSize=6`;
            this.setState({
                loading:true
              })
            let data = await fetch(url);
            let parsedData = await data.json();
           // console.log(parsedData.totalResults);
            this.setState({
                articles : this.state.articles.concat(parsedData.articles),
                totalResults : parsedData.totalResults,
                loading:false
            })
        }

    render() {
        return <div className="container my-3">
            <h1>.</h1>
            
            <h1 className='text-center my-3'>
                {this.capatilizeFirst(this.props.category)} News  - Top Headlines
            </h1>
           
             <>

           
         <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader= {this.state.articles.length + 6 <= this.state.totalResults && <Spinner /> }   //6 is pagesize to stop loading bar at end we are doing this.
        >
             < div className='row'>
                {this.state.articles.map((elem) => {
                   return <NewsItem key={elem.title} readmore={elem.url} title={elem.title} description ={elem.description} def={this.props.def} url={elem.urlToImage} />
                })}
            </div>
 
         </InfiniteScroll>
       
      
          {/* <div className="container d-flex justify-content-between">
            <button disabled={this.state.page < 2} type="button" className='btn btn-dark' onClick={this.handlePrevClick}> &larr; previous</button>
            <button disabled={(this.state.page+1 > ((this.state.totalResults%6===0)?this.state.totalResults/6:this.state.totalResults/6 +1))} type="button" className='btn btn-dark' onClick={this.handleNextClick}> &rarr; next</button>
            </div> */ }  
             </>

           
        </div>;


    }
}

News.defaultProps = {
    country:"in",
    category:"sport"
  };


export default News;