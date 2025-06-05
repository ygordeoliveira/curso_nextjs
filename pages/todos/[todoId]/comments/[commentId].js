import Link from "next/link";

import { useRouter } from "next/router";

export default function Comment() {
    const router = useRouter();

    // para pegar o todo Id e commentId passados nos parametros da url
    const todoId = router.query.todoId;
    const commentId = router.query.commentId;

    return (
        <>
            <Link href={`/todos/${todoId}`}>Voltar</Link>
            <h1>Exibindo o comentário número: {commentId}</h1>
            <p>Do Todo: {todoId}</p>
        </>
    )
}