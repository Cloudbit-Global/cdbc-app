// Central config for the Cloudbit download site.
// Update these once your GitHub repo + Release exist.

export const appConfig = {
  name: 'Cloudbit',
  tagline: 'The cloud, reimagined for the edge of tomorrow.',
  version: 'v1.0.0',
  fileSize: '18.4 MB',
  minAndroid: 'Android 8.0+',
  updatedOn: 'Aug 2026',

  // GitHub repository (owner/name) — update after you create the repo.
  repo: 'cloudbit/cloudbit-android',
  repoUrl: 'https://github.com/cloudbit/cloudbit-android',

  // Direct APK download. Point this at your GitHub Release asset once uploaded, e.g.
  // https://github.com/cloudbit/cloudbit-android/releases/latest/download/cloudbit.apk
  downloadUrl:
    'https://github.com/cloudbit/cloudbit-android/releases/latest/download/cloudbit.apk',
  releasesUrl: 'https://github.com/cloudbit/cloudbit-android/releases',
} as const
