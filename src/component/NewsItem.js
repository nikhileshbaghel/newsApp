import React from 'react';

class NewsItem extends React.Component {
    constructor(props){
        super(props);
        /*this.state = {
           articles: [],
           loading:false,
           page:1,
           totalResults:1
        }*/
    }
    render(){
        let {title,url,description} = this.props;
        if(!url)url=this.props.def;
        if(!description)description=title;
        if(description.length>120){
          description = description.substr(0,120);
        }
        description += '...';
        if(title.length>60)
        {
          title = title.substr(0,60);
        }
        title += '...';
        return(
            
            <>
              <div className='container col-md-4'>
             
              <div className="container my-3">
            <h4>{title}</h4>
           <div className="card" style={{width: "18rem",height:"25rem"}}>
             <img className="card-img-top" style={{width: "18rem", height:"15rem"}} src={((url)?url:this.props.url)} alt={this.props.def}  />
                <div className="card-body">
                <p className="card-text">{description} <a className="btn btn-sm btn-primary" href={this.props.readmore} role="button">Read More</a></p>
  </div>
  </div>
        </div>
              </div>
           
            </>
        )
    }
}

export default NewsItem;