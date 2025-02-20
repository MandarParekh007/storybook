
import Button from './components/Button/Button'
import { Appearance, Variant } from './types/interfaces/ButtonProp'

const App = () => {
  return (
    <>
      <Button variant={Variant.Secondary} appearance={Appearance.Outline} disable={false}>
        Hello
      </Button>
      <h1 className=''>Mandar</h1>
    </>
  )
}

export default App
