import { addBarGraph } from "./BarGraph";


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
    nitrogen_oxides: 0.623,
  },
];

const data2020 = [
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
    nitrogen_oxides: 0.623,
  },
];

const scene = document.querySelector("a-scene")!;

const maxPopulation2021 = Math.max(...data2021.map((d) => d.carbon_monoxide));
const maxPopulation2020 = Math.max(...data2020.map((d) => d.carbon_monoxide));
// const maxGrowth2021 = Math.max(...data2021.map((d) => d.nitrogen_oxides));
// const maxGrowth2020 = Math.max(...data2020.map((d) => d.nitrogen_oxides));

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
