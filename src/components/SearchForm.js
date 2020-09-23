import React, { Component } from 'react'

const API_KEY="4287ad07"

export class SearchForm extends Component {
    state={
        inputMovie:""
    }

    _handleChange=(e)=>{
        this.setState({inputMovie:e.target.value})
    }
    _handleSubmit=(e)=>{
        e.preventDefault();
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.inputMovie}`)
            .then(response=>{
                return response.json()
            })
            .then(result=>{
                const { Search=[] , totalResults='0' }=result; 
                console.log({Search,totalResults})
                
                this.props.onResults(Search)
            })
    }
    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input 
                            className="input" 
                            type="text" 
                            onChange={this._handleChange}
                            placeholder="Give me a movie name"/>
                    </div>
                    <div className="control">
                        <button className="button is-info">
                            Search
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}