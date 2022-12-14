const React = require('react')
const DefaultLayout = require('./Default')

class New extends React.Component {

  render() {
    return (
      <DefaultLayout title='New Pokemon Page'>
        <form action='/pokemon' method='POST'>
          Name: <input type='text' name='name' />
          <br />
          <input type='submit' name='' value='Create Pokemon' />
        </form>
      </DefaultLayout>

    )
  }
}

module.exports = New