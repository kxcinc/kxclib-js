export declare type KxclibPackageVersionInfo = {
    libraryName: "kxclib-js";
    npmPackageName: "kxclib";
    versionNumber: `${number}.${number}.${number}`;
    isVersionDirty: boolean;
    repositoryUrl: string;
    gitCommitHash: string | null;
    gitBranch: string | null;
    gitTag: string | null;
};
declare const KxclibPackageVersionInfo: KxclibPackageVersionInfo;
export default KxclibPackageVersionInfo;
