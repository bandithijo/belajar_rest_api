const target_url = 'http://www.omdbapi.com/';
const apikey = '997f8db5';

function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: target_url,
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': apikey,
            's': $('#input-search').val()
        },
        success: function(result) {
            if (result.Response === 'True') {
                const movies = result.Search;
                // console.log(movies);
                $.each(movies, function(i, data) {
                    $('#movie-list').append(`
                        <div class="col-md-4">
                            <div class="card mb-3" style="width: 18rem;">
                              <img src="${data.Poster}" class="card-img-top">
                              <div class="card-body">
                                <h5 class="card-title">${data.Title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${data.Year}</h6>
                                <a href="#" class="card-link see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.imdbID}">See Detail</a>
                              </div>
                            </div>
                        </div>
                        `)
                });
                $('#input-search').val('');
            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center">${result.Error}</h1>
                    </div>
                    `);
            }
        }
    });
};

$('#button-search').on('click', function() {
    searchMovie();
});

$('#input-search').on('keyup', function(e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function() {
    // console.log($(this).data('id'));
    $.ajax({
        url: target_url,
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': apikey,
            'i': $(this).data('id')
        },
        success: function(movie) {
            if (movie.Response === 'True') {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="${movie.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h5>${movie.Title}</h5></li>
                                    <li class="list-group-item"><p><strong>Plot</strong>: ${movie.Plot}</p></li>
                                    <li class="list-group-item"><p><strong>Released</strong>: ${movie.Released}</p></li>
                                    <li class="list-group-item"><p><strong>Genre</strong>: ${movie.Genre}</p></li>
                                    <li class="list-group-item"><p><strong>Writer</strong>: ${movie.Writer}</p></li>
                                    <li class="list-group-item"><p><strong>Director</strong>: ${movie.Director}</p></li>
                                    <li class="list-group-item"><p><strong>Actors</strong>: ${movie.Actors}</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `)
            } else {
                $('.modal-body')
            }
        }
    });
});
