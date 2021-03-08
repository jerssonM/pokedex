/* eslint-disable no-undef */
import { config } from "@vue/test-utils";

import en from "./src/locales/en";

beforeAll(() => {
  config.global.mocks = {
    $t: (msg) => en[msg],
  };
});
