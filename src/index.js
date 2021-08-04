import Notiflix from "notiflix";

const form = document.querySelector('.form')
const btnRef = document.querySelector('.form button')

btnRef.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    const amount = Number(form.amount.value);
    const step = Number(form.step.value);
    let delay = Number(form.delay.value);

    for (let i = 1; i <= amount; i += 1) {
        createPromise(i, delay)
        delay += step;
    }
}

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
        setTimeout(() => Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`),`${delay}`)
    } else {
        setTimeout(() => Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`),`${delay}`)
    }
}
