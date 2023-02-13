import { addBarGraph } from "./BarGraph";

/*
Car emissions data:
https://www.bts.gov/content/estimated-national-average-vehicle-emissions-rates-vehicle-vehicle-type-using-gasoline-and








*/
const data2021 = [
  {
    automobile: "Light-duty vehicles",
    carbon_monoxide: 3.956,
    nitrogen_oxides: 0.173,
  },
  {
    automobile: "Light-duty trucks",
    carbon_monoxide: 5.046,
    nitrogen_oxides: 0.334,
  },
  {
    automobile: "Heavy-duty vehicles",
    carbon_monoxide: 14.104,
    nitrogen_oxides: 0.772,
  },
  {
    automobile: "Motorcycles",
    carbon_monoxide: 13.2,
    nitrogen_oxides: 0.64,
  },
  {
    automobile: "Light-duty vehicles",
    carbon_monoxide: 3.784,
    nitrogen_oxides: .133,
  },
    {
    automobile: "Light-duty trucks",
    carbon_monoxide: 2.211,
    nitrogen_oxides: 1.543,
  },
  {
    automobile: "Heavy-duty vehicles",
    carbon_monoxide: 1.923,
    nitrogen_oxides: 3.822,
  },
  {
    region: "Motorcycles",
    carbon_monoxide: 4.418,
    growth: 0.623,
  },
];

const data2020 = [
  {
    region: "Northeast",
    population: 57525633,
    growth: 17.4,
  },
  {
    region: "Midwest",
    population: 68935174,
    growth: 20.8,
  },
  {
    region: "West",
    population: 7863266,
    growth: 23.7,
  },
  {
    region: "South",
    population: 126409007,
    growth: 38.1,
  },
];

const scene = document.querySelector("a-scene")!;

const maxPopulation2021 = Math.max(...data2021.map((d) => d.population));
const maxPopulation2020 = Math.max(...data2020.map((d) => d.population));
// const maxGrowth2021 = Math.max(...data2021.map((d) => d.growth));
// const maxGrowth2020 = Math.max(...data2020.map((d) => d.growth));

let i = 0;
i = 0;
for (const region of data2021) {
  addBarGraph(scene, `${region.region} 2021`, region.growth, 100, "green", {
    x: -10 + i * 2.5,
    y: 0,
    z: -12,
  });
  i += 1;
}

i = 0;
for (const region of data2021) {
  addBarGraph(
    scene,
    `${region.region} 2021`,
    region.population,
    maxPopulation2021,
    "red",
    { x: -10 + i * 2.5, y: 0, z: -15 }
  );
  i += 1;
}

i = 0;
for (const region of data2020) {
  addBarGraph(
    scene,
    `${region.region} 2020`,
    region.population,
    maxPopulation2020,
    "red",
    { x: 0 + i * 2.5, y: 0, z: -15 }
  );
  i += 1;
}

i = 0;
for (const region of data2020) {
  addBarGraph(scene, `${region.region} 2020`, region.growth, 100, "green", {
    x: 0 + i * 2.5,
    y: 0,
    z: -12,
  });
  i += 1;
}
