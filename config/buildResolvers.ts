import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true, // абсолютные импорты в приоритете
        modules: [options.paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {}
    }
}