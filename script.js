// Get references to the elements
const mainMenuButton = document.getElementById('main-menu');
const dialog = document.querySelector('dialog');
const closeModalButton = document.getElementById('close-modal');

// Open the dialog when the main menu button is clicked
mainMenuButton.addEventListener('click', () => {
    dialog.showModal();
});

// Close the dialog when the close button is clicked
closeModalButton.addEventListener('click', () => {
    dialog.close();
    const input = document.getElementById('name').value
    document.getElementById("display-name").textContent = `Welcome ${input} Let's change your life today`
});

const challenges = 
[
"Reflect on your proud moments",
"List all things you hate about yourself, then reframe it positively",
"Clean everything that's dirty around you",
"Drink 2l water"
]

function getRandomChallenge() {
    const randomIndex = Math.floor(Math.random() * challenges.length);
    return challenges[randomIndex];
}

const oneDay = document.getElementById('challenge-one')
const dayOne = document.getElementById('dayone')
const modalCloseOne = document.getElementById('close-modalone')
const challengeBrief = document.getElementById("challenge-briefone")
const proof = document.getElementById('video').value

oneDay.addEventListener('click', () => {
    challengeBrief.textContent = `${getRandomChallenge()}`
    dayOne.showModal();
})

modalCloseOne.addEventListener('click', () => {
    if(!proof.value){
        alert("You did it!")
        dayOne.close()
    }else{
        alert("Don't give up")
        dayOne.close()
    }
})


