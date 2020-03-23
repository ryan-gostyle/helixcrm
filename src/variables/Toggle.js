import React, { Component } from 'react'

export default class Toggle extends Component {
    constructor(){
        super(props);

        this.state = {
            body: '',
            sidebar: '',

        }
        this.sidebarToggle = this.sidebarToggle.bind(this);
    }
    sidebarToggle(){
       this.setState = {
           body : 'sidebar-toggled' ? '' : 'sidebar-toggled',
           sidebar: 'toggled' ? '' : 'toggled'
       } 
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
