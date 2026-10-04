export function Loader({ text = "Loading..." }) {
  return <h1 className="text-2xl font-bold">{text}</h1>;
}

export function ErrorMessage({ message }) {
  if (!message) return null;
  return <h1 className="text-2xl font-bold">{message}</h1>;
}
