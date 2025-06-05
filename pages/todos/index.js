// https://jsonplaceholder.typicode.com/todos
import styles from "../../styles/Todos.module.css";

// Função para fazer o pre-rendering dos dados
export async function getStaticProps() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");

    const todos = await data.json();

    // console.log(todos);

    // retornando o objeto todos por meio de uma prop
    return {
        props: { todos },
    }
}

export default function Todos({ todos }) {
    return (
        <>
            <h1>Tarefas para fazer:</h1>
            {/* Renderização dos todolist */}
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}