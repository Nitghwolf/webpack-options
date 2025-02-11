export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
    public: string;
}

export type BuildMode = "production" | "development";
export type BuildPlatform = "mobile" | "desktop";

export interface BuildOptions {
  mode: BuildMode;
  port: number;
  paths: BuildPaths;
  analyzer?: boolean;
  platform: BuildPlatform;
}
