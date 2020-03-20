$(document).ready(function () {
    $("#myModal").modal('show');
});



//immediate invoked function expression
(function () {
    const quotes = [
        {
            quote:
                "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "- Nelson Mandela",
            image: ("./assets/images/mandela.jpg")
        },
        {
            quote:
                "I think to regret is useless in life. It belongs to the past. ",
            author: "- Marlon Brando",
            image: ("./assets/images/brando.jpg")

        },
        {
            quote:
                "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
            author: "- James Cameron",
            image: ("./assets/images/cameron.jpg")

        },
    ];

    const btn = document
        .getElementById("generate-btn")
        .addEventListener("click", function () {
            // produce random number in the range of quotes items.
            // length 6;
            // last item has index 5
            //0.9 times 6 = 5.4
            //Math floor will round it down to 5. so from 0 to 5;
            let random = Math.floor(Math.random() * quotes.length);
            // display random quote
            document.getElementById("quote").textContent = quotes[random].quote;
            // display quote author
            document.querySelector(".quote-author").textContent =
                quotes[random].author;
            // display author image
            $("#img").attr("src", quotes[random].image);
        });
})();
