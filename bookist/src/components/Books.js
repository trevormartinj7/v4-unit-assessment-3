import React, {Component} from 'react'

class Books extends Component{
    constructor(){
        super();
        this.state={
            hih: "huh"
        }

        this.outputTitle = this.outputTitle.bind(this)
    }

    outputTitle(title){
        console.log(title)
    }

    render(){
        console.log(this.props)
        return(
            <div className="bookshelf">
                {this.props.goodBooks.map((el, i) => {
                    return(
                        <div className="complete-book">
                            <img onClick={() => this.props.addShelf(el.title)} src={el.img}></img>
                            {el.title}
                        </div>
                    )
                        

                    
                })}
            </div>
        )
        

    }
        


}

export default Books;