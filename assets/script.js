
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++){
        console.log(topics[x]);

    }
}


/* console.log(topics) */
function selectTopic(){
        if (randomTopic == 'HTML'){
        console.log("lets study HTML");
        } else if (randomTopic == 'CSS'){
        console.log("lets study CSS");
        } else if (randomTopic == 'GIT'){
        console.log("lets study GIT");
        } else if (randomTopic == JavaScript){
            console.log(randomTopic == 'JavaScript');
        } else {
            console.log('please try again');
    }

}

console.log('heres some topics we learned through prework');
listTopics();
console.log('which topic would yopu like to study?');
selectTopic();