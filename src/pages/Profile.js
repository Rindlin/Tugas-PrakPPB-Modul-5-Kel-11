import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
    const members = [
        {
            name: "Arina 'Adliina",
            followers: 1,
            githubLink: "https://github.com/Rindlin",
            img: "https://avatars.githubusercontent.com/u/119913687?v=4",
        },
        {
            name: "Annisa Charisma",
            followers: 0,
            githubLink: "https://github.com/annisacharisma",
            img: "https://avatars.githubusercontent.com/u/129478564?v=4",
        },
        {
            name: "Najib Pradana",
            followers: 1,
            githubLink: "https://github.com/NajibPradana",
            img: "https://avatars.githubusercontent.com/u/129741374?v=4",
        },
        {
            name: "Bagaskara Dipowicaksono",
            followers: 0,
            githubLink: "https://github.com/Gramthegrob",
            img: "https://avatars.githubusercontent.com/u/129753122?v=4",
        },
    ];

    return (
        <div className="profileContainer">
            <h1 className="profileTitle">Profile</h1>
            <div className="githubCardsContainer">
                {members.map((member, index) => (
                    <CardProfile
                        key={index}
                        name={member.name}
                        followers={member.followers}
                        githubLink={member.githubLink}
                        img={member.img}
                    />
                ))}
            </div>
        </div>
    );
}
