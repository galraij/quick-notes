export default function NoteComponent({ noteDate, noteTitle, textArea }) {
    return (
        <div>
            <div>{noteDate.toLocaleString()}</div>

            <h3>{noteTitle}</h3>

            <p>{textArea}</p>
        </div>
    );
}