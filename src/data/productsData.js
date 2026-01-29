// Product data for all agricultural products
import beet from "../assets/images/Beet/Rubyred.png";
import celinabitterGourd from "../assets/images/BitterGourd/Celina.jpg";
import gracebitterGourd from "../assets/images/BitterGourd/Grace.jpg";
import romabottleGourd from "../assets/images/BottleGourd/Roma.jpg";
import rebeccagreenchilli from "../assets/images/Chilli/Spicy.jpg";
import rebeccagreenCapsicum from "../assets/images/Capsicum/RebeccaGreen.jpg";
import rebeccaredCapsicum from "../assets/images/Capsicum/RebeccaRed.jpg";
import rebeccayellowCapsicum from "../assets/images/Capsicum/RebeccaYellow.jpg";
import clusterbeans from "../assets/images/Clusterbean/clusterbean.jpg";
import corinacoriander from "../assets/images/Coriender/Corina.jpg";
import lizacoriander from "../assets/images/Coriender/Liza.jpg";
import noracowpea from "../assets/images/CowPea/Nora1.jpg";
import ellagreencucumber from "../assets/images/Cucumber/Ella.jpg";
import alicegreencucumber from "../assets/images/Cucumber/Alice.jpg";
import merigoldZellaYellow from "../assets/images/Merigold/ZellaYellow.png";
import merigoldZellaOrange from "../assets/images/Merigold/ZellaOrange.png";
import merigoldEverYellow from "../assets/images/Merigold/EverYellow.png";
import merigoldEverOrange from "../assets/images/Merigold/EverOrange.png";
import muskMelonSlender from "../assets/images/MuskMelon/Slender.JPG";
import muskMelonSlice from "../assets/images/MuskMelon/Slice.jpg";
import okraSusaan from "../assets/images/Okra/Sushaan.JPG";
import okraStella from "../assets/images/Okra/Stella.jpg";
import rebeccaredonion from "../assets/images/Onion/RebeccaRed.jpg";
import pumpkinJack from "../assets/images/Pumpkin/Jack1.jpg";
import rebeccawhiteRadish from "../assets/images/Radish/RebeccaWhite.JPG";
import xtrRidgeGourd from "../assets/images/RidgeGourd/XTR.JPG";
import rebeccagreenSpinach from "../assets/images/Spinach/RebeccaGreen.JPG";
import casperSpongeGourd from "../assets/images/SpongeGourd/Casper.JPG";
import kumatotomato from "../assets/images/Tomato/Kumato.JPG";
import lycoTomato from "../assets/images/Tomato/Lyco.jpg";
import watermelonGiant from "../assets/images/Watermelon/Gaint1.jpg";
import watermelonTandy from "../assets/images/Watermelon/Tandy.jpg";

/**
 * Product data structure:
 * - Each category contains multiple varieties
 * - Each variety has a unique slug used for routing
 * - Properties can be empty strings if not applicable
 * - The ProductDetail component handles empty values gracefully
 */
