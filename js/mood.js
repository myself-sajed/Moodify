import axios from 'axios'



let moodify_button = document.getElementById('moodify-button')
moodify_button.addEventListener('click', () => {

    // Execution
    let mood = $('input[name="options"]:checked').val();
    axios.post('/moodify', { mood: mood })
        .then(function (response) {
            let songArray = response.data
            // Dynamic middle section
            dynamicMiddleSection(mood)
            dynamicForYou(songArray)

        })


})


function dynamicMiddleSection(mood) {

    if (mood == 'chill') {
        var my_mood = 'chilling'
    }
    else if (mood == 'love') {
        var my_mood = 'in love'
    }
    else if (mood == 'breakup') {
        var my_mood = 'broken'
    }
    else {
        var my_mood = mood
    }
    let markup = `<div class="bg-success container" style="border-radius: 20px;">
                            <div class="container">
                        <!-- Hero Section -->
                        <div class="row align-items-center g-0">
                                    <div class="col-xl-5 col-lg-6 col-md-12">
                                            <div class="py-5 py-lg-0">
                                    <h1 class="text-white display-4 fw-bold">Are you ${my_mood}?
                                        </h1>
                                                <p class="text-white mb-4 lead">
                        Every mood has it's own beauty. Our experts recommend best songs for your current mood.
                                        </p>

                        <a href="/explore" class="btn btn-light ">Explore</a>
                        </div>
                            </div>
                        <div class=" col-xl-7 col-lg-6 col-md-12 text-lg-end text-center">
                                    <img src="media/svg/${mood}.svg" height="400px" width="400px" alt="" class="img-fluid">
                        </div>
                        </div>
                        </div>
                        </div>`

    document.getElementById('middle__section').innerHTML = markup




}

function dynamicForYou(songArray) {
    let markup = ``
    songArray.forEach(function (song) {
        markup += `
                     <div class="col-sm-3">
                <div class="card my-2 text-center" style="height:25rem;border-radius :25px;">
                    <img src="media/corousel/hero2.jpg" class="card-img-top"
                        style="object-fit: cover; border-top-left-radius: 24px; border-top-right-radius:24px"
                        alt="...">
                    <div class="card-body">
                        <a href="" class="card-title text-decoration-none fs-5 fw-bold">
                            ${song.name}
                        </a>
                        <p class="card-text"><small class="text-muted">
                                ${song.movie}
                            </small></p>
                        <p>Artists : <b>
                                ${song.artists}

                            </b></p>
                        <a type="button" class="btn btn-success sticky-bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z">
                                </path>
                                <path
                                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z">
                                </path>
                            </svg>
                            Play Now
                        </a>
                    </div>
                </div>
            
    

    </div>`
    })

    document.getElementById('song__container').innerHTML = markup;
}