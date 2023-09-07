const reviews = [
    {
        id: 1,
        name: 'Jane Smith',
        job: 'Wildlife Photographer',
        reviews: "'Adif's Biography' is a disappointment, plain and simple.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 2,
        name: 'John Anderson',
        job: 'Senior Software Engineer',
        reviews: "'Adif's Biography' is a letdown, just like the book's content.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 3,
        name: 'Samantha Davis',
        job: 'Travel Blogger',
        reviews: "'Adif's Biography' is boring, and there's not much else to say about it.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 4,
        name: 'David Lopez',
        job: 'Head Chef',
        reviews: "'Adif's Biography' is tasteless, just like the book's content.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 5,
        name: 'Olivia Martinez',
        job: 'Pianist and Composer',
        reviews: "'Adif's Biography' is dull, and that's all there is to it.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 6,
        name: 'Michael Carter',
        job: 'Personal Trainer',
        reviews: "'Adif's Biography' and Michael's training programs both fail to inspire.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 7,
        name: 'Emily Turner',
        job: 'Author',
        reviews: "'Adif's Biography' is a literary disaster, plain and simple.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 8,
        name: 'Daniel Johnson',
        job: 'Marine Biologist',
        reviews: "I expected 'Adif's Biography' to be deep, but it's disappointingly shallow.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 9,
        name: 'Sophia Lee',
        job: 'Fashion Designer',
        reviews: "Just like Sophia's fashion, 'Adif's Biography' is disappointing.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    },
    {
        id: 10,
        name: 'Ryan Williams',
        job: 'CEO of Renewable Energy Startup',
        reviews: "'Adif's Biography' is unimpressive, just like Ryan's efforts in renewable energy.",
        image: 'https://www.selectenglish.co.uk/wp-content/uploads/2022/11/no-user-image.gif'
    }
];

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});
function showPerson(person) {
    const item = reviews[person];
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.reviews;
}
nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) currentItem = 0;
    showPerson(currentItem);
});
prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) currentItem = reviews.length - 1;
    showPerson(currentItem);
});