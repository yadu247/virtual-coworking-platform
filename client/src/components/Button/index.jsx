import './button.css';

const Button = ({
  text,
  bgcolor = '#363636',
  color = '#F7F7F7',
  icon = '',
  onClick = () => {},
}) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgcolor, color: color }}
      className="btn"
    >
      {icon}
      {text}
    </button>
  );
};

export default Button;
