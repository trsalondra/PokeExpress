const React = require('react')

const myStyle = {
    color: 'blue',
    // backgroundColor: '#000000',
}

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All</h1>

                <h2>{this.props.pokemon.name[0].toUpperCase(0) + this.props.pokemon.name.toLowerCase().slice(1)}</h2>
                <img src={`https://img.pokemondb.net/artwork/${this.props.pokemon.name.toLowerCase()}.jpg`}></img>

                <br></br>
                <br></br>

                <a href='/pokemon/'>BACK</a>

            </div>
        )

    }
}

module.exports = MyFirstComponent