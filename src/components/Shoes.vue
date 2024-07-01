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
                    {id:1 , name:'Тәпішке' , price:"5000 tg" , src: 'https://downloader.disk.yandex.ru/preview/5def4310d96e3d5c1e44a10ea26d0703f209576ee60bd6674ded6a4ce92be7e7/66831ff0/q-N0gpZRy8nL420wrhkJJLUbAKicrMwj14tU3fAy2dy1uSAkMT02xz2YTlyb9f0TNwBT5lxjjZPjz6_vJ5W3gg%3D%3D?uid=0&filename=BEZ_1270.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:2 , name:'Сандали' , price:"10000 tg" , src: 'https://downloader.disk.yandex.ru/preview/6573e733408a7f1fea2fe2bececdc9d1f9fc8e3877f5fe1785418872d8701f45/66831ff0/gAq7382WNTGnZF5fsMNn-fcgvZVKarIWQfXbPcSvfXCLiyLuhX7w666wLygIyd7YrTzmRUMhee9JFVRziLmZcA%3D%3D?uid=0&filename=BEZ_1283.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:3 , name:'Тәпішке 2' , price:"6000 tg" , src: 'https://downloader.disk.yandex.ru/preview/3388ca2b3348da6b23a4a360136b5dca5840b4bd2a994239e2ba758171e0ffb8/66831ff2/oEW5LnDIf8AtUZVf_aIqPKOcMNgN54gdiBXse29yvcX_4K6f9EZ8VOg3edXNv88SfLif424AspBvSWH2qkbFTg%3D%3D?uid=0&filename=BEZ_1398.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:4 , name:'Тәпішке 3' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/5f9548f42ff12e5a7ac35fb2511461448a3e9e6ba42ce957d39a1c48a3781643/66831ff2/pEsTXJqZaxoZaAiW1QM54HeXtyUDBR0MXOWkWwNmqTWZ1QriFkCQQ_ZCrfy8P7CgbFLpawC3HDrPlb4UxR-TKg%3D%3D?uid=0&filename=BEZ_1392.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:5 , name:'Тәпішке 4' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/55b72cd0283116b04660011bbd31c3b2499572022f461fd782bb00226d3fc28d/66831ff0/u4Bo0daPJrDOi1a5ZTM8wc2U49bhxxzr6QfvrIkSiU-IejM6-8IQ8OkRe2iH66bAnT25igzAGmmAAfrHh8pGqQ%3D%3D?uid=0&filename=BEZ_1295.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:6 , name:'Тәпішке 5' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/57b13d0aadab2604992414dc21cd268dfb45980d0c2f37f2dab75565b801ab30/66831ff0/5ZKR7WtJ_TQz8pm1iVLcIWCkwU6zOGzqw7QeiuRAyX1IRL8UgMnXqjWiqU_Ao5FngpLaBc_yWysRb03CLclZkA%3D%3D?uid=0&filename=BEZ_1267.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
                    {id:7 , name:'Тәпішке 6' , price:'5500 tg' , src: 'https://downloader.disk.yandex.ru/preview/63ec518bedd6001bec5fb5918d39c037d0e78daa942755dc31230623d2f6d4ac/66831ff0/YJDWpItLk_SenK8FU1GSH8th50qOvR0kigzchSJO4P20xEjBCmcsW0Pe2vQ1cp1a17DFl8OiocIDbLNIZK7pZQ%3D%3D?uid=0&filename=BEZ_1366.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=1920x945'} , 
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