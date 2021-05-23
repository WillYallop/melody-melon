<template>
    <div>
        <h1>Privacy Policy</h1>
    </div>
</template>

<script>
export default {
    head() {
      return {
        title: 'Privacy Policy | Melody Melon',
        meta: [
            {
              hid: 'description',
              name: 'description',
              content: 'Discover your perfect playlist today with Melody Melon. We have playlists for every mood and genre, whats more, they are all updated monthly to stay fresh.'
            },
            {
              hid: "og:url",
              property: 'og:url',
              content: 'https://melodymelon.com/privacy'
            },
            {
              hid: "og:type",
              property: 'og:type',
              content: 'website'
            },
            {
              hid: "og:title",
              property: 'og:title',
              content: 'Privacy Policy | Melody Melon'
            },
            {
              hid: "og:description",
              property: 'og:description',
              content: 'Discover your perfect playlist today with Melody Melon. We have playlists for every mood and genre, whats more, they are all updated monthly to stay fresh.'
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: 'https://melodymelon.com/privacy'
            }
        ]
      }
  },
}
</script>