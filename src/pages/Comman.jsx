// productsData.js
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
        fruitColor: "Red",
        fruitShape: "Round Root",
        plantHeight: "30–40 cm",
        maturity: "50–60 Days",
        additionalInfo:
          "High nutritional value, excellent shelf life, good for short-term harvest",
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
        fruitShape: "Regular",
        plantHeight: "300–400 cm",
        maturity: "60–70 Days",
        additionalInfo:
          "Suitable for long transport, good storability, high medicinal value",
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
        fruitColor: "Dark green",
        fruitShape: "Long spindle",
        plantHeight: "320–420 cm",
        maturity: "62–72 Days",
        additionalInfo: "Premium quality, suitable for export, good shelf life",
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
        plantHeight: "40–45 cm",
        maturity: "60–70 Days",
        additionalInfo:
          "High-yielding, export-quality, suitable for long-distance transportation",
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
        fruitColor: "Glossy with Green",
        fruitShape: "Pointed",
        plantHeight: "60–80 cm",
        maturity: "70–80 Days",
        additionalInfo:
          "High pungency, consistent fruit size, good for fresh & dry use",
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
          "Bright yellow colour, thick walls, excellent for fresh consumption.",
        availability: "In Stock",
        fruitColor: "Green",
        fruitShape: "Blocky",
        plantHeight: "70–90 cm",
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
        plantHeight: "70–90 cm",
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
        plantHeight: "75–95 cm",
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
        plantHeight: "70–90 cm",
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
        plantHeight: "40–45 cm",
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
        plantHeight: "40–45 cm",
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
        plantHeight: "70–90 cm",
        maturity: "60–70 Days",
        additionalInfo:
          "Early maturing, pest resistant,Heat tolerant, high yield",
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
        fruitShape: "Cylindrical",
        plantHeight: "200–250 cm",
        maturity: "50–60 Days",
        additionalInfo: "Good transport quality, high yield",
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
        fruitShape: "Regular",
        plantHeight: "100–150 cm",
        maturity: "45–50 Days",
        additionalInfo: "Good transport quality, high yield",
        category: "Vegetables",
      },
    ],
  },
  // {
  //   category: "Egg Plant",
  //   varieties: [
  //     {
  //       slug: "egg-plant-rb-green",
  //       label: "RB-Green",
  //       name: "Egg Plant RB-Green",
  //       image: tomato,
  //       rating: 4.6,
  //       reviews: 14,
  //       description:
  //         "Shiny purple fruits, excellent cooking quality and high yield.",
  //       availability: "In Stock",
  //       flowerColor: "Purple",
  //       flowerShape: "Oval",
  //       plantHeight: "70–90 cm",
  //       maturity: "65–75 Days",
  //       additionalInfo: "High market acceptance, good shelf life",
  //       category: "Vegetables",
  //     },
  //     {
  //       slug: "terong",
  //       label: "Terong",
  //       name: "Egg Plant Terong",
  //       image: tomato,
  //       rating: 4.4,
  //       reviews: 12,
  //       description: "Classic variety with good taste and uniform fruit size.",
  //       availability: "In Stock",
  //       flowerColor: "Purple",
  //       flowerShape: "Oval to round",
  //       plantHeight: "65–85 cm",
  //       maturity: "60–70 Days",
  //       additionalInfo: "Good for local & distant markets",
  //       category: "Vegetables",
  //     },
  //   ],
  // },
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
        flowerColor: "Golden Yellow",
        flowerShape: "Highly Compact",
        plantHeight: "70–75 cm",
        maturity: "55–60 Days",
        additionalInfo: "High yield, long flowering, excellent heat tolerance",
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
        flowerColor: "Deep Orange",
        flowerShape: "Compact Double",
        plantHeight: "65–70 cm",
        maturity: "52–58 Days",
        additionalInfo: "High market demand, long vase life",
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
        flowerColor: "Bright Yellow",
        flowerShape: "Double",
        plantHeight: "60–70 cm",
        maturity: "50–55 Days",
        additionalInfo: "Ever-blooming, excellent for borders & pots",
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
        flowerColor: "Bright Orange",
        flowerShape: "Double",
        plantHeight: "62–72 cm",
        maturity: "53–58 Days",
        additionalInfo: "High flower count, excellent market acceptance",
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
        fruitShape: "Elongated",
        plantHeight: "Vining Type",
        maturity: "70–75 Days",
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
        fruitColor: "Light Green",
        fruitShape: "Round to oval",
        plantHeight: "Vining Type",
        maturity: "68–74 Days",
        additionalInfo: "High yield, excellent eating quality",
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
        fruitShape: "Regular",
        plantHeight: "150–200 cm",
        maturity: "45–50 Days",
        additionalInfo: "High Yield, Tolerant to virus, Strong & tall plant",
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
        fruitShape: "Regular",
        plantHeight: "140–190 cm",
        maturity: "47–52 Days",
        additionalInfo: "Tender fruits, high shelf life, disease resistant",
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
        fruitShape: "Round Bulb",
        plantHeight: "35–45 cm",
        maturity: "90–100 Days",
        additionalInfo: "Excellent storage life, high yield, good pungency",
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
        plantHeight: "Vining",
        maturity: "85–90 Days",
        additionalInfo: "High yield, good storage quality",
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
        fruitShape: "Long cylindrical",
        plantHeight: "30–40 cm",
        maturity: "25–30 Days",
        additionalInfo: "Fast growing, excellent crunch, mild taste",
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
        fruitShape: "Long cylindrical",
        plantHeight: "40–45 cm",
        maturity: "50–55 Days",
        additionalInfo: "High yield, suitable for long-distance transportation",
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
        plantHeight: "40–45 cm",
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
        plantHeight: "100–150 cm",
        maturity: "60–65 Days",
        additionalInfo: "Early & profuse fruit set, good transport quality",
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
        fruitColor: "Reddish-Orange",
        fruitShape: "Round",
        plantHeight: "120–150 cm",
        maturity: "70–80 Days",
        additionalInfo: "Good transport quality, uniform size",
        category: "Vegetables",
      },
      {
        slug: "kumato",
        label: "Kumato",
        name: "Tomato",
        image: kumatotomato,
        rating: 4.6,
        reviews: 15,
        description:
          "Very good taste, firm fruits, suitable for long-distance transport.",
        availability: "In Stock",
        fruitColor: "Green with Brown base",
        fruitShape: "Round to oval",
        plantHeight: "110–140 cm",
        maturity: "68–78 Days",
        additionalInfo: "High yield, excellent shelf life",
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
        rating: 4.8,
        reviews: 19,
        description:
          "Large size, very sweet red flesh, excellent market demand.",
        availability: "In Stock",
        fruitColor: "Green with dark stripes",
        fruitShape: "Round to oval",
        plantHeight: "Vining Type",
        maturity: "85–90 Days",
        additionalInfo: "High yield, very good sweetness",
        category: "Fruits",
      },
      {
        slug: "tandy",
        label: "Tandy",
        name: "Watermelon",
        image: watermelonTandy,
        rating: 4.7,
        reviews: 17,
        description:
          "Uniform size, crisp texture, excellent sweetness and transport quality.",
        availability: "In Stock",
        fruitColor: "Balck Green",
        fruitShape: "Oval",
        plantHeight: "Vining Type",
        maturity: "82–88 Days",
        additionalInfo: "Good shelf life, high market acceptance",
        category: "Fruits",
      },
    ],
  },
];

