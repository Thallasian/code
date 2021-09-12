import Jimp from "jimp";

interface Pixel {
  color: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

function writeImage(pixel: Pixel) {
  return new Jimp(pixel.width, pixel.height, function (err, image) {
    if (err) throw err;

    image.setPixelColor(pixel.color, pixel.x, pixel.y);
    const name = "#" + pixel.color.toString(16).padStart(6, "0");
    console.log(name);

    image.write("pixels/" + name + ".png", (err) => {
      if (err) throw err;
    });
  });
}

let zero = 0x000000;
const eff = 0xffffff;

(async () => {
  for (let index = zero; index < eff; index++) {
    const pixel: Pixel = {
      color: index,
      width: 1,
      height: 1,
      x: 0,
      y: 0,
    };

    writeImage(pixel);
    await new Promise((r) => setTimeout(r, 1));
  }
})();
