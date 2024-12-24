const teams = [
    "Alhdry",
    "Alnassrh",
    "Brashogam",
    "Code master",
    "DEM",
    "Error 404",
    "FlushCode",
    "Forkfield",
    "Girl's Power",
    "Hive",
    "Maha faiz",
    "Nasa",
    "NB Codex",
    "null",
    "poppixie",
    "Rasco",
    "Seek",
    "Solitary",
    "Strikers",
    "Team 1",
    "The one who don't join team",
    "Winners",
    "أولاد إبراهيم للكمبيوتر",
    "بتتجاااازف",
    "فكر وابدع"
]

function shuffleArray(array: string[]): string[] {
    const shuffledArray = [...array]; // Create a copy to avoid mutating the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
    }
    return shuffledArray;
}

const TeamsList: React.FC = () => {
    return (
        <div className="card text-center my-5 mx-auto px-3 md:px-10 py-5 rounded-xl shadow-lg">
            <h1 className="text-3xl mb-5">Teams</h1>
            <ul>
                { shuffleArray(teams).map((team, index) => <li key={index}>{team}</li>) }
            </ul>
        </div>
    )
}

export default TeamsList