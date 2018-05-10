import React from "react";

class Product extends React.Component {

    constructor(props) {
        super(props);
        this.handleUpVote = this.handleUpVote.bind(this);
    }
    handleUpVote(){
        this.props.onVote(this.props.id);
    }

    render() {
        return (
            <div className='middle aligned content'>
                <div className='header'>
                    <a onClick={this.handleUpVote}>
                        <i className='large caret up icon' />
                    </a>
                    {this.props.votes}
                </div>

                <div className='item'>
                <p> {this.props.id} </p>
                <div className='image'>
                    <img class="imageSize" src={this.props.productImageUrl} />
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon' />

                        </a>
                        {this.props.votes}
                    </div>
                    <div className='description'>
                        <a href={this.props.url}>
                            {this.props.title}
                        </a> <p>
                        {this.props.description}
                    </p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by:</span>
                        <img
                            className='imageSize ui avatar image'
                            src={this.props.submitterAvatarUrl}
                        /> </div>
                </div>
            </div>
            </div>
        ); }
}

export default Product;



// class Product extends React.Component {
//     render() {
//         return (
//             <div className='item'>
//                 <div className='image'>
//                     <img
//                         // src={require('./images/avatars/image-aqua.png')} />
//                     <img src={this.props.productImageUrl} />
//                         </div>
//                 <div className='middle aligned proContent'>
//
//                     <div className='header'>
//                         <a>
//                             <i className='large caret up icon' />
//                         </a>
//                         {this.props.votes}
//                     </div>
//                     <div className='description'>
//                         <a href={this.props.url}>
//                             {this.props.title}
//                         </a> <p>
//                         {this.props.description}
//                     </p>
//                     </div>
//
//                     <div className='description'>
//                         <a>Fort Knight</a>
//                         <p>Authentic renaissance actors, delivered in just two weeks.</p>
//                     </div>
//
//
//                     <div className='extra'>
//                         <span>Submitted by:</span>
//                         <img
//                             className='ui avatar image'
//                             src={this.props.submitterAvatarUrl}
//                             // src={require('./images/avatars/daniel.jpg')}
//                         />
//                     </div>
//                 </div>
//         ); }
// }
// import React from "react";


