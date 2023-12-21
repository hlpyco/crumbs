import * as Factory from "factory.ts";
import IconProvider from '../../../models/icons/provider.ts';
import { faker } from "@faker-js/faker";

export const iconProviderFactory = Factory.Sync.makeFactory<IconProvider>(() => ({
    cdn: faker.internet.url({
        appendSlash: true,
    }),
    name: faker.lorem.word(),
    prefix: faker.lorem.word(),
    separator: faker.helpers.arrayElement(['-', '_', '.']),
    isDefault: faker.datatype.boolean(),
    families: [
        faker.lorem.word(),
        faker.lorem.word(),
        faker.lorem.word(),
    ],
    crossOrigin: faker.lorem.word(),
}));
