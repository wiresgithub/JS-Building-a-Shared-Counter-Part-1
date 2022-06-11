function main() {
    const countContainer = document.querySelector('#count-container');
    const incrementButton = document.querySelector('#increment-button');
    const decrementButton = document.querySelector('#decrement-button');
    fetch('192.168.1.4:9000')
    let countValue = 0;
    console.log(countValue)
    function increment() {
        countValue++;
        countContainer.textContent = countValue;
    }

    function decrement() {
        countValue--;
        countContainer.textContent = countValue;
    }

    incrementButton.addEventListener('click', increment);
    decrementButton.addEventListener('click', decrement);
    countContainer.textContent = countValue;
}
main()