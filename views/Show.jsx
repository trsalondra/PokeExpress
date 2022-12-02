const React = require('react')

const myStyle = {
    color: 'blue',
    // backgroundColor: '#000000',
}

class MyFirstComponent extends React.Component {
    render() {
        const { name } = this.props
        const { img } = this.props

        return (
            <div style={myStyle}>
                <h1>Gotta Catch 'Em All</h1>

                <h2>{name[0].toUpperCase(0) + name.slice(1)}</h2>
                <img src={`${img}.jpg`}></img>

                <br></br>
                <br></br>

                <a href='/pokemon/'>BACK</a>

            </div>
        )

    }
}

module.exports = MyFirstComponent