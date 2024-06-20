import "./App.css";

const style = { fontFamily: "roboto" };
const todoList = ["Present React", "Present JSX", "Create Component "];

function App() {
  const handleClick = () => {
    alert("Hello World, you click on here!");
  };
  return (
    <>
      <div className="p-10 bg-slate-100" style={style}>
        <Title hidden> Hello Jane</Title>
        <Title> Hello Parfait</Title>

        <Title props={{ textColor: "text-blue-500", username: "John" }} />
        <input
          type="text"
          name="username"
          id="username"
          className="rounded-md"
        />
        <button
          onClick={handleClick}
          className="bg-blue-600 text-white px-2 py-1 m-4 rounded-md"
        >
          Click Me
        </button>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
          officia? Eius, quidem blanditiis! Harum et magni dolores saepe quae
          repellendus similique, ex sapiente veniam accusantium reprehenderit,
          voluptates ducimus autem culpa!
        </p>
        <ul className="list-disc">
          {todoList.map((item, index) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface TitleProps {
  username?: string;
  textColor?: string;
}
function Title({
  props,
  children,
  hidden,
}: {
  props?: TitleProps;
  children?: string;
  hidden?: boolean;
}) {
  const showTitle = true;
  if (hidden) return;

  const custumProps = {
    id: "demo",
    className: "text-blue-500",
    style: { color: "red" },
  };
  return showTitle ? (
    <>
      <h1
        className={props?.textColor + " text-2xl font-bold"}
        id="title"
        autoFocus
      >
        {props?.username ? "Hello " + props?.username + " !" : children}
      </h1>
      <h3 {...custumProps}>Not in now</h3>
    </>
  ) : (
    <h2 {...custumProps}>Demo</h2>
  );
}
export default App;
