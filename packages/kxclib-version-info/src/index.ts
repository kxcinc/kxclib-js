export type KxclibPackageVersionInfo = {
  libraryName: "kxclib-js";
  npmPackageName: "kxclib";
  versionNumber: `${number}.${number}.${number}`;
  isVersionDirty: boolean;
  repositoryUrl: string;
  gitCommitHash: string|null;
  gitBranch: string|null;
  gitTag: string|null;
}

const KxclibPackageVersionInfo: KxclibPackageVersionInfo = {
  versionNumber: "0.0.2",
  isVersionDirty: true,
  gitBranch: null,
  gitCommitHash: null,
  gitTag: null,

  libraryName: "kxclib-js",
  npmPackageName: "kxclib",
  repositoryUrl: "https://github/kxcteam/kxclib-js",
}

export default KxclibPackageVersionInfo
