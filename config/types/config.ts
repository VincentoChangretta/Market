
export type BuildMode = "development" | "production"
export interface BuildPaths {
    entry: string,
    html: string,
    build: string,
}
export interface buildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    isDev: boolean,
    port: number
}