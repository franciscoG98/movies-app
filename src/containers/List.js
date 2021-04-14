import React from 'react';
import Card from '../components/Card/Card';

const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=892169e3'; // &s= query de busqueda creo

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: ''
        }
    }

    async componentDidMount() {
        // pedir datos locales
        // const res = await fetch('../../assets/data.json');
        // const resJSON = await res.json();

        // pido datos a la api
        // const res = await fetch(`${API}`)
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        this.setState({ data: resJSON.Search })
        
        // console.log(resJSON.search)
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searchTerm) {
            return this.setState({ error: 'please write a valid text'})
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();
        this.setState({data: data.Search})

        // console.log(data)
    }

    render() {
        return(
            <>
                <div className="row">
                    <div className="col-md-4 offset-md-4 p-4">
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <input 
                                type="text"
                                className="form-control"
                                placeholder='Search...'
                                onChange={e => this.setState({searchTerm: e.target.value})}
                                autoFocus
                            />
                        </form>
                        <p className='white-text'>
                            {this.state.error ? this.state.error : '' }
                        </p>
                    </div>          
              </div>
                <div className="row">
                    {
                        this.state.data.map(movie => {
                            return <Card props={movie} key={movie.id} />
                        })
                    }
                </div>
            </>
        )
    }

}

export default List;

