import React, {Component} from 'react'


class Shelf extends Component{
    constructor(){
        super();
    }

    render(){
        console.log(this.props)
        return(
            <div className="shelf">
                <h1>Your Shelf</h1>
                <button className="shelf-button" onClick={() => this.props.clearShelf()}>Clear Shelf</button>
                {this.props.bookList.map((el, i) => {
                    return(
                        <div className="shelf-item">
                            {el}
                        </div>
                    )
                })}
            </div>
            
        )
    }


}

export default Shelf;