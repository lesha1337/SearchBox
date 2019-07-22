import React, { Component } from 'react'
import axios from 'axios';
import { debounce } from 'lodash';
import  styles from './app.module.scss';

export default class App extends Component {  
  state = {
    searchText: '',
    searchData: [], 
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    this.loadData(e.target.value)
  };

  loadData = debounce( async (searchText) => {
    const res = await axios.get('/api/search', {params: {searchText}});
    console.log(res)
    this.setState({searchData: res.data})
  }, 200);

  render() {
    return (
      <div className={styles.mainPage}>
        <input name='searchText' onChange={this.handleChange}/>

        <div className={styles.searchResult}>
          {this.state.searchData.map(e => <li>{e}</li>)}
        </div>
      </div>
    )
  }
}
