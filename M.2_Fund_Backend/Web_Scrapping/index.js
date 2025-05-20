import * as cheerio from "cheerio";
import axios from "axios";

const main = async () => {
    const recetas = [];

    for (let i = 0; i < 3; i++) {
        const web = await axios.get(
            `https://www.paulinacocina.net/recetas/page/${i}`
        );
        const $ = cheerio.load(web.data);

        $("h3.elementor-heading-title")
            .toArray()
            .forEach((elem) => {
                recetas.push($(elem).text());
            });
    }
    console.log("Recetas: ", recetas);
    console.log("La cantidad de recetas es: ", recetas.length);
};

main();
