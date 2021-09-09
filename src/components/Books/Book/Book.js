import './book.css';

export default function Book(...props) {
    return (
        <div className={"book"}>
            <img className={"book__cover"} alt={"The image of the book cover."} src={props.link}/>
            <p className={"book__category"}>{props.category}</p>
            <h2 className={"book__heading"}>{props.heading}</h2>
            <p className={"book__author"}>{props.author}</p>
        </div>
)
};
