import * as Factory from "factory.ts";
import Theme from "../../models/theme";
import { faker } from '@faker-js/faker';

export const themeModeFactory = Factory.Sync.makeFactory<Theme>(() => ({
    primary: faker.color.human(),
    secondary: faker.color.human(),
    error: faker.color.human(),
}));
