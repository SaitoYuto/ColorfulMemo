import { createPinia, setActivePinia } from "pinia";
import { beforeEach } from "vitest";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { config } from "@vue/test-utils";

beforeEach(() => {
  setActivePinia(createPinia());
});

config.global.plugins = [
  createVuetify({
    components,
    directives,
  }),
];

// Routerのモック設定
const mockRouter = {
  push: vi.fn(),
};

export { mockRouter };
