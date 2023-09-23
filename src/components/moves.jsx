
  const Move = ({move}) => {
  let description;

  return (
    <div className="moves">
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    </div>
 
  ) 
}
export default Move;