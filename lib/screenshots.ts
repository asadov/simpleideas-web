export interface Screenshot {
  src: string;
  alt: string;
  caption: string;
}

/* The eight App Store screenshots of version 3.1.1, in store order (1290×2796 masters, served at 720×1560). */
export const screenshots: Screenshot[] = [
  { src: "/screenshots/aio31-01.jpg", caption: "Wave battle", alt: "An orange ring of enemy shots blooming in the middle of a swarm while the player's ship fires" },
  { src: "/screenshots/aio31-02.jpg", caption: "Pick your route", alt: "Branching sector map with battle, elite, meteor, camp, shop, unknown and boss nodes" },
  { src: "/screenshots/aio31-03.jpg", caption: "Dreadnought", alt: "The Dreadnought, the final boss, filling the top of the screen above the player's ship" },
  { src: "/screenshots/aio31-04.jpg", caption: "In-run shop", alt: "The shop between fights: Magnet Core, Last Stand, Twin Barrel, hearts and Drone service, with a reroll button" },
  { src: "/screenshots/aio31-05.jpg", caption: "Capital ship", alt: "The first boss, a capital ship, firing chains of red orbs over a colourful galaxy" },
  { src: "/screenshots/aio31-06.jpg", caption: "Pick your ship", alt: "The hangar's ship catalogue showing the Vela and its speed, fire rate, damage and agility" },
  { src: "/screenshots/aio31-07.jpg", caption: "Carrier down", alt: "The second boss, the Carrier, breaking apart in a chain of explosions" },
  { src: "/screenshots/aio31-08.jpg", caption: "Main menu", alt: "The main menu with Start, Upgrade, Hangar and Flight training" },
];
