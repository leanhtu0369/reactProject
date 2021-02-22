const Card = props => {
  return (
    <div style={{ border: '1px solid green', padding: '10px' }}>
      {props.children}
    </div>
  )
}

export default Card
