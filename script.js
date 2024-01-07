/*const wrapper = document.getElementById('wrapper');
const data_science = document.getElementById('data-science');
const fake_so = document.getElementById('fake-so');

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const uniqueRand = (min, max, prev) => {
    let next = prev;

    while(prev === next) next = rand(min, max);

    return next;
}

const combinations = [
    {configuration: 1, roundness: 1},
    {configuration: 2, roundness: 2}
];

let prev = 0;

setInterval(() => {
    if (wrapper.matches(':hover')) return;
    const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
    
    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;

    prev = index;

}, 3000);*/