export const productsData = [
    {
        category: "Beet",
        varieties: [
            {
                slug: "beet-ruby-red",
                label: "Ruby Red",
                name: "Beet",
                image: beet,
                rating: 4.5,
                reviews: 14,
                description:
                    "Excellent deep red color, uniform round shape, very good market demand.",
                availability: "In Stock",
                fruitColor: "Deep red, uniform interior color",
                fruitShape: "Round and globe-shaped with a small crown and tap root",
                texture: "Smooth, buttery texture",
                tenderness: "More tender than other beets",
                plantHeight: "",
                plantType: "",
                plantHabit: "Medium green tops and an upright plant habit",
                bolttolerance: "Tolerant to bolting",
                fruiteSize: "",
                yield: "",
                maturity: "Maturing, taking around 52 days to grow",
                additionalInfo: "",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Bitter Gourd",
        varieties: [
            {
                slug: "bitter-gourd-celina",
                label: "Celina",
                name: "Bitter Gourd",
                image: celinabitterGourd,
                rating: 4.6,
                reviews: 15,
                description:
                    "Bright red fruits, excellent medicinal properties, high antioxidant content.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "Spindle-shaped",
                fruiteSize: "Medium-long, with a length of 15-18 cm",
                fruitWeight: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "Highly vigorous vines",
                maturity: "55–60 Days",
                additionalInfo: "",
                resistance: "Intermediate resistance to powdery mildew and field tolerance to virus",
                category: "Vegetables",
            },
            {
                slug: "bitter-gourd-grace",
                label: "Grace",
                name: "Bitter Gourd",
                image: gracebitterGourd,
                rating: 4.7,
                reviews: 16,
                description:
                    "Smooth skin, very uniform fruits, high yield and excellent eating quality.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "",
                fruiteSize: "8-10 cm",
                fruitWeight: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "45-50 Days",
                additionalInfo: "Suitable for long Transport and Good Storability",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Bottle Gourd",
        varieties: [
            {
                slug: "bottle-gourd-roma",
                label: "Roma",
                name: "Bottle Gourd",
                image: romabottleGourd,
                rating: 4.5,
                reviews: 12,
                description:
                    "High-yielding variety with excellent shape and export quality.",
                availability: "In Stock",
                fruitColor: "Shiny green",
                fruitShape: "Cylindrical",
                fruiteSize: "40–45 Cm",
                fruitWeight: "600-750 grams",
                yield: "High Yielding",
                plantHeight: "",
                plantType: "Strong and vigorous",
                plantHabit: "",
                maturity: "60–65 Days after sowing",
                yield: "High-yielding",
                shelfLife: "Long",
                additionalInfo:
                    "Export-quality, suitable for long-distance transportation",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Chilli",
        varieties: [
            {
                slug: "chilli-spicy-green",
                label: "Spicy",
                name: "Chilli",
                image: rebeccagreenchilli,
                rating: 4.7,
                reviews: 18,
                description:
                    "Very pungent green chilli with excellent market demand and high yield.",
                availability: "In Stock",
                fruitColor:
                    "The fruit is deep green to attractive green when immature, turning bright red upon full maturity",
                fruitWeight: "",
                fruitShape: "They are very long and slender",
                fruiteSize:
                    "typically measuring 15–26 cm in length and 1–1.5 cm in diameter.",
                yield: "",
                plantHeight: "60–150 cm",
                plantType: "",
                plantHabit: "The plants are generally tall (often 60–150 cm), erect, and vigorous",
                maturity: "",
                skinTexture: "The skin is smooth, glossy, and firm",
                additionalInfo:
                    "",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Capsicum",
        varieties: [
            {
                slug: "rebecca-green-capsicum",
                label: "Rebecca Green",
                name: "Capsicum",
                image: rebeccagreenCapsicum,
                rating: 4.8,
                reviews: 19,
                description:
                    "Bright green colour, thick walls, excellent for fresh consumption.",
                availability: "In Stock",
                fruitColor: "Green",
                fruitShape: "Blocky",
                plantHeight: "70–90 cm",
                plantType: "",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHabit: "",
                maturity: "65–75 Days",
                additionalInfo: "High yield, good shelf life, virus tolerant",
                category: "Vegetables",
            },
            {
                slug: "rebecca-yellow-capsicum",
                label: "Rebecca Yellow",
                name: "Capsicum",
                image: rebeccayellowCapsicum,
                rating: 4.8,
                reviews: 19,
                description:
                    "Bright yellow colour, thick walls, excellent for fresh consumption.",
                availability: "In Stock",
                fruitColor: "Yellow",
                fruitShape: "Blocky",
                fruiteSize: "",
                fruitWeight: "",
                yield: "",
                plantHeight: "70–90 cm",
                plantType: "",
                plantHabit: "",
                maturity: "65–75 Days",
                additionalInfo: "High yield, good shelf life, virus tolerant",
                category: "Vegetables",
            },
            {
                slug: "rebecca-red-capsicum",
                label: "Rebecca Red",
                name: "Capsicum",
                image: rebeccaredCapsicum,
                rating: 4.9,
                reviews: 22,
                description:
                    "Premium red capsicum with excellent colour and size uniformity.",
                availability: "In Stock",
                fruitColor: "Red",
                fruitShape: "Blocky",
                fruiteSize: "",
                fruitWeight: "",
                yield: "",
                plantHeight: "75–95 cm",
                plantType: "",
                plantHabit: "",
                maturity: "68–78 Days",
                additionalInfo:
                    "Export quality, high antioxidant content, disease resistant",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Cluster Bean",
        varieties: [
            {
                slug: "lexi",
                label: "Lexi",
                name: "Cluster Bean",
                image: clusterbeans,
                rating: 4.4,
                reviews: 11,
                description:
                    "Fast growing, tender pods, excellent for fresh market and processing.",
                availability: "In Stock",
                fruitColor: "light Green",
                fruitShape: "Long pods",
                fruiteSize: "",
                fruitWeight: "",
                yield: "",
                plantHeight: "70–90 cm",
                plantType: "",
                plantHabit: "",
                maturity: "60–70 Days",
                additionalInfo: "Early maturing, pest resistant, high yield",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Coriander",
        varieties: [
            {
                slug: "corina",
                label: "Corina",
                name: "Coriander",
                image: corinacoriander,
                rating: 4.6,
                reviews: 13,
                description:
                    "Dark green leaves, slow bolting, excellent aroma and shelf life.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "Umbrella",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHeight: "40–45 cm",
                plantType: "",
                plantHabit: "",
                maturity: "30–45 Days",
                additionalInfo:
                    "High shelf-life, suitable for long-distance transportation",
                category: "Vegetables",
            },
            {
                slug: "liza",
                label: "Liza",
                name: "Coriander",
                image: lizacoriander,
                rating: 4.6,
                reviews: 13,
                description:
                    "Dark green leaves, slow bolting, excellent aroma and shelf life.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "Umbrella",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHeight: "40–45 cm",
                plantType: "",
                plantHabit: "",
                maturity: "30–45 Days",
                additionalInfo:
                    "High shelf-life, suitable for long-distance transportation",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Cowpea",
        varieties: [
            {
                slug: "cowpea-nora",
                label: "Nora",
                name: "Cowpea",
                image: noracowpea,
                rating: 4.6,
                reviews: 13,
                description:
                    "High yielding, good market demand, excellent for fresh market and processing.",
                availability: "In Stock",
                fruitColor: "Greenish White",
                fruitShape: "Long pods",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHeight: "70–90 cm",
                plantType: "",
                plantHabit: "",
                maturity: "60–70 Days",
                additionalInfo:
                    "Early maturing, pest resistant, Heat tolerant, high yield",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Cucumber",
        varieties: [
            {
                slug: "cucumber-ella",
                label: "Ella",
                name: "Cucumber",
                image: ellagreencucumber,
                rating: 4.5,
                reviews: 16,
                description: "Dark green, uniform fruits, very good for fresh market.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "",
                fruitWeight: "120-140 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "35–40 Days",
                additionalInfo: "High Yield and Tolerant to Diseases",
                category: "Vegetables",
            },
            {
                slug: "cucumber-alice",
                label: "Alice",
                name: "Cucumber",
                image: alicegreencucumber,
                rating: 4.5,
                reviews: 16,
                description: "Very good for fresh market.",
                availability: "In Stock",
                fruitColor: "Green",
                fruitShape: "",
                fruitWeight: "220-250 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "18-22 cm",
                plantType: "",
                plantHabit: "",
                maturity: "40–45 Days",
                additionalInfo: "GSuitable for Long Transport",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Marigold",
        varieties: [
            {
                slug: "zella-yellow",
                label: "Zella Yellow",
                name: "Marigold",
                image: merigoldZellaYellow,
                rating: 5,
                reviews: 21,
                description:
                    "Bright golden yellow, highly compact flowers, excellent performance.",
                availability: "In Stock",
                flowerColor: "Yellow",
                flowerWeight: "",
                flowerSize: "",
                plantType: "",
                plantHabit: "",
                yield: "",
                flowerShape: "Highly Compact",
                plantHeight: "70–75 cm",
                maturity: "60–65 Days",
                additionalInfo: "High yield with Longevity",
                category: "Flowers",
            },
            {
                slug: "zella-orange",
                label: "Zella Orange",
                name: "Marigold",
                image: merigoldZellaOrange,
                rating: 4.9,
                reviews: 18,
                description:
                    "Vibrant deep orange, double flowers, very uniform plant habit.",
                availability: "In Stock",
                flowerColor: "Orange",
                flowerShape: "Highly Compact",
                flowerWeight: "",
                flowerSize: "",
                plantType: "",
                plantHabit: "",
                yield: "",
                plantHeight: "70–75 cm",
                maturity: "55–60 Days",
                additionalInfo: "High yield with Longevity",
                category: "Flowers",
            },
            {
                slug: "ever-yellow",
                label: "Ever Yellow",
                name: "Marigold",
                image: merigoldEverYellow,
                rating: 4.7,
                reviews: 15,
                description:
                    "Continuous blooming yellow variety suitable for year-round use.",
                availability: "In Stock",
                flowerColor: "Yellow",
                flowerShape: "Highly Compact",
                flowerWeight: "",
                flowerSize: "",
                plantType: "",
                plantHabit: "",
                yield: "",
                plantHeight: "80–90 cm",
                maturity: "55–60 Days",
                additionalInfo: "High yield with Longevity",
                category: "Flowers",
            },
            {
                slug: "ever-orange",
                label: "Ever Orange",
                name: "Marigold",
                image: merigoldEverOrange,
                rating: 4.8,
                reviews: 17,
                description:
                    "Long-lasting orange flowers with very good heat tolerance.",
                availability: "In Stock",
                flowerColor: "Orange",
                flowerShape: "Highly Compact",
                flowerWeight: "",
                flowerSize: "",
                plantType: "",
                plantHabit: "",
                yield: "",
                plantHeight: "80–90 cm",
                maturity: "55–60 Days",
                additionalInfo: "High yield with Longevity",
                category: "Flowers",
            },
        ],
    },
    {
        category: "Musk Melon",
        varieties: [
            {
                slug: "slender",
                label: "Slender",
                name: "Musk Melon",
                image: muskMelonSlender,
                rating: 4.6,
                reviews: 14,
                description: "Long shaped fruits, excellent aroma and sweetness.",
                availability: "In Stock",
                fruitColor: "Light Green / Netted",
                fruitShape: "Round and striped",
                fruitWeight: "1.0-1.25 kg",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "55–60 Days",
                additionalInfo: "Good transport quality, high sugar content",
                category: "Fruits",
            },
            {
                slug: "slice",
                label: "Slice",
                name: "Musk Melon",
                image: muskMelonSlice,
                rating: 4.7,
                reviews: 16,
                description: "Very good slicing quality, sweet and aromatic flesh.",
                availability: "In Stock",
                fruitColor: "Orange flesh color",
                fruitShape: "Round and striped",
                netting: "Mild netting",
                cavity: "Medium cavity",
                fruitWeight: "1.0-1.25 kg",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "55–60 Days",
                tss: "12 to 15%",
                additionalInfo: "",
                category: "Fruits",
            },
        ],
    },
    {
        category: "Okra",
        varieties: [
            {
                slug: "susaan",
                label: "Susaan",
                name: "Okra",
                image: okraSusaan,
                rating: 5,
                reviews: 25,
                description:
                    "Premium variety with excellent virus tolerance and very high yield.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "",
                fruitWeight: "",
                fruiteSize: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                yield: "",
                maturity: "45–50 Days",
                additionalInfo: "Tolerant to virus and Strong & tall plant, High Yield, Short to Medium internode distance",
                category: "Vegetables",
            },
            {
                slug: "stella",
                label: "Stella",
                name: "Okra",
                image: okraStella,
                rating: 4.8,
                reviews: 19,
                description:
                    "Smooth tender pods, excellent eating quality and market demand.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "45–50 Days",
                additionalInfo:
                    "Tolerant to virus and Strong & tall plant, High Yield, Short to Medium internode distance",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Onion",
        varieties: [
            {
                slug: "rebecca-red-onion",
                label: "Rebecca Red",
                name: "Onion",
                image: rebeccaredonion,
                rating: 4.8,
                reviews: 20,
                description: "Dark red bulbs, excellent storage life and uniform size.",
                availability: "In Stock",
                fruitColor: "Dark Red Color",
                fruitShape: "Oval-round shape and a barrel-like head",
                fruitWeight: "80-110 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "80–90 days after transplanting ",
                tolerance: "Tolerant to pests and diseases, as well as tip burn ",
                additionalInfo: "",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Pumpkin",
        varieties: [
            {
                slug: "jack",
                label: "Jack",
                name: "Pumpkin",
                image: pumpkinJack,
                rating: 4.5,
                reviews: 13,
                description:
                    "Large round fruits, deep orange flesh, excellent for cooking & processing.",
                availability: "In Stock",
                fruitColor: "Green with white dots",
                fruitShape: "Flat Round",
                fruitWeight: "3-4 kg",
                fruiteSize: "",
                yield: "High Yielding",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "85–90 Days after sowing",
                additionalInfo: "",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Radish",
        varieties: [
            {
                slug: "rebecca-white",
                label: "Rebecca White",
                name: "Radish",
                image: rebeccawhiteRadish,
                rating: 4.4,
                reviews: 11,
                description:
                    "Pure white roots, crisp texture, very good for fresh market.",
                availability: "In Stock",
                fruitColor: "White",
                fruitShape: "",
                fruitWeight: "250-400 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "40–45 Days",
                additionalInfo:
                    "Roots Are Smooth And White, Roots can Stay in the Soil for long period after Maturity",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Ridge Gourd",
        varieties: [
            {
                slug: "xtr",
                label: "XTR",
                name: "Ridge Gourd",
                image: xtrRidgeGourd,
                rating: 4.6,
                reviews: 14,
                description:
                    "Very uniform fruits with prominent ridges, excellent market quality.",
                availability: "In Stock",
                fruitColor: "Lustrous green",
                fruitShape: "Medium-long and cylindrical with deep ridges",
                fruitWeight: "200-250 gm",
                fruiteSize: "40-45 cm",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "50–55 Days after sowing",
                additionalInfo: "Ridges with blackish lining",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Spinach",
        varieties: [
            {
                slug: "rebecca-green-spinach",
                label: "Rebecca Green",
                name: "Spinach",
                image: rebeccagreenSpinach,
                rating: 4.7,
                reviews: 15,
                description:
                    "Dark green leaves, slow bolting, excellent for fresh & processing.",
                availability: "In Stock",
                fruitColor: "Dark Green",
                fruitShape: "Oval to triangular leaves",
                fruitWeight: "",
                fruiteSize: "",
                yield: "",
                plantHeight: "40–45 cm",
                plantType: "",
                plantHabit: "",
                maturity: "30–35 Days",
                additionalInfo: "High nutritional value, good shelf life",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Sponge Gourd",
        varieties: [
            {
                slug: "casper",
                label: "Casper",
                name: "Sponge Gourd",
                image: casperSpongeGourd,
                rating: 4.5,
                reviews: 13,
                description:
                    "White spongy interior, excellent for cooking and very high yield.",
                availability: "In Stock",
                fruitColor: "Dark green",
                fruitShape: "Long & thin",
                fruitWeight: "100-150 grams",
                fruiteSize: "20–25 cm long, 3–5 cm wide",
                yield: "",
                plantHeight: "",
                plantType: "",
                maturity: "45-50 Days",
                plantHabit: "Early and profuse fruit set",
                additionalInfo: "",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Tomato",
        varieties: [
            {
                slug: "lyco",
                label: "Lyco",
                name: "Tomato",
                image: lycoTomato,
                rating: 4.7,
                reviews: 17,
                description:
                    "High lycopene content, excellent for processing and fresh use.",
                availability: "In Stock",
                fruitColor: "",
                fruitShape: "Flat Round",
                fruitWeight: "100-110 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "60–65 Days",
                additionalInfo: "Suitable for long Transport, Good Yield with  Uniform fruit size ",
                category: "Vegetables",
            },
            {
                slug: "kumato",
                label: "Kumato",
                name: "Tomato",
                image: kumatotomato,
                rating: 4.8,
                reviews: 19,
                description:
                    "Unique dark brown color, sweet flavor, excellent for fresh consumption.",
                availability: "In Stock",
                fruitColor: "",
                fruitShape: "Ovel",
                fruitWeight: "110-120 gm",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "60-65 Days",
                additionalInfo: "Higher yield, Suitable for long Transport",
                category: "Vegetables",
            },
        ],
    },
    {
        category: "Watermelon",
        varieties: [
            {
                slug: "giant",
                label: "Giant",
                name: "Watermelon",
                image: watermelonGiant,
                rating: 4.9,
                reviews: 23,
                description:
                    "Extra large fruits, deep red flesh, very sweet and high yielding.",
                availability: "In Stock",
                fruitColor: "light green rind with dark green stripes",
                fruitShape: "Oval to oblong",
                fruitWeight: "8-10 kg",
                fruiteSize: "",
                yield: "",
                plantHeight: "",
                plantType: "",
                plantHabit: "",
                maturity: "75–80 Days",
                tss: "11-13%",
                additionalInfo: "Good earliness with better fruit size and good flesh quality. Suitable For Long Transportation",
                category: "Fruits",
            },
            {
                slug: "tandy",
                label: "Tandy",
                name: "Watermelon",
                image: watermelonTandy,
                rating: 4.7,
                reviews: 18,
                description:
                    "Medium-sized fruits, crisp texture, excellent sweetness.",
                availability: "In Stock",
                fruitColor: "Light Green with dark stripes",
                fruitShape: "Oval",
                fruitWeight: "5-7 kg",
                fruiteSize: "",
                yield: "High Yielding",
                plantHeight: "Vining",
                plantType: "",
                plantHabit: "",
                maturity: "70–75 Days",
                additionalInfo: "Good shelf life, uniform fruit size",
                category: "Fruits",
            },
        ],
    },
];

/**
 * Helper function to find a product by its slug
 * @param {string} slug - The unique slug identifier
 * @returns {object|null} - The product object or null if not found
 */
export const findProductBySlug = (slug) => {
    for (const category of productsData) {
        const variety = category.varieties.find((v) => v.slug === slug);
        if (variety) return variety;
    }
    return null;
};

/**
 * Helper function to get all products as a flat array
 * @returns {array} - Array of all product varieties
 */
export const getAllProducts = () => {
    return productsData.flatMap((category) => category.varieties);
};

/**
 * Helper function to get products by category
 * @param {string} categoryName - The category name
 * @returns {array} - Array of products in that category
 */
export const getProductsByCategory = (categoryName) => {
    const category = productsData.find((cat) => cat.category === categoryName);
    return category ? category.varieties : [];
};

/**
 * All products in a flat array format for the Products page
 * This transforms the nested productsData structure into a flat array
 * with additional properties needed for the product listing page
 */
export const allProducts = productsData.flatMap((category) =>
    category.varieties.map((variety, index) => ({
        id: index + 1,
        name: variety.name,
        label: variety.label,
        image: { image: variety.image },
        description: variety.description,
        category: variety.category.toLowerCase(),
        slug: variety.slug,
        features: [
            variety.yield && `Yield: ${variety.yield}`,
            variety.maturity && `Maturity: ${variety.maturity}`,
            variety.additionalInfo && variety.additionalInfo.split(",")[0],
        ].filter(Boolean),
    }))
);

/**
 * Slider products - simplified format for product sliders/carousels
 * This is used in ProductSlider and MainFooter components
 */
export const allSliderProducts = productsData.flatMap((category, catIndex) =>
    category.varieties.map((variety, varIndex) => ({
        id: catIndex * 100 + varIndex + 1,
        name: variety.name,
        label: variety.label,
        slug: variety.slug,
        image: variety.image,
        description: variety.description,
    }))
);
