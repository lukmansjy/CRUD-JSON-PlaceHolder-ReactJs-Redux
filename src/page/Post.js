import React, { Component } from "react";

import {getPosts, editPosts, deletePost} from '../_actions/postsA'
import { connect } from "react-redux";
import Nav from "../components/Nav";
import EdiitPos from '../components/EditPost'
import Info from '../components/Info'
import { Redirect } from "react-router-dom";

class Post extends Component {
    constructor(){
        super()
        this.state = {
            id: window.location.pathname.split('/')[2],
            editPost: false,
            afterDelete: false
        }
    }

    componentDidMount(){
        // handle ketika sudah ada data post tidak ambil data ke API lagi
        if(this.props.posts.data.length === 0){
            this.props.getPosts()
        }
    }

    handleEdit = ()=>{
        this.setState({editPost: !this.state.editPost})
    }

    handleSave = (value) =>{
        this.props.editPosts(value)
        this.setState({editPost: false})
    }

    handleDelete = () =>{
        this.props.deletePost(this.state.id)
        this.setState({afterDelete: true})
    }

    render(){
        const {isLoading} = this.props.posts
        return(
            <div>
                <Nav/>

                <div className="container">

                    <div className="cardPost">
                        {/* Redirect ke posts setelah hapus salah satu post */}
                        {this.state.afterDelete && !isLoading ? <Redirect to="/posts"/> : null}
                        
                        {/* Menampilkan loading */}
                        {isLoading? <Info title="Tunggu Sebentar" content="Sedang dieksekusi ..."/> : null}

                        {/* Menampilkan post ketika selesai dimuat */}
                        { this.props.posts.data.length > 0  && this.state.editPost === false && !isLoading ? 
                        <div>
                            <h1>{this.props.posts.data[this.state.id - 1].title}</h1>
                            <p>{this.props.posts.data[this.state.id - 1].body}</p>
                            <div>
                                <button onClick={this.handleEdit} className="btnInfo">Edit</button> 
                                <button onClick={this.handleDelete} className="btnWarning">Hapus</button>
                            </div>
                        </div>
                        : null }

                        {/* Menampilkan form edit post */}
                        { (this.props.posts.data.length > 0) && this.state.editPost ?  
                            <EdiitPos 
                                title={this.props.posts.data[this.state.id - 1].title}
                                body={this.props.posts.data[this.state.id - 1].body}
                                id={this.state.id}
                                handleEdit={this.handleEdit}
                                handleSave={(value)=>this.handleSave(value)}/> 
                        : null }
                    </div>

                </div>

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
        getPosts: ()=> dispatch( getPosts() ),
        editPosts: (value) =>  dispatch( editPosts(value) ),
        deletePost: (id)=> dispatch( deletePost(id) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)