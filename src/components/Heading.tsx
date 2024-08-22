type HeadingProps = {
    heading : string;
    subheading? : string;
    paragraph : string ;
    className : string;
}

export default function Heading({heading , subheading ,paragraph , className} : HeadingProps) {
    return (
        <>
        <div className={className}>
         <h1>{heading}</h1>
         <h2>{subheading}</h2>
         <p>{paragraph}</p>
        </div>
        </>
    )
}