/* =========================================
   SOUL OF SABAH - WEBSITE SEARCH
========================================= */


/*
   WEBSITE PAGES
*/

const pages = [

    /* =========================
       LEGENDS
    ========================== */

    {
        title: "Balan-Balan",

        keywords:
            "balan balan balan-balan ghost spirit legend folklore mystery sabah",

        link:
            "https://iguana-dxpjh3.my.canva.site/balan-balan"
    },


    {
        title: "Huminodun",

        keywords:
            "huminodun hominodun legend kadazandusun sabah folklore culture",

        link:
            "https://iguana-dxpjh3.my.canva.site/hominodun"
    },


    {
        title: "Solungkoi",

        keywords:
            "solungkoi tamparuli legend sabah folklore ghost mystery",

        link:
            "https://iguana-dxpjh3.my.canva.site/solungkoi"
    },


    {
        title: "Hudoq",

        keywords:
            "hudoq ritual culture dayak borneo harvest folklore tradition",

        link:
            "https://iguana-dxpjh3.my.canva.site/hudoq"
    },


    {
        title: "Bobolian",

        keywords:
            "bobolian spiritual ritual priest traditional sabah folklore culture",

        link:
            "https://iguana-dxpjh3.my.canva.site/bobolian"
    },


    {
        title: "Tompulalanggoi",

        keywords:
            "tompulalanggoi folklore legend sabah tradition culture",

        link:
            "https://iguana-dxpjh3.my.canva.site/tompulalonggoi"
    },


    /* =========================
       ETHNICS
    ========================== */

    {
        title: "Murut",

        keywords:
            "murut ethnic ethnicity culture sabah people tradition community",

        link:
            "https://iguana-dxpjh3.my.canva.site/murut"
    },


    {
        title: "Kadazandusun",

        keywords:
            "kadazandusun ethnic ethnicity culture sabah people tradition community",

        link:
            "https://iguana-dxpjh3.my.canva.site/kadazandusun"
    },


    {
        title: "Bajau Sama",

        keywords:
            "bajau sama bajau samah ethnic ethnicity culture sabah people tradition community",

        link:
            "https://iguana-dxpjh3.my.canva.site/bajau-samah"
    },


    /* =========================
       OTHER PAGES
    ========================== */

    {
        title: "Explore Map",

        keywords:
            "explore map location places sabah map folklore",

        link:
            "https://iguana-dxpjh3.my.canva.site/exploremap"
    },


    {
        title: "Sources",

        keywords:
            "sources references bibliography information references",

        link:
            "https://iguana-dxpjh3.my.canva.site/sources"
    },


    {
        title: "Sources 2",

        keywords:
            "sources references bibliography information references",

        link:
            "https://iguana-dxpjh3.my.canva.site/sources-2"
    }

];



/* =========================================
   SEARCH FUNCTION
========================================= */

function searchContent() {

    /* Get search input */

    const searchInput =
        document.getElementById("searchInput");


    /* Get the user's search */

    const input =
        searchInput.value
        .toLowerCase()
        .trim();


    /* Get results container */

    const results =
        document.getElementById("results");


    /* Clear previous results */

    results.innerHTML = "";


    /* =====================================
       EMPTY SEARCH
    ====================================== */

    if (input === "") {

        results.innerHTML = `
            <p class="no-results">
                Please enter something to search.
            </p>
        `;

        return;
    }


    /* =====================================
       SEARCH DATABASE
    ====================================== */

    const matches = pages.filter(function(page) {

        const title =
            page.title.toLowerCase();


        const keywords =
            page.keywords.toLowerCase();


        /*
           Search both page title
           and keywords
        */

        return (
            title.includes(input) ||
            keywords.includes(input)
        );

    });


    /* =====================================
       NO RESULTS
    ====================================== */

    if (matches.length === 0) {

        results.innerHTML = `
            <p class="no-results">
                No results found for
                "<strong>${input}</strong>".
            </p>
        `;

        return;
    }


    /* =====================================
       DISPLAY RESULTS
    ====================================== */

    matches.forEach(function(page) {

        /* Create clickable result */

        const result =
            document.createElement("a");


        /* Connect result to Canva page */

        result.href = page.link;


        /* Open in same tab */

        result.target = "_self";


        /* CSS class */

        result.className = "result";


        /* Result content */

        result.innerHTML = `

            <h2>
                ${page.title}
            </h2>

            <p>
                Read more about ${page.title}
            </p>

        `;


        /* Add result to page */

        results.appendChild(result);

    });

}



/* =========================================
   ENTER KEY
========================================= */

function handleEnter(event) {

    /*
       If visitor presses ENTER,
       perform search.
    */

    if (event.key === "Enter") {

        searchContent();

    }

}