<template>
    <div class="blogListComp siteWrapper sitePadding">

        <!-- Pinned Blog -->
        <div class="pinCon" :key="pinned.slug + ' 1'" v-for="pinned in pinned">
            <nuxt-link :to="'/blog/' + pinned.slug" v-if="pinned.pinned" class="pinnedBlog" :style="{ backgroundImage: `url(${pinned.image})`, 'background-color' : pinned.accentColor}">
                <div class="pinContent" >
                    <div class="topRow">
                        <div class="tagCon" :key="tag" v-for="tag in pinned.tags">
                            <p>{{tag}}</p>
                        </div>
                        <p class="createdDate">{{formatDate(pinned.createdAt)}}</p>
                    </div>
                    <p class="pinTitleP">{{pinned.title}}</p>
                    <p class="pinDescP">{{pinned.description}}</p>
                </div>
            </nuxt-link>
        </div>

        <!-- Blog Row -->
        <div class="blogRow" :key="blog.slug" v-for="blog in blogs" v-on:click="$router.push('/blog/' + blog.slug)">
            <div class="rowImgCon" :style="{ backgroundImage: `url(${blog.image})`, 'background-color' : blog.accentColor }"></div>
            <div class="rowContent">
                <div class="topRow">
                    <div class="tagCon" :key="tag" v-for="tag in blog.tags">
                        <p>{{tag}}</p>
                    </div>
                    <p class="createdDate">{{formatDate(blog.createdAt)}}</p>
                </div>
                <p class="rowTitleP">{{blog.title}}</p>
                <p class="rowDescP">{{blog.description}}</p>
                <nuxt-link :to="'/blog/' + blog.slug" class="btnStyle1">Read more..</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
         
        }
    },
    props: {
        blogs: Array,
        pinned: Array

    },
    methods: {
        /* Format Methods */
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
    }
}
</script>

<style scoped>
.blogListComp {
    width: 100%;
    z-index: 10;
    position: relative;
    padding-bottom: 80px;
}
/* Blog Container */
.blogCon {
    width: 100%;
}

/* Pinned Blog */
.pinCon {
    margin-bottom: 10px;
}
.pinnedBlog {
    background-position: center;
    background-size: cover;
    background-repeat: none;
    width: 100%;
    height: 350px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
} 
.pinnedBlog:hover {
    transform: scale(1.01);
}
.pinContent {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
} 
.pinContent .createdDate {
    color: #FFF;
}
.pinTitleP {
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
} 
.pinDescP {
    color: #FFF;
    font-size: 16px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    max-width: 700px;
} 
.rowCreatedDate {
    font-size: 14px;
    color: #FFF;
    margin-left: 10px;
}
.tagRowCon {
    padding: 5px 10px;
    background-color: #FFF;
    border-radius: 5px;
}
.tagRowCon p {
    font-size: 14px;
    color: #000;
}

/* Blog Row */
.blogRow {
    display: flex;
    padding: 10px;
    background-color: #1e1e1e ;
    border-radius: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    transition: 0.3s;
    cursor: default;
} 
.blogRow:hover {
    transform: scale(1.01);
}
.blogRow:last-child {
    margin-bottom: 0;
}
.rowImgCon {
    width: 200px;
    min-width: 200px;
    background-size: cover;
    background-repeat: none;
    background-position: center;
    border-radius: 10px;
}
.rowContent {
    padding: 10px 10px 10px 20px;
} 
.rowContent .btnStyle1 {
    display: block;
    margin-top: 10px;
    width: 200px;
    text-align: center;
    text-decoration: none;
    padding: 10px 40px;
    color: #FFF;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    transition: 0.3s;
    background-color: #E32539;
    cursor: pointer;
}
.rowContent .btnStyle1:hover {
    transform: scale(1.1);
}
.topRow {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.tagCon {
    padding: 5px 10px;
    background-color: #3DA389;
    border-radius: 5px;
    text-align: center;
}
.tagCon p {
    font-size: 14px;
    color: #FFF;
}
.createdDate {
    font-size: 14px;
    color: #939393;
    margin-left: 10px;
}
.rowTitleP {
    font-size: 16px;
    line-height: 18px;
    max-height: 36px;
    overflow: hidden;
    font-weight: bold;
    margin-bottom: 5px;
    color: #FFF;
} 
.rowDescP {
    font-size: 16px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    color: #E9E9E9;
} 

/* Media Queries */
@media only screen and (max-width: 700px) {
    .rowImgCon {width: 100px; min-width: 100px;}
    .rowContent .btnStyle1 {display: none;}
    .pinnedBlog {height: 300px;}
}
@media only screen and (max-width: 500px) {
    .rowContent {flex-wrap: wrap-reverse; padding: 0 0 0 10px;}
    .rowContent .topRow {flex-direction: column; align-items: flex-start;}
    .rowContent .createdDate {display: none;}
    .rowTitleP {height: 36px; max-height: 36px;}
    
}
</style>