export const allSliderProducts = [
  // Beet
  {
    id: 1,
    name: "Beet",
    label: "Ruby Red",
    slug: "beet-ruby-red",
    image: beet,
    description:
      "Excellent deep red color, uniform round shape, very good market demand.",
  },

  // Bitter Gourd
  {
    id: 2,
    name: "Bitter Gourd",
    label: "Celina",
    slug: "bitter-gourd-celina",
    image: celinabitterGourd,
    description:
      "Bright red fruits, excellent medicinal properties, high antioxidant content.",
  },
  {
    id: 3,
    name: "Bitter Gourd",
    label: "Grace",
    slug: "bitter-gourd-grace",
    image: gracebitterGourd,
    description:
      "Smooth skin, very uniform fruits, high yield and excellent eating quality.",
  },

  // Bottle Gourd
  {
    id: 4,
    name: "Bottle Gourd",
    label: "Roma",
    slug: "bottle-gourd-roma",
    image: romabottleGourd,
    description:
      "High-yielding variety with excellent shape and export quality.",
  },

  // Chilli
  {
    id: 5,
    name: "Marigold",
    label: "Zella Yellow",
    slug: "zella-yellow",
    image: merigoldZellaYellow,
    description:
      "Bright golden yellow, highly compact flowers, excellent performance.",
  },

  // Capsicum
  {
    id: 6,
    name: "Capsicum",
    label: "Rebecca Green",
    slug: "rebecca-green-capsicum",
    image: rebeccagreenCapsicum,
    description:
      "Bright green thick-walled capsicum, excellent for fresh consumption.",
  },
  {
    id: 7,
    name: "Capsicum",
    label: "Rebecca Yellow",
    slug: "rebecca-yellow-capsicum",
    image: rebeccayellowCapsicum,
    description:
      "Bright yellow colour, thick walls, premium quality for fresh market.",
  },
  {
    id: 8,
    name: "Capsicum",
    label: "Rebecca Red",
    slug: "rebecca-red-capsicum",
    image: rebeccaredCapsicum,
    description:
      "Premium red capsicum with excellent colour and size uniformity.",
  },

  // Cluster Bean
  {
    id: 9,
    name: "Cluster Bean",
    label: "Lexi",
    slug: "lexi",
    image: clusterbeans,
    description:
      "Fast growing, tender pods, excellent for fresh market and processing.",
  },

  // Coriander
  {
    id: 10,
    name: "Coriander",
    label: "Corina",
    slug: "corina",
    image: corinacoriander,
    description:
      "Dark green leaves, slow bolting, excellent aroma and shelf life.",
  },
  {
    id: 11,
    name: "Coriander",
    label: "Liza",
    slug: "liza",
    image: lizacoriander,
    description:
      "Dark green leaves, slow bolting, excellent aroma and shelf life.",
  },

  // Cowpea
  {
    id: 12,
    name: "Cowpea",
    label: "Nora",
    slug: "cowpea-nora",
    image: noracowpea,
    description:
      "High yielding, good market demand, excellent for fresh market.",
  },

  // Cucumber
  {
    id: 13,
    name: "Cucumber",
    label: "Ella",
    slug: "cucumber-ella",
    image: ellagreencucumber,
    description: "Dark green, uniform fruits, very good for fresh market.",
  },
  {
    id: 14,
    name: "Cucumber",
    label: "Alice",
    slug: "cucumber-alice",
    image: alicegreencucumber,
    description: "Very good for fresh market, good transport quality.",
  },

  // Egg Plant
  // {
  //   id: 15,
  //   name: "Egg Plant RB-Green",
  //   slug: "egg-plant-rb-green",
  //   image: tomato, // ← change if you have specific image later
  //   description:
  //     "Shiny purple fruits, excellent cooking quality and high yield.",
  // },
  // {
  //   id: 16,
  //   name: "Egg Plant Terong",
  //   slug: "terong",
  //   image: tomato,
  //   description: "Classic variety with good taste and uniform fruit size.",
  // },

  // Marigold
  {
    id: 17,
    name: "Chilli",
    label: "Spicy",
    slug: "chilli-spicy-green",
    image: rebeccagreenchilli,
    description:
      "Very pungent green chilli with excellent market demand and high yield.",
  },
  {
    id: 18,
    name: "Marigold",
    label: "Zella Orange",
    slug: "zella-orange",
    image: merigoldZellaOrange,
    description:
      "Vibrant deep orange, double flowers, very uniform plant habit.",
  },
  {
    id: 19,
    name: "Marigold",
    label: "Ever Yellow",
    slug: "ever-yellow",
    image: merigoldEverYellow,
    description:
      "Continuous blooming yellow variety suitable for year-round use.",
  },
  {
    id: 20,
    name: "Marigold",
    label: "Ever Orange",
    slug: "ever-orange",
    image: merigoldEverOrange,
    description: "Long-lasting orange flowers with very good heat tolerance.",
  },

  // Musk Melon
  {
    id: 21,
    name: "Musk Melon",
    label: "Slender",
    slug: "slender",
    image: muskMelonSlender,
    description: "Long shaped fruits, excellent aroma and sweetness.",
  },
  {
    id: 22,
    name: "Musk Melon",
    label: "Slice",
    slug: "slice",
    image: muskMelonSlice,
    description: "Very good slicing quality, sweet and aromatic flesh.",
  },

  // Okra
  {
    id: 23,
    name: "Okra",
    label: "Susaan",
    slug: "susaan",
    image: okraSusaan,
    description:
      "Premium variety with excellent virus tolerance and very high yield.",
  },
  {
    id: 24,
    name: "Okra",
    label: "Stella",
    slug: "stella",
    image: okraStella,
    description:
      "Smooth tender pods, excellent eating quality and market demand.",
  },

  // Onion
  {
    id: 25,
    name: "Onion",
    label: "Rebecca Red",
    slug: "rebecca-red-onion",
    image: rebeccaredonion,
    description: "Dark red bulbs, excellent storage life and uniform size.",
  },

  // Pumpkin
  {
    id: 26,
    name: "Pumpkin",
    label: "Jack",
    slug: "jack",
    image: pumpkinJack,
    description:
      "Large round fruits, deep orange flesh, excellent for cooking & processing.",
  },

  // Radish
  {
    id: 27,
    name: "Radish",
    label: "Rebecca White",
    slug: "rebecca-white",
    image: rebeccawhiteRadish,
    description: "Pure white roots, crisp texture, very good for fresh market.",
  },

  // Ridge Gourd
  {
    id: 28,
    name: "Ridge Gourd",
    label: "XTR",
    slug: "xtr",
    image: xtrRidgeGourd,
    description:
      "Very uniform fruits with prominent ridges, excellent market quality.",
  },

  // Spinach
  {
    id: 29,
    name: "Spinach",
    label: "Rebecca Green",
    slug: "rebecca-green-spinach",
    image: rebeccagreenSpinach,
    description:
      "Dark green leaves, slow bolting, excellent for fresh & processing.",
  },

  // Sponge Gourd
  {
    id: 30,
    name: "Sponge Gourd",
    label: "Casper",
    slug: "casper",
    image: casperSpongeGourd,
    description:
      "White spongy interior, excellent for cooking and very high yield.",
  },

  // Tomato
  {
    id: 31,
    name: "Tomato",
    label: "Lyco",
    slug: "lyco",
    image: lycoTomato,
    description:
      "High lycopene content, excellent for processing and fresh use.",
  },
  {
    id: 32,
    name: "Tomato",
    label: "Kumato",
    slug: "kumato",
    image: kumatotomato,
    description:
      "Very good taste, firm fruits, suitable for long-distance transport.",
  },

  // Watermelon
  {
    id: 33,
    name: "Watermelon",
    label: "Giant",
    slug: "giant",
    image: watermelonGiant,
    description: "Large size, very sweet red flesh, excellent market demand.",
  },
  {
    id: 34,
    name: "Watermelon",
    label: "Tandy",
    slug: "tandy",
    image: watermelonTandy,
    description:
      "Uniform size, crisp texture, excellent sweetness and transport quality.",
  },
];

