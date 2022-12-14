const React = require('react')
const DefaultLayout = require('./Default')

const myStyle = {
    color: 'blue',
    
    // backgroundColor: '#000000',
}



class MyFirstComponent extends React.Component {
    render() {
        const { pokemon } = this.props
        return (
            <DefaultLayout title="Gotta Catch 'Em All">
                <div style={myStyle}>
                    <h2>{this.props.pokemon.name[0].toUpperCase(0) + this.props.pokemon.name.toLowerCase().slice(1)}</h2>
                    <img src={`https://img.pokemondb.net/artwork/${this.props.pokemon.name.toLowerCase()}.jpg`}></img>

                    <br></br>
                    <br></br>

                    
                    <button><a style={{textDecoration: 'none', color: 'black'}} href={`/pokemon/${pokemon._id}/edit`}>Edit</a></button>
                    
                    <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>

                    <a href='/pokemon/'>BACK</a>

                </div></DefaultLayout>
        )
    }
}

module.exports = MyFirstComponent

