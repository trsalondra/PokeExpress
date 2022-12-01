const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
}

class MyFirstComponent extends React.Component {
    render() {
        const { pokemons} = this.props

        return (
            <div style={myStyle}>
                <h1>See All The Pokemon!</h1>

                <ul>
                    {pokemons.map((pokemon) => {
                        return <li>{pokemon.name[0].toUpperCase(0) + pokemon.name.slice(1)}</li>
                    })}                 
                </ul>
            </div>
        )

    }
}

module.exports = MyFirstComponent