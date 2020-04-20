<template>
    <div class="blogCss">
        <div class="blog">
            <div class="blogTitle">
                <img src="/static/img.byj/1.png" alt="" />
            </div>
            <div class="blogContent" v-highlight>
                <p><img src="/static/img.byj/2.png" alt="" /></p>
                <a href="Javascript:void(0)" class="logo"><span></span></a>
            </div>
            <div class="blogFooter">
                <Tag color="green">收集</Tag>
                <Tag color="cyan">学习</Tag>
                <Tag color="blue">增长</Tag>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {}
    },
    methods: {
    },
    mounted () {
    }
}
</script>
<style type="text/css">
    a.logo { display: block; background: url(/static/img.byj/3.png) 0 0 no-repeat; background-size: contain; height: 150px; width: 150px; overflow: hidden; }
    a.logo span { display: block; background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAA2CAMAAADkptfjAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANXRSTlMA2NPM0MfBvLWwIxoOkKcUozceEYuCCzIrfZWGQReddDxlqydZml1OUnBqSERheC+gbUtWB9MpGgcAAATSSURBVFjDjVjZduowDLyFEChbUpaylQCBsFMo7f9/25Vky3IWnPjkfc5oNCMp/16/bhAsB+32djr5WH9dn4ff/f78c/qeLRaj3jyKwn7//b0Jz/cbjTo+D14N3lvqrR0Qf8Og0+m029M7YlwOx93+dj6tAAMgkoQgWi3E0CAePgBIo7T+uWgMg2VnABiTCdC4HH53tw1gzMaE8XiECsNvAgI8w+MtzWPvpDFcIsZ2ev/4gFIdj3vAABoaA3jEgCE06oSAJGwU79OB8TkMgs4AMFSpnsBjc/5ZGR5UK4aQUtUyRGZuGoSxBR4sxwblGI8BYh49RA7EEMkztWq7aKAcSGNKbQU0CINLFYVhHGseDcEgBBskcitOknPnXo5HkBw7l3gkmodpXVUsVkPeVwmNgDp3quTAUoE7VgjRS5KIW9eXUhWo0SyhMVQ0xB3UuQqjQA4Bsd7GSQN4dJQ7qHMFY7HozQXDzcPrVinV9s6lQjnIHT3ACLlzRXJPO9DWY+Fq3K4xOWMQjdM3ddUcukpBCIZX1LnbslIZk6+vTxMkKqyiRxjbJmeMTBz2XTQAA0ulM/d6obA6U6lGhCFdJXKwGsLk6aLxmSrVVTJ3zEGCBhQaxV3VcNKgrNKlUpm7l8yF2YGZa2MUN+65jEaAENRVmLlUKhpPRENK1bBnR9rktaBMDTGgMscNaRBGgiMwlvEECIWjY1SqxpIVR5NDHoI5jAFDGU9+2n+25BO3GqT4gLPqcNjZ4ymizG2lTF7gjXen4qQGdxUqrvIQaGDnRmjyWEzOPLK1OpT7z56yvxzrI1KcDZiByDTuXxXFJatw6dFZNYcg6YexnbnFE3DlpAEY1rKAsQ40CAMU7yXYuRkeAJCTo+OmwR43uxtF7soyh1K8mckRG2JeosZQqzExikusJ+hxLpXEem5yfJTRQAhZQXesOMV6YlfK9+uaRiZyW27/ya6g4hAU36iFZNRTkZtR3ONSWSg7Fw3kgf4TGqy42kcSLlUuDu2oqn86aMhw4n2EaOj1cMSR2zIY+JiFvJlbjS77j3aFi70rjOZz3KRzBsxLPiihscz678Y0sKswRzQNTnWWXCAipxrpGCHFkYbE4UMmx+s4/CqbTUue45mjA3OEJ0fLuUk3q9G4Y+Ly7cQDsAcQ1FVNXaq6eNwGubksLt7gGcuKz7CpEilVOkbSse51q9Booxq8uYnH0X+qVjn/2eYYl6sxGCCNCV+yfNcob4SxNocj1dsVdsNUjGBUrZT9oFR4Ato3oAdf1n+hGyIb6nxlUuJSU/Hq1mzIyoMIFpFLVRprXg6JBquBGJb/JNUtCL8UwtC4cqijGgs9x/u8HQqGgqi2HHKms/2MGlgqc2X2rdlUfAF6w0rLiOyftBzSOkLzj2gUNFXF5ZAg2H5CA68aScM4NrOJS1WveYggRO4uGrLvUIo8WfCZzL9cVNVF8PKrRirFavDc4HtcZpNVKg71WoXlUIcI/xzBvwrqxjQXR4JrdFx4LL9VWw51iIgaB850Oc441HPLoY1yctAQCKnUXu1USg1KqhbzEBaktrzlSwxyBu8JYD+esFgp6w8M8fDzV6bA9F6HuhGDj3E+Bnhvi3hTSMUI8UDJKyyH2hkMwVesmeLSVE1RQ+Z4havmP9Wa+zw7Fil2AAAAAElFTkSuQmCC") no-repeat;background-position: -100px -100px;background-size: 50px 200px;transition-property: all; transition-duration: 1s; height: 100px; width: 400px; }
    a.logo:hover span,
    a.logo.imhover span{ background-position: 450px 0; }
</style>
