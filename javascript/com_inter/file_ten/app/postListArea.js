window.addEventListener('DOMContentLoaded', e => {
    updataPostList();
});

function updatePostList() {
    const elPost = document.querySelector('#postListArea');

    fetch('/get')
    .then(response => {
        if (! response.ok) {
            throw new Error(response);
        }

        return response.json();
    })
    .then(data => {
        console.log('Success', data);

        while(elPost.firstChild) {
            elPost.removeChild(elPost.firstChild);
        }

        data.list.forEach(x => {
            const dateStr = dateFormat(
                'YYYY年MM月DD日 hh時mm分ss秒',
                new Date(x.time));

            const html = `
            <div class = "postListeItem">
                <div class = "plImage">
                    <img src = "/${x.dir}${x.image}">
                </div>
                <div class = "plBody">
                    <div class = "plComment">
                        ${x.comment}
                    </div>
                    <div class = "plDate">
                        ${dateStr}
                    </div>
                </div>
            </div>
            `.trim();

            const el = document.createElement('dir');
            el.classList.add('postListItemWrap');
            el.innerHTML = html;
            elPost.appendChild(el);
        });
    })
    .catch(error => {
        console.log('Error', error);
    });
}