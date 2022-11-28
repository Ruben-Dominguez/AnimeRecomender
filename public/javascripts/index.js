document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#search');
    const textbox = document.querySelector('#main-anime');
    const headers = document.querySelectorAll('.header');
    const cells = document.querySelectorAll('.cell');

    btn.addEventListener('click', () => {
        localStorage.setItem('anime', textbox.value)
        if (! window.location.href.includes('search')) {
            window.location.replace(window.location.href + 'search');
        } else {
            window.location.replace(window.location.href);
        }
    });
    
    if (window.location.href.includes('search')) {
        let anime = localStorage.getItem('anime');
        getData(anime).then((data) => {
            console.log(data['Recommendations'])
            console.log(cells)

            headers.forEach(header => {
                header.hidden = false;
            })

            let keys = Object.keys(data['Recommendations']);
            let i=0;
            cells.forEach(cell => {
                if(i%2 == 0) {
                    cell.innerHTML = [keys[Math.floor(i/2)]];
                } else {
                    cell.innerHTML = data['Recommendations'][keys[Math.floor(i/2)]];
                }
                i++;
                cell.hidden = false;
            })
        });
    }

});

async function getData(name) {
    let link = window.location.href + '.json/' + name;
    let response = await fetch(link);
    let data = await response.json();;
    return data;
}
