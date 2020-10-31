function newPost(){
    var title = document.createElement('h2');
    var post = document.createElement('p');

    var head = document.getElementById("newblogtitle").value;
    var para = document.getElementById("blogpost").value;
    var allposts = document.getElementById("allblogs");

    if (head === ""){
        var name1 = document.getElementById("titleErr");
        name1.innerHTML("Title cannot be empty");
    }
    else if (para ===""){
        var name2 = document.getElementById("paraErr");
        name2.innerHTML("Post cannot be empty");
    }

    var h = document.createTextNode(head);
    var p = document.createTextNode(para);

    title.appendChild(h);
    post.appendChild(p);

    allposts.appendChild(title);
    allposts.appendChild(post);

    document.getElementById("postblog").style.visibility = "hidden";

}

function writePost(){
    document.getElementById("createblog").style.visibility = "hidden";
    document.getElementById("postblog").style.visibility = "visible";
}
