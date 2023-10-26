import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '28e9f7a03205453b9d1411d10eb4eafe',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'BigKwangs Tech Blog',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'KWANG HYEON KIM',

  // open graph metadata (optional)
  description: 'BigKwangs Tech Blog',

  // social usernames (optional)
  twitter: '',
  github: 'rhkdguskim',
  linkedin: '',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.3,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default',
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: '너비우선탐색',
  //     pageId: 'ed6d7fad54564826a275222eb4ba44c1'
  //   },
  //   {
  //     title: '위상정렬',
  //     pageId: '05ac056325124112bbd3292442f228aa'
  //   },
  //   {
  //     title : '다이나믹프로그래밍',
  //     pageId: '1248421b60994616a1fe09aacc4ac8b7'
  //   },
  //   {
  //     title : '우선순위큐',
  //     pageId: '71fb8c352189417e816b7cf9760f06d4'
  //   },
  //   {
  //     title : '완전탐색',
  //     pageId: 'ede6c7547d0241f1831fd4e153048221'
  //   },
  //   {
  //     title : '구현',
  //     pageId: 'b0a37c4492ea4159b8c18bae0353b8d4'
  //   },
  // ]
})
