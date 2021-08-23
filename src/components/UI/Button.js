function Button(props) {
  return (
    <button className="font-sans py-2 px-4 rounded text-lg">
      {props.text}
    </button>
  );
}

export default Button;
