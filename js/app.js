$(document).ready(function () {
    $("#myModal").modal('show');


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
                image: ("./assets/images/disney.jpg")

            },
            {
                quote:
                    "What seems to us as bitter trials are often blessings in disguise.",
                author: "- Oscar Wilde",
                image: ("./assets/images/wilde.jpg")

            },
            {
                quote:
                    "If you're going through hell, keep going.",
                author: "- Winston Churchill",
                image: ("./assets/images/churchill.jpg")

            },
            {
                quote:
                    "However difficult life may seem, there is always something you can do and succeed at.",
                author: "- Stephen Hawkin",
                image: ("./assets/images/hawking.jpg")

            },
            {
                quote:
                    "In order to be irreplaceable one must always be different..",
                author: "- Coco Chanel",
                image: ("./assets/images/chanel.jpg")

            },
        ];

        const btn = document.getElementById("generate-btn").addEventListener("click", function () {
            // produce random number in the range of quotes items.
            let random = Math.floor(Math.random() * quotes.length);
            // display random quote
            document.getElementById("quote").textContent = quotes[random].quote;
            // display quote author
            document.querySelector(".quote-author").textContent =
                quotes[random].author;
            // display author image
            $("#img").attr("src", quotes[random].image);
            // Remove each quote after selection to prevent repeat
            quotes.splice(random, 1);

            // If quotes array equals 0, remove all content.
            if (quotes.length == 0) {
                document.getElementById("quote").textContent = [];
                document.querySelector(".quote-author").textContent = [];
                $("#img").attr("src", []);
                document.querySelector(".modal-body").textContent = ["Thanks for visiting!"];
                $("#myModal").modal('show');
                document.querySelector(".close").addEventListener("click", function () {
                    location.reload();
                });
            }
        });
    })();
});
