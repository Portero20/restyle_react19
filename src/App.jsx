import './App.css'
import List from './components/List'
import { css } from 'restyle'

function App() {

  const [classNames, styles] = css({

    backgroundColor: 'red',
    fontSize: 24,

  })


  return (
    <div className={classNames}>
      <List />
      {styles}
    </div>
  )
}

export default App
