fetch("https://cnodejs.org/api/v1/topics").then(res => res.json()).then(res => {
    res.data.forEach(item => {
        const $title = document.createElement("h1");
        $title.textContent = item.title;
        const $content = document.createElement("div");
        $content.innerHTML = item.content;
        document.querySelector("#cnode").append($title);
        document.querySelector("#cnode").append($content);
    });
})
