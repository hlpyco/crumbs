import * as Factory from "factory.ts";
import Themes from "../../models/themes";
import { themeModeFactory } from "./theme";

export const themesFactory = Factory.Sync.makeFactory<Themes>(() => ({
    light: themeModeFactory.build(),
    dark: themeModeFactory.build(),
}));
