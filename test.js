import http from 'k6/http';
import { check } from 'k6';

const host = `${__ENV.HOST}` ||'localhost:';
// const port = `${__ENV.PORT}` || 8087;
var proto = 'https://';

export let options = {
  scenarios: {
    openMainPage: {
      executor: 'constant-vus',
      vus: 1,
      duration: '1m',
      exec: 'openMainPage',
    },
    openDiceRoller: {
      executor: 'constant-vus',
      vus: 2,
      duration: '1m',
      exec: 'openDiceRoller',
    },
    openCoinFlipper: {
      executor: 'constant-vus',
      vus: 3,
      duration: '1m',
      exec: 'openCoinFlipper',
    }
  },
  discardResponseBodies: false,
};

export function openMainPage() {
  let res = http.get(proto.concat(host, port));
  check(res, {
    "status code is 200": (res) => res.status == 200,
    "body not contains 'error'": (res) => res.body.includes('error') == false,
  });
}

export function openDiceRoller() {
  let res = http.get(proto.concat(host, port, '/diceRoller'));
  check(res, {
    "status code is 200": (res) => res.status == 200,
    "body not contains 'error'": (res) => res.body.includes('error') == false,
  });
}

export function openCoinFlipper() {
  let res = http.get(proto.concat(host, port, '/coinFlipper'));
  check(res, {
    "status code is 200": (res) => res.status == 200,
    "body not contains 'error'": (res) => res.body.includes('error') == false,
  });
}