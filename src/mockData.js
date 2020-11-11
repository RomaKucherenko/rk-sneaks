export const item = {
    title: "Nike Air React.js",
    prices: {oldPrice: 6999, lowPrice: 4999, currentPrice: 4999},
    brand:"Nike",
    sizes: [37, 38, 39, 41, 43],
    images:new Map([["AR1", "url"], ["AR2", "url"], ["AR3", "url"]]),
    type:"running", //Беговые, Тяжелаяатлетика, Шиповки, Бутсы
    rating: 3.5 + 1 * Math.random().toFixed(2),
    popularity: 3.0 + 1 * Math.random().toFixed(2)
}

export const brandList = {
    items: ["Nike", "Adidas", "Puma", "Reebok", "FILA"]
}
