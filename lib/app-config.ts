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

  // Direct APK download — points at the latest GitHub Release asset.
  // Upload your APK as a release asset named "cdbc-app.apk" (or edit the name below).
  downloadUrl:
    'https://github.com/Cloudbit-Global/cdbc-app/releases/latest/download/cdbc-app.apk',
  releasesUrl: 'https://github.com/Cloudbit-Global/cdbc-app/releases',
} as const
