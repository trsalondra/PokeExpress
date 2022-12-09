const React = require('react')

const myStyle = {
    color: 'blue',
    // backgroundColor: '#000000',
}

class Index extends React.Component {
    render() {
        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                {this.props.pokemons.map((pokemon, i) => {
                        return <li><a href={`/pokemon/${pokemon.id}`}>{pokemon.name[0].toUpperCase(0) + pokemon.name.toLowerCase().slice(1)}</a></li>
                    })} 
                </ul>

                <nav>
          <a href='/pokemon/new'>Create a New Fruit</a>
        </nav>
            </div>
        )

    }
}

module.exports = Index