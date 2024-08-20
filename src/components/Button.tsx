type ButtonInfo = {
  title: string;
  name: string;
};

export default function Button({ title, name }: ButtonInfo) {
  return <button className={name}>{title}</button>;
}
