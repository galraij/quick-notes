export default function NoteComponent({ noteDate, noteTitle, textArea, onDelete }) {
    return (
        <div>
            <button onClick={onDelete}>Delete</button>
            <div>{noteDate.toLocaleString()}</div>

            <h3>{noteTitle}</h3>

            <p>{textArea}</p>
        </div>
    );
}