export const allProducts = [
  // 1. Beet
  {
    id: 1,
    name: "Beet",
    label: "Ruby Red",
    image: { image: beet },
    description:
      "Premium beet with excellent deep red color, uniform round shape and high market demand.",
    category: "vegetables",
    slug: "beet-ruby-red",
    features: ["High Germination", "Vibrant Red Color", "Good Shelf Life"],
  },

  // Bitter Gourd (2 varieties)
  {
    id: 2,
    name: "Bitter Gourd",
    label: "Celina",
    image: { image: celinabitterGourd },
    description:
      "Unique bright red fruited bitter gourd with excellent medicinal properties and antioxidants.",
    category: "vegetables",
    slug: "bitter-gourd-celina",
    features: ["Medicinal Properties", "High Antioxidants", "Good Storability"],
  },
  {
    id: 3,
    name: "Bitter Gourd",
    label: "Grace",
    image: { image: gracebitterGourd },
    description:
      "Smooth skin variety with very uniform fruits, high yield and premium eating quality.",
    category: "vegetables",
    slug: "bitter-gourd-grace",
    features: ["Premium Quality", "High Yield", "Export Suitable"],
  },

  // Bottle Gourd
  {
    id: 4,
    name: "Bottle Gourd",
    label: "Roma",
    image: { image: romabottleGourd },
    description:
      "High-yielding bottle gourd with excellent shape, suitable for export and long transport.",
    category: "vegetables",
    slug: "bottle-gourd-roma",
    features: ["High Yield", "Export Quality", "Long Transport"],
  },

  // Chilli
  {
    id: 5,
    name: "Chilli",
    label: "Spicy",
    image: { image: rebeccagreenchilli },
    description:
      "Very pungent green chilli with consistent size, high yield and excellent market demand.",
    category: "vegetables",
    slug: "chilli-spicy-green",
    features: ["High Pungency", "Consistent Size", "Fresh & Dry Use"],
  },

  // Capsicum (3 varieties)
  {
    id: 6,
    name: "Capsicum",
    label: "Rebecca Green",
    image: { image: rebeccagreenCapsicum },
    description:
      "Bright green thick-walled capsicum, excellent for fresh consumption and salads.",
    category: "vegetables",
    slug: "rebecca-green-capsicum",
    features: ["Thick Walls", "Fresh Market", "Virus Tolerant"],
  },
  {
    id: 7,
    name: "Capsicum",
    label: "Rebecca Yellow",
    image: { image: rebeccayellowCapsicum },
    description:
      "Vibrant yellow capsicum with thick walls and premium quality for fresh market.",
    category: "vegetables",
    slug: "rebecca-yellow-capsicum",
    features: ["Vibrant Color", "Premium Quality", "Good Shelf Life"],
  },
  {
    id: 8,
    name: "Capsicum",
    label: "Rebecca Red",
    image: { image: rebeccaredCapsicum },
    description:
      "Deep red premium capsicum with excellent color, uniformity and long shelf life.",
    category: "vegetables",
    slug: "rebecca-red-capsicum",
    features: ["Export Quality", "High Antioxidants", "Disease Resistant"],
  },

  // Cluster Bean
  {
    id: 9,
    name: "Cluster Bean",
    label: "Lexi",
    image: { image: clusterbeans },
    description:
      "Fast growing variety with tender pods, excellent for fresh market and processing.",
    category: "vegetables",
    slug: "lexi",
    features: ["Tender Pods", "Early Maturing", "Pest Resistant"],
  },

  // Coriander (2 varieties)
  {
    id: 10,
    name: "Coriander",
    label: "Corina",
    image: { image: corinacoriander },
    description:
      "Dark green leaves with slow bolting, excellent aroma and long shelf life.",
    category: "vegetables",
    slug: "corina",
    features: ["Slow Bolting", "Strong Aroma", "Long Shelf Life"],
  },
  {
    id: 11,
    name: "Coriander",
    label: "Liza",
    image: { image: lizacoriander },
    description:
      "High quality coriander with dark green leaves and excellent aroma.",
    category: "vegetables",
    slug: "liza",
    features: ["Dark Green", "Strong Aroma", "High Shelf Life"],
  },

  // Cowpea
  {
    id: 12,
    name: "Cowpea",
    label: "Nora",
    image: { image: noracowpea },
    description:
      "High yielding cowpea with good market demand and tender pods.",
    category: "vegetables",
    slug: "cowpea-nora",
    features: ["High Yield", "Tender Pods", "Early Maturing"],
  },

  // Cucumber (2 varieties)
  {
    id: 13,
    name: "Cucumber",
    label: "Ella",
    image: { image: ellagreencucumber },
    description:
      "Dark green uniform fruits with excellent quality for fresh market.",
    category: "vegetables",
    slug: "cucumber-ella",
    features: ["Uniform Fruits", "Fresh Market", "High Yield"],
  },
  {
    id: 14,
    name: "Cucumber",
    label: "Alice",
    image: { image: alicegreencucumber },
    description:
      "Crisp and fresh cucumber variety suitable for local and distant markets.",
    category: "vegetables",
    slug: "cucumber-alice",
    features: ["Crisp Texture", "Good Transport", "High Yield"],
  },

  // Egg Plant
  // {
  //   id: 15,
  //   name: "Egg Plant RB-Green",
  //   image: { image: tomato },
  //   description:
  //     "Shiny purple fruits with excellent cooking quality and high market acceptance.",
  //   category: "vegetables",
  //   slug: "egg-plant-rb-green",
  //   features: ["Shiny Fruits", "High Yield", "Good Shelf Life"],
  // },
  // {
  //   id: 16,
  //   name: "Egg Plant Terong",
  //   image: { image: tomato },
  //   description:
  //     "Classic eggplant variety with good taste and uniform fruit size.",
  //   category: "vegetables",
  //   slug: "terong",
  //   features: ["Uniform Size", "Good Taste", "Market Friendly"],
  // },

  // Marigold (4 varieties)
  {
    id: 17,
    name: "Marigold",
    label: "Zella Yellow",
    image: { image: merigoldZellaYellow },
    description:
      "Bright golden yellow with highly compact flowers and excellent performance.",
    category: "flowers",
    slug: "zella-yellow",
    features: ["Compact Flowers", "High Yield", "Heat Tolerant"],
  },
  {
    id: 18,
    name: "Marigold",
    label: "Zella Orange",
    image: { image: merigoldZellaOrange },
    description:
      "Vibrant deep orange double flowers with very uniform plant habit.",
    category: "flowers",
    slug: "zella-orange",
    features: ["Double Flowers", "Vibrant Color", "Long Vase Life"],
  },
  {
    id: 19,
    name: "Marigold",
    label: "Ever Yellow",
    image: { image: merigoldEverYellow },
    description:
      "Continuous blooming yellow marigold suitable for year-round cultivation.",
    category: "flowers",
    slug: "ever-yellow",
    features: ["Ever Blooming", "Long Flowering", "Border Plant"],
  },
  {
    id: 20,
    name: "Marigold",
    label: "Ever Orange",
    image: { image: merigoldEverOrange },
    description:
      "Long-lasting bright orange flowers with very good heat tolerance.",
    category: "flowers",
    slug: "ever-orange",
    features: ["Heat Tolerant", "High Flower Count", "Market Preferred"],
  },

  // Musk Melon
  {
    id: 21,
    name: "Musk Melon",
    label: "Slender",
    image: { image: muskMelonSlender },
    description: "Long shaped fruits with excellent aroma and high sweetness.",
    category: "fruits",
    slug: "slender",
    features: ["High Sweetness", "Good Aroma", "Transport Quality"],
  },
  {
    id: 22,
    name: "Musk Melon",
    label: "Slice",
    image: { image: muskMelonSlice },
    description:
      "Excellent slicing quality with sweet and aromatic juicy flesh.",
    category: "fruits",
    slug: "slice",
    features: ["Slicing Quality", "Juicy Flesh", "High Yield"],
  },

  // Okra
  {
    id: 23,
    name: "Okra",
    label: "Susaan",
    image: { image: okraSusaan },
    description:
      "Premium okra with excellent virus tolerance and very high yield.",
    category: "vegetables",
    slug: "susaan",
    features: ["Virus Tolerant", "High Yield", "Strong Plant"],
  },
  {
    id: 24,
    name: "Okra",
    label: "Stella",
    image: { image: okraStella },
    description:
      "Smooth tender pods with excellent eating quality and market demand.",
    category: "vegetables",
    slug: "stella",
    features: ["Tender Pods", "Market Preferred", "Disease Resistant"],
  },

  // Onion
  {
    id: 25,
    name: "Onion",
    label: "Rebecca Red",
    image: { image: rebeccaredonion },
    description: "Dark red bulbs with excellent storage life and uniform size.",
    category: "vegetables",
    slug: "rebecca-red-onion",
    features: ["Long Storage", "Uniform Size", "High Yield"],
  },

  // Pumpkin
  {
    id: 26,
    name: "Pumpkin",
    label: "Jack",
    image: { image: pumpkinJack },
    description:
      "Large round fruits with deep orange flesh, excellent for cooking.",
    category: "vegetables",
    slug: "jack",
    features: ["Large Fruits", "Deep Orange Flesh", "Good Storage"],
  },

  // Radish
  {
    id: 27,
    name: "Radish",
    label: "Rebecca White",
    image: { image: rebeccawhiteRadish },
    description:
      "Pure white roots with crisp texture and very good fresh market quality.",
    category: "vegetables",
    slug: "rebecca-white",
    features: ["Crisp Texture", "Fast Growing", "Mild Taste"],
  },

  // Ridge Gourd
  {
    id: 28,
    name: "Ridge Gourd",
    label: "XTR",
    image: { image: xtrRidgeGourd },
    description:
      "Very uniform fruits with prominent ridges and excellent market quality.",
    category: "vegetables",
    slug: "xtr",
    features: ["Uniform Fruits", "High Yield", "Long Transport"],
  },

  // Spinach
  {
    id: 29,
    name: "Spinach",
    label: "Rebecca Green",
    image: { image: rebeccagreenSpinach },
    description:
      "Dark green leaves with slow bolting and excellent nutritional value.",
    category: "vegetables",
    slug: "rebecca-green-spinach",
    features: ["Slow Bolting", "High Nutrition", "Good Shelf Life"],
  },

  // Sponge Gourd
  {
    id: 30,
    name: "Sponge Gourd",
    label: "Casper",
    image: { image: casperSpongeGourd },
    description:
      "White spongy interior variety with excellent cooking quality and high yield.",
    category: "vegetables",
    slug: "casper",
    features: ["High Yield", "Early Fruit Set", "Good Transport"],
  },

  // Tomato
  {
    id: 31,
    name: "Tomato",
    label: "Lyco",
    image: { image: lycoTomato },
    description:
      "High lycopene content tomato, excellent for processing and fresh use.",
    category: "vegetables",
    slug: "lyco",
    features: ["High Lycopene", "Processing Grade", "Uniform Size"],
  },
  {
    id: 32,
    name: "Tomato",
    label: "Kumato",
    image: { image: kumatotomato },
    description:
      "Rich flavor with firm fruits, suitable for long-distance transportation.",
    category: "vegetables",
    slug: "kumato",
    features: ["Rich Flavor", "Firm Fruits", "Long Shelf Life"],
  },

  // Watermelon
  {
    id: 33,
    name: "Watermelon",
    label: "Giant",
    image: { image: watermelonGiant },
    description:
      "Large size watermelon with very sweet red flesh and high market demand.",
    category: "fruits",
    slug: "giant",
    features: ["Large Size", "Very Sweet", "High Yield"],
  },
  {
    id: 34,
    name: "Watermelon",
    label: "Tandy",
    image: { image: watermelonTandy },
    description:
      "Uniform size with crisp texture, excellent sweetness and transport quality.",
    category: "fruits",
    slug: "tandy",
    features: ["Uniform Size", "Crisp Texture", "Good Transport"],
  },
];
