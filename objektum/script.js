let phones = [
  {
    brand: "Apple",
    name: "iPhone X",
    price: 250000,
    provider: {
      country: "HU",
      name: "Vodafone",
    },
  },
  {
    brand: "Huawei",
    name: "10",
    price: 180000,
    provider: {
      country: "DE",
      name: "T-Mobile",
    },
  },
  {
    brand: "ZTE",
    name: "Blade",
    price: 110000,
    provider: {
      country: "DE",
      name: "Vodafone",
    },
  },
];

// Írassuk ki a phones változóból:
console.log(
// 1. Az első telefon nevét
 phones[0].name
)
// 2. A második telefon árát
console.log(
 phones[1].price
)
// 3. A harmadik telefon szolgáltatójának országát
console.log(
 phones[2].provider.country
)
