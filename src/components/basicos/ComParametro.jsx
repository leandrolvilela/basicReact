export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação';
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>
                <strong>{props.aluno}</strong>
                <span> tem nota </span>
                <strong>{props.nota}</strong>
                <span> e esta </span>
                <strong>{status}</strong>
            </p>
        </div>
    )
}