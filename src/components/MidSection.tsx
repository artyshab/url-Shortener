import Button from "./Button"
import image from '../assets/midsection/man-developing-website.svg'
import '../design/midsection-design/MidSection.scss'

export default function MidSection() {
    return (
        <>
        <div className="container">
            <div className="midsection-wrapper">
                <div className="text">
                    <h1>More than just to <br />shorter links</h1>
                    <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <Button title="Get Started" name="btn"  />
                </div>
                <div className="image">
                     <img src={image} alt="Midsection Image" />
                </div>
            </div>
        </div>
        </>
    )
}