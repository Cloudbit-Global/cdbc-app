// Central config for the Cloudbit download site.
// Update these once your GitHub repo + Release exist.

export const appConfig = {
  name: 'Cloudbit',
  tagline: 'The cloud, reimagined for the edge of tomorrow.',
  version: 'v1.0.0',
  fileSize: '18.4 MB',
  minAndroid: 'Android 8.0+',
  updatedOn: 'Aug 2026',

  // GitHub repository (owner/name).
  repo: 'Cloudbit-Global/cdbc-app',
  repoUrl: 'https://github.com/Cloudbit-Global/cdbc-app',

  // Direct APK download from the v3.0.0 GitHub Release.
  downloadUrl:
    'https://github.com/Cloudbit-Global/cdbc-app/releases/download/v3.0.0/CDBC-io-v3.0.0.apk',
  releasesUrl: 'https://github.com/Cloudbit-Global/cdbc-app/releases',
} as const
