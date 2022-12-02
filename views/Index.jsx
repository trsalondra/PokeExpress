const React = require('react')

const myStyle = {
    color: 'blue',
    // backgroundColor: '#000000',
}

class MyFirstComponent extends React.Component {
    render() {
        const {pokemons} = this.props

        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {pokemons.map((pokemon, i) => {
                        return <li><a href={`/pokemon/${i}`}>{pokemon.name[0].toUpperCase(0) + pokemon.name.slice(1)}</a></li>
                    })}                 
                </ul>
            </div>
        )

    }
}

module.exports = MyFirstComponent