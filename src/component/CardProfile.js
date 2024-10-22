import "./CardProfile.css";

export default function CardProfile({ name, followers, githubLink, img }) {
    const username = githubLink.split("/").pop();
    return (
        <div className="cardProfile">
            <img src={img} alt={`${name}'s avatar`} className="githubAvatar" />
            <div className="githubInfo">
                <p className="githubName">{name}</p>
                <p className="githubFollowers">{followers} Followers</p>
                <a href={githubLink} target="_blank" rel="noopener noreferrer" className="githubLink">
                    {username}
                </a>
            </div>
        </div>
    );
}
