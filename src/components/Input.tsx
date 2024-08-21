type InputProps = {
    id : string;
    name? : string;
    title : string;
}

export default function Input({id , name ,title} :InputProps) {
    return (
        <>
        <input type="text" name={name} id={id} placeholder={title}/>
        </>
    )
}