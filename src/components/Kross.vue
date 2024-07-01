<template>  
    <div class="shoes">
        <div class="shoe" v-for="item in items">
            <img :src="item.src" alt="">
            <div class="shoe__text">
                <div class="shoe__name">{{ item.name }}</div>
                <div class="shoe__name">{{ item.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return {
                items:[
                    {id:1 , name:'Тәпішке' , price:"5000 tg" , src: 'https://downloader.disk.yandex.ru/preview/a382b21af1689f857df913341053b792c7c1089af3d6e438f518d4890a3fa1d0/66831ff0/LwfWhrPW7P9VySMtxRQZ7fcgvZVKarIWQfXbPcSvfXCdtn0-De6YEA68snOMiTCxR0uLgFEFMFtGPpy6pGIHqw%3D%3D?uid=0&filename=BEZ_1275.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:2 , name:'Сандали' , price:"10000 tg" , src: 'https://downloader.disk.yandex.ru/preview/7cda5361aa77c71c89d51081dbcec3ba27e2c99cabb42ff256eccbd9fe37c31c/66831ff0/72lbl9_JSIo-8FdddQyMAARgWBMQIXEPQ_u7dF8BeJJ3t-pG4HxUpYAF3nEmyI-hzue5rDfoUzVY8Ms-j431rg%3D%3D?uid=0&filename=BEZ_1307.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:3 , name:'Тәпішке 2' , price:"6000 tg" , src: 'https://downloader.disk.yandex.ru/preview/3b53f505cb1cba0279ca9ccc08c8ff11d8c3c1d91788f31727e6d28253c9098d/66831ff0/PpuzUGPGYDR83E9uF7F3jgRgWBMQIXEPQ_u7dF8BeJK2GPp1JPi7_-0NyU4zVHDNcNsFjQrokNqWb-b_tLm9Jg%3D%3D?uid=0&filename=BEZ_1317.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:4 , name:'Тәпішке 3' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/6bdb9d579c272a7ed8895dfa915469cf1e57c5d4cf85cf49c29c89090285d941/66831ff0/mcnWXQlfNP4ijsWTOL9volQ3t_Yc0XsqBN2hiC0rJD8Ge-7SvERtFFLQXaEc2rgusmoY5U2cTXgkcp4tJ5OnNQ%3D%3D?uid=0&filename=BEZ_1332.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:5 , name:'Тәпішке 4' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/55b72cd0283116b04660011bbd31c3b2499572022f461fd782bb00226d3fc28d/66831ff0/u4Bo0daPJrDOi1a5ZTM8wc2U49bhxxzr6QfvrIkSiU-IejM6-8IQ8OkRe2iH66bAnT25igzAGmmAAfrHh8pGqQ%3D%3D?uid=0&filename=BEZ_1295.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:6 , name:'Тәпішке 5' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/57b13d0aadab2604992414dc21cd268dfb45980d0c2f37f2dab75565b801ab30/66831ff0/5ZKR7WtJ_TQz8pm1iVLcIWCkwU6zOGzqw7QeiuRAyX1IRL8UgMnXqjWiqU_Ao5FngpLaBc_yWysRb03CLclZkA%3D%3D?uid=0&filename=BEZ_1267.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:7 , name:'Тәпішке 6' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/63ec518bedd6001bec5fb5918d39c037d0e78daa942755dc31230623d2f6d4ac/66831ff0/YJDWpItLk_SenK8FU1GSH8th50qOvR0kigzchSJO4P20xEjBCmcsW0Pe2vQ1cp1a17DFl8OiocIDbLNIZK7pZQ%3D%3D?uid=0&filename=BEZ_1366.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} 
                ]
            }
        } , 
    }

</script>

<style>
    .shoes{
        width: 1850px ; 
        margin: 0 auto ; 
        margin-top: 8vh  ; 
        column-gap:20px ; 
        display: grid ; 
        grid-template-columns: 1fr 1fr 1fr  ;
    }
    .shoe{
        width: fit-content;
    }
    .shoe img{
        width: 596px ; 
    }
    .shoe__name{
        display: flex ; 
        justify-content: center ;
    }
    .shoe__text{
        padding: 2vh 0 ; 
    }

    @media(max-width: 1870px){
        .shoes{
            width: calc(100vw - 90px); 
            grid-template-columns: 1fr 1fr;
        }
        .shoe img{
            width: calc((100vw - 110px) / 2) ; 
        }
    }

    @media(max-width: 700px){
        .shoes{
            grid-template-columns: 1fr ; 
            width: calc(100vw - 50px) ; 
        }
        .shoe img{
            width: calc(100vw - 50px) ; 
        }
    }

    @media(max-width: 500px){
        .shoes{
            grid-template-columns: 1fr ; 
            width: calc(100vw - 30px) ; 
        }
        .shoe img{
            width: calc(100vw - 30px) ; 
        }
    }

   
</style>