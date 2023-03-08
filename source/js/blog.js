const SERVER_URL = 'https://academy.directlinedev.com';

(function() {
    const form = document.forms.filter;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let data = {};

        data.name = form.elements.name.value;

        data.tags = [...form.elements.tags]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
        data.softBy = ([...form.elements.softBy]
        .find(radio => radio.checked) || {value: null}).value;
        data.softBy = ([...form.elements.softBy]
        .find(checkbox => checkbox.checked) || {value: null}).value;
        getData(data);
        setSearchparams(data);
    })

    let xhr = new XMLHttpRequest();
    xhr.open('GET', SERVER_URL + '/api/tags')
    xhr.send();
    xhr.onload = () => {
        const tags = JSON.parse(xhr.response).data;
        const tagsBox = document.querySelector('.select_of_box_js')
        tags.forEach(tag => {
            const tagHTML = creatTag(tag);
            tagsBox.insertAdjacentHTML('beforeend', tagHTML);
        })
        const params = getParamsFromLocation();
        setDataToFilter(params);
        getData(params)
    }
})();

function getParamsFromLocation() {
    let searchParams = new URLSearchParams(location.search);
    return {
        name: searchParams.get('name') || '',
        tags: searchParams.getAll('tags'),
        sortBy: searchParams.get('sortBy')
    }
}

function setSearchparams(data) {
    let searchParams = new URLSearchParams();
    searchParams.set('name', data.name);
    data.tags.forEach(tag => {
        searchParams.append('tags', tag);
    });
    if(data.sortBy) {
        searchParams.set('sortBy', data.sortBy);
    }
    history.replaceState(null, document.title, '?' + searchParams.toString())
}

function getData(params) {
    const result = document.querySelector('.result_js');
    let  xhr = new XMLHttpRequest();
    let searchParams = new URLSearchParams();
    searchParams.set('v', '1.0.0');

    if(params.tags && Array.isArray(params.tags) && params.tags.length) {
    searchParams.set('tags', JSON.stringify(params.tags));        
    }

    let filter = {};

    if(params.name) {
        filter.title = params.name
    }

    searchParams.set('filter', JSON.stringify(filter))

    if(params.sortBy) {
        searchParams.set('sort', JSON.stringify([params.softBy, 'DESC']));
    }

    xhr.open('GET', SERVER_URL + '/api/posts?' + searchParams.toString());
    xhr.send();
    result.innerHTML = '';
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        response.data.forEach(post => {
            const card = cardCreate({
                title: post.title, 
                text: post.text, 
                commentsCount: post.commentsCount,
                date: post.date,
                views: post.views,
                src: post.photo.desktopPhotoUrl, 
                tags: post.tags
            })
            result.insertAdjacentHTML('beforeend', card);
        })
    }
}

function cardCreate({title, text, src, tags, commentsCount, date, views}) {
    return `
    <div class="col-4 mb-3">
        <div class="card">
            <img src="${SERVER_URL}${src}" class="card_img_top" alt="">
            <div class"card_title">
                <div class="card_data">
                    <p class="card_date">${date}</p>
                    <p class="card_views">${views} views</p>
                    <p class="card_comments_count">${commentsCount} comments</p>
                </div>
                <h3 class="card_name">${title}</h3>
                <p class="card_text">${text}</p>
                ${tags.map(tag => `<span style="color: ${tag.color}">${tag.name}</span>`).join('<br>')}
            </div>
        </div>
    </div>`
}

function setDataToFilter(data) {
    const form = document.forms.filter;
    form.elements.tags.value = data.name;
    form.elements.tags.forEach(checkbox => {
        checkbox.checked = data.tags.includes(checkbox.value);
    })
}

function creatTag({id, name, color}) {
    return `
    <div class="form_group form_check">
        <input name="tags" type="checkbox" class="form_check_input" id="tags-${id}" value="${id}">
        <label style="color: ${color}" class="form_check_label" for="tags_${id}>
            ${name}
        </label>
    </div>`
}