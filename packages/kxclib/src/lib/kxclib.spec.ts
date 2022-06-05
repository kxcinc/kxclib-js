import { kxclib } from './kxclib';
import * as pkginfo from '../../package.json';

describe('kxclib', () => {
  const versionInfo = kxclib().versionInfo;
  it('should work', () => {
    expect(versionInfo.libraryName).toEqual('kxclib-js');
    expect(versionInfo.npmPackageName).toEqual('kxclib');
  });
  it('version consistency', () => {
    const versionNumber = versionInfo.versionNumber;
    expect(versionNumber).toEqual(pkginfo.version);

    let doesVersionNumberEntailsDirtiness; {
      const [,, dydayStr] = versionNumber.split('.');
      const dyday = parseInt(dydayStr);
      if (dyday % 2 === 0) doesVersionNumberEntailsDirtiness = true;
      else doesVersionNumberEntailsDirtiness = false;
    }
    expect(versionInfo.isVersionDirty).toBe(doesVersionNumberEntailsDirtiness);
  })
});
