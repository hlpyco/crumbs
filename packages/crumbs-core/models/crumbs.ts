import { IconsManager } from "managers/icons";
import { ThemesManager } from "managers/themes";

export default class Crumbs {
    constructor(
        readonly style: string,
        readonly cls: string,
        readonly themesManager: ThemesManager,
        readonly iconsManager: IconsManager,
    ) { }
}
