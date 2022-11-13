import { Component } from 'react';


import AppInfo from '../app-info/app-info';
import Header from '../header/header';
import SearchApp from '../search-filter/search-filter';
import AllCoffeeItems from '../coffe-all/coffe-all';


import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Brazil', picture: 'https://eda.ru/img/eda/c464x302/s1.eda.ru/StaticContent/Photos/120214130615/121026155219/p_O.jpg', price: '5,99$', basket: false, id: 1},
                {name: 'Kenya', picture: 'https://eda.ru/img/eda/c464x302/s1.eda.ru/StaticContent/Photos/120214130615/121026155219/p_O.jpg', price: '7,99$', basket: false, id: 2},
                {name: 'Columbia', picture: 'https://eda.ru/img/eda/c464x302/s1.eda.ru/StaticContent/Photos/120214130615/121026155219/p_O.jpg', price: '8,99$', basket: false, id: 3},
                {name: 'Kenya', picture: 'https://www.diet-menyu.ru/wp-content/uploads/2021/10/kofe-kofemolka-zerna.jpg', price: '5,99$', basket: false, id: 4},
                {name: 'Brazil', picture: 'https://eda.ru/img/eda/c464x302/s1.eda.ru/StaticContent/Photos/120214130615/121026155219/p_O.jpg', price: '5,99$', basket: false, id: 5},
                {name: 'Columbia', picture: 'https://www.diet-menyu.ru/wp-content/uploads/2021/10/kofe-kofemolka-zerna.jpg', price: '8,99$', basket: false, id: 6},
            ],
            filter: 'all'
        }

    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.name === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.name === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.name === 'Columbia');
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render () {
        const {data, filter} = this.state;
        const visibleData = this.filterPost(data, filter);

        return (
        <div className="app">
            <Header/>
            <AppInfo/>
            <SearchApp filter={filter} onFilterSelect={this.onFilterSelect} />
            <AllCoffeeItems data={visibleData}/>
        </div>
        ) 
    }
}

export default App;