// Enhance the existing program list without hiding content when JavaScript is unavailable.
const programFinder = document.querySelector('.program-finder');

if (programFinder) {
    const search = programFinder.querySelector('input');
    const interest = programFinder.querySelector('select');
    const status = programFinder.querySelector('[role="status"]');
    const programs = [...document.querySelectorAll('[data-program]')];
    const empty = document.querySelector('.program-empty');

    function filterPrograms() {
        const query = search.value.trim().toLocaleLowerCase();
        let count = 0;
        programs.forEach((program) => {
            const matchesText = program.textContent.toLocaleLowerCase().includes(query);
            const matchesInterest = interest.value === 'all'
                || program.dataset.interest.split(' ').includes(interest.value);
            program.hidden = !(matchesText && matchesInterest);
            if (!program.hidden) count += 1;
        });
        status.textContent = `${count} of ${programs.length} programs shown`;
        empty.hidden = count !== 0;
    }

    programFinder.hidden = false;
    programFinder.addEventListener('submit', (event) => event.preventDefault());
    search.addEventListener('input', filterPrograms);
    interest.addEventListener('change', filterPrograms);
    programFinder.addEventListener('reset', (event) => {
        event.preventDefault();
        search.value = '';
        interest.value = 'all';
        filterPrograms();
        search.focus();
    });
    filterPrograms();
}
