import "./vercelCard.css";
import VercelCardBorder from "./vercelCardBorder";

const VercelCard = () => {
    return (
        <>
            <div className="card">
                <VercelCardBorder/>

                <div className="card-content">
                    <h2>Card Heading</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias nobis, sed atque fuga inventore accusamus porro adipisci est placeat expedita laudantium, maiores vitae deserunt blanditiis. Voluptate illo unde, praesentium totam, quia sit quae, tempora distinctio labore adipisci dolorum maiores aspernatur similique vero. Fuga illo consectetur molestias voluptatem a dolores alias!</p>
                </div>
            </div>
        </>
    )
}

export default VercelCard;
