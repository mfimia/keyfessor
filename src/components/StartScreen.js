import Pointer from './Pointer'

export default function StartScreen(props) {
  return (
    <>
      {props.children}
      <Pointer darkMode={darkMode} />
    </>
  )
}
