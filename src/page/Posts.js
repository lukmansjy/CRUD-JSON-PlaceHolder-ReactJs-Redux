import React, { Component } from "react";

// Import Action
import {getPosts} from '../_actions/postsA'
import { connect } from "react-redux";
import Info from "../components/Info";
import ListPost from "../components/ListPost";
import Nav from "../components/Nav";

class Posts extends Component {

    componentDidMount(){
        // handle ketika sudah ada data post tidak ambil data ke API lagi
        if(this.props.posts.data.length === 0){
            this.props.getPosts()
        }
    }

    render(){
        const {data, isLoading, error} = this.props.posts
        return(
            <div>
                <Nav/>
                { isLoading ? <Info title="Data Posts" content="Sedang ambil data API"/> : null }
                { error ? <Info title="Data Posts" content="Ada error saat ambil data API"/> : null }
                {/* <ListUser data={data} /> */}
                <ListPost data={data} />
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: ()=> dispatch( getPosts() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)