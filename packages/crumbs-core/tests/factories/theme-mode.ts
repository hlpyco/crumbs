import * as Factory from "factory.ts";
import ThemeMode from "../../models/theme-mode";
import { faker } from '@faker-js/faker';

export const themeModeFactory = Factory.Sync.makeFactory<ThemeMode>(() => ({
    primary: faker.color.human(),
    secondary: faker.color.human(),
    error: faker.color.human(),
}));
