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
        {
            quote:
                "Don't cry because it's over, smile because it happened.",
            author: "- Dr. Seuss",
            image: ("./assets/images/seuss.jpg")

        },
        {
            quote:
                "Try not to become a person of success, but rather try to become a person of value.",
            author: "- Charles Darwin",
            image: ("./assets/images/darwin.jpg")

        },
        {
            quote:
                "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
            author: "- Albert Einstein",
            image: ("./assets/images/einstein.jpg")

        },
        {
            quote:
                "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "- Mahatma Gandhi",
            image: ("./assets/images/ghandi.jpg")

        },
        {
            quote:
                "The difference between winning and losing is most often not quitting.",
            author: "- Walt Disney",
            image: ("./assets/images/ghandi.jpg")

        },
        {
            quote:
                "What seems to us as bitter trials are often blessings in disguise.",
            author: "- Oscar Wilde",
            image: ("./assets/images/wilde.jpg")

        },
        {
            quote:
                "What seems to us as bitter trials are often blessings in disguise.",
            author: "- Oscar Wilde",
            image: ("./assets/images/wilde.jpg")

        },
        {
            quote:
                "What seems to us as bitter trials are often blessings in disguise.",
            author: "- Oscar Wilde",
            image: ("./assets/images/wilde.jpg")

        },
        {
            quote:
                "What seems to us as bitter trials are often blessings in disguise.",
            author: "- Oscar Wilde",
            image: ("./assets/images/wilde.jpg")

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
            let randomQuotes = quotes.sort[random];
            // display random quote
            document.getElementById("quote").textContent = quotes.sort[randomQuotes].quote;
            // display quote author
            document.querySelector(".quote-author").textContent =
                quotes.sort[randomQuotes].author;
            // display author image
            $("#img").attr("src", quotes[random].image);
        });
})();
