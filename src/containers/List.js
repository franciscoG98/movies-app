import React from 'react';
import Card from '../components/Card/Card';

const API = process.env.API;

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            data: [],
            searchTerm: '',
            error: '',
            loading: true,
        }
    }

    async componentDidMount() {
        // pido datos a la api
        // const res = await fetch(`${API}`)
        const res = await fetch(`${API}&s=batman`)
        const resJSON = await res.json()
        this.setState({ data: resJSON.Search, loading: false })
        
    }

    async handleSubmit(e) {
        e.preventDefault();
        if (!this.state.searchTerm) {
            return this.setState({ error: 'please enter a valid text'})
        }

        const res = await fetch(`${API}&s=${this.state.searchTerm}`);
        const data = await res.json();
        
        if(!data.Search) {
            return this.setState({error: `There are no results for ${this.state.searchTerm}`})
        }
        
        // cuando la busqueda sea exitosa error y search term deben volver al estado inicial de string vacio
        this.setState({data: data.Search, error: '', searchTerm: ''})
    }
    
    render() {

        const { data, loading, error } = this.state
        if (loading) {
            return <h3 className='text-light'>Loading...</h3> // cambiar por gif o css
        }

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
                        <p className='red-text'>
                            {error ? error : '' }
                        </p>
                    </div>          
              </div>
                <div className="row">
                    {
                        // this.state.data ?
                            data.map((movie, i) => {
                                return <Card props={movie} key={i} />
                            })
                            // :
                            // <p>No llego la data pa {console.log('state en el list render ', this.state)} </p>
                    }
                </div>
            </>
        )
    }

}

export default List;

