import * as Factory from "factory.ts";
import Theme from "../../models/theme";
import { themeModeFactory } from "./theme-mode";

export const themeFactory = Factory.Sync.makeFactory<Theme>(() => ({
    light: themeModeFactory.build(),
    dark: themeModeFactory.build(),
}));
