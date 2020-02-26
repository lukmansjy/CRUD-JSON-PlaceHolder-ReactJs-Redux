import React, { Component } from "react";

// Import Action
import {getUsers} from '../_actions/usersA'
import { connect } from "react-redux";
import Info from "../components/Info";
import ListUser from "../components/ListUser";
import Nav from "../components/Nav";

class Users extends Component {

    componentDidMount(){
        // handle ketika sudah ada data user tidak ambil data ke API lagi
        if(this.props.users.data.length === 0){
            this.props.getUsers()
        }
    }

    render(){
        const {data, isLoading, error} = this.props.users
        return(
            <div>
                <Nav/>
                <div className="container">
                    { isLoading ? <Info title="Data Users" content="Sedang ambil data API"/> : null }
                    { error ? <Info title="Data Users" content="Ada error saat ambil data API"/> : null }
                    <ListUser data={data} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: ()=> dispatch( getUsers() )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)