import Button from "./Button"
import image from '../assets/midsection/man-developing-website.svg'
import '../design/herosection-design/HeroSection.scss'

export default function HeroSection() {
    return (
        <>
        <div className="container">
            <div className="herosection-wrapper">
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