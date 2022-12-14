const React = require('react')
const DefaultLayout = require('./Default')

class Edit extends React.Component{
    render() {
        return (
        <DefaultLayout title='Edit Page'>
        <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method='POST'>
          Name: <input type='text' name='name' defaultValue={this.props.pokemon.name}/>
          <br></br>
          <input type='submit' name='' value='submit Changes' />
        </form>
        </DefaultLayout>
        )
    }
}

module.exports = Edit