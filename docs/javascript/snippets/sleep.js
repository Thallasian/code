await new Promise(r => setTimeout(r, 2000));

export function sleep(time) {
  await new Promise(r => setTimeout(r, time));